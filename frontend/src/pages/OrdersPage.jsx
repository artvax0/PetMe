import { FormControl, Grid2, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import { useAuth } from '../providers/UserProvider'
import { useCallback, useState } from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function OrdersPage() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('orderID');
  const handleChange = useCallback((val) => {
    setFilter(val);
  }, [])
  return (
    <Grid2 container size={12} spacing={2} display='flex'>
      <Grid2 size={1}>
        <FormControl fullWidth color='highlight'>
          <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter By"
            onChange={handleChange}
          >
            <MenuItem value={'username'}>User Name</MenuItem>
            <MenuItem value={'address'}>Address</MenuItem>
            <MenuItem value={'orderID'}>Order ID</MenuItem>
            <MenuItem value={'orderStatus'}>Order Status</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 size={10}>
        <TextField fullWidth variant='filled' placeholder='Search...' slotProps={{ htmlInput: { sx: { py: 0, height: '56px' } } }} />
      </Grid2>
      <Grid2 size={1}>
        <Paper sx={{ backgroundColor: 'success.main' }}>Filter</Paper>
      </Grid2>
    </Grid2 >
  )
}
