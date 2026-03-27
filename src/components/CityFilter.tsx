import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

type CityFilterProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
}

function CityFilter({ value, options, onChange }: CityFilterProps) {
  const labelId = 'city-filter-label'

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>City</InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label="City"
        onChange={(event) => onChange(event.target.value)}
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
