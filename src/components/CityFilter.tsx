import { FormControl, MenuItem, Select, Typography } from '@mui/material'

type CityFilterProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
}

function CityFilter({ value, options, onChange }: CityFilterProps) {
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        displayEmpty
        onChange={(event) => onChange(event.target.value)}
        renderValue={(selected) =>
          selected ? (
            selected
          ) : (
            <Typography component="span" color="text.secondary">
              City
            </Typography>
          )
        }
        inputProps={{ 'aria-label': 'City' }}
      >
        <MenuItem value="">All cities</MenuItem>
        {options.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CityFilter
