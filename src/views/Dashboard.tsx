import { useEffect, useMemo, useState } from 'react'
import { Alert, Box, CircularProgress, Container, Paper, Stack, Typography } from '@mui/material'
import { getAllUsers, type User as ApiUser } from '../apis/Users'
import CityFilter from '../components/CityFilter'
import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'
import type { User as UserItemUser } from '../components/UserItem'

function Dashboard() {
  const [users, setUsers] = useState<ApiUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadUsers = async () => {
      try {
        const data = await getAllUsers()
        if (isMounted) {
          setUsers(data)
          setError(null)
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError instanceof Error ? fetchError.message : 'Failed to load users')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadUsers()

    return () => {
      isMounted = false
    }
  }, [])

  const cityOptions = useMemo(() => {
    const uniqueCities = new Set<string>()
    users.forEach((user) => {
      uniqueCities.add(user.address.city)
    })
    return Array.from(uniqueCities).sort((a, b) => a.localeCompare(b))
  }, [users])

  const filteredUsers = useMemo(() => {
    const searchTerm = searchValue.trim().toLowerCase()

    return users.filter((user) => {
      const matchesCity = selectedCity ? user.address.city === selectedCity : true
      const matchesSearch = searchTerm
        ? `${user.name} ${user.email}`.toLowerCase().includes(searchTerm)
        : true

      return matchesCity && matchesSearch
    })
  }, [searchValue, selectedCity, users])

  const listUsers: UserItemUser[] = filteredUsers

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Box>
            <Typography variant="overline" color="text.secondary">
              Overview
            </Typography>
            <Typography variant="h3">User Dashboard</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              Browse and filter users across cities to keep tabs on contact details and company profiles.
            </Typography>
          </Box>

          <Paper
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 4,
              bgcolor: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <SearchBar value={searchValue} onChange={setSearchValue} placeholder="Search by name or email" />
              <CityFilter value={selectedCity} options={cityOptions} onChange={setSelectedCity} />
            </Stack>
          </Paper>

          {isLoading ? (
            <Stack direction="row" spacing={2} alignItems="center">
              <CircularProgress size={20} />
              <Typography variant="body2" color="text.secondary">
                Loading users...
              </Typography>
            </Stack>
          ) : null}
          {error ? <Alert severity="error">{error}</Alert> : null}
          {!isLoading && !error ? <UserList users={listUsers} /> : null}
        </Stack>
      </Container>
    </Box>
  )
}

export default Dashboard
