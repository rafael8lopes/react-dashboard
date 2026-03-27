import { Box, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material'
import type { User as ApiUser } from '../apis/Users'

export type User = ApiUser

type UserItemProps = {
  user: User
}

function UserItem({ user }: UserItemProps) {
  const addressLine = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`

  return (
    <Card component="li" variant="outlined" sx={{ borderRadius: 4, boxShadow: '0 12px 24px rgba(23, 32, 61, 0.08)' }}>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between">
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
          </Box>
          <Chip label={`#${user.id}`} color="primary" variant="outlined" sx={{ alignSelf: 'flex-start' }} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Box sx={{ flex: 1, p: 1.5, borderRadius: 3, bgcolor: 'rgba(25, 118, 210, 0.06)' }}>
            <Typography variant="overline" color="text.secondary">
              Contact
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
            <Typography variant="body2">{user.phone}</Typography>
            <Typography variant="body2">{user.website}</Typography>
          </Box>
          <Box sx={{ flex: 1, p: 1.5, borderRadius: 3, bgcolor: 'rgba(25, 118, 210, 0.06)' }}>
            <Typography variant="overline" color="text.secondary">
              Address
            </Typography>
            <Typography variant="body2">{addressLine}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user.address.geo.lat}, {user.address.geo.lng}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, p: 1.5, borderRadius: 3, bgcolor: 'rgba(25, 118, 210, 0.06)' }}>
            <Typography variant="overline" color="text.secondary">
              Company
            </Typography>
            <Typography variant="body2">{user.company.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user.company.catchPhrase}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.company.bs}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default UserItem
