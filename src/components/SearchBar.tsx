import { TextField } from '@mui/material'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchBar({ value, onChange, placeholder = 'Search users' }: SearchBarProps) {
  return (
    <TextField
      fullWidth
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      label="Search"
      aria-label="Search users"
    />
  )
}

export default SearchBar
