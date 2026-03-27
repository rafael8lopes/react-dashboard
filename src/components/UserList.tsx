import { Paper, Stack, Typography } from '@mui/material'
import UserItem, { type User } from './UserItem'

type UserListProps = {
  users: User[]
}

function UserList({ users }: UserListProps) {
  if (users.length === 0) {
    return (
      <Paper
        variant="outlined"
        sx={{ p: 3, textAlign: 'center', borderStyle: 'dashed', bgcolor: 'rgba(255, 255, 255, 0.7)' }}
      >
        <Typography variant="body1" color="text.secondary">
          No users found.
        </Typography>
      </Paper>
    )
  }

  return (
    <Stack component="ul" spacing={2} sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Stack>
  )
}

export default UserList
