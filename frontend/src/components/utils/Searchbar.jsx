import { Button, Grid2, TextField } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import { useCallback, useState } from "react";

export default function Searchbar() {
  const { mode } = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get('q') ?? '');

  const handleChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    if (!searchInput) return setSearchParams();
    setSearchParams({ q: `${searchInput.trim().toLowerCase()}` })
  }, [searchInput]);

  return (
    <Grid2 container spacing={{ xs: 1, md: 3 }}>
      <Grid2 size={{ xs: 8, md: 10 }}>
        <TextField
          size='small'
          variant='filled'
          fullWidth
          onChange={(e) => handleChange(e)}
          placeholder="Search for a product"
          value={searchInput}
          slotProps={{
            input: {
              sx: {
                borderRadius: '100px',
                '&::before': { borderBottom: 0 },
                '&::after': { borderBottom: 0 },
                '&:hover': { borderBottom: 0 },
                '&:hover:not(.Mui-disabled, .Mui-error)::before': { borderBottom: 0 }
              }
            },
            htmlInput: { sx: { p: 1 } },
          }} />
      </Grid2>
      <Grid2 size={{ xs: 4, md: 2 }}>
        <Button
          fullWidth
          variant='contained'
          color='success'
          onClick={handleSearch}
          sx={{
            height: '100%',
            borderRadius: '100px',
            color: mode == 'light' ? '#000' : '#fff'
          }}>
          Search
        </Button>
      </Grid2>
    </Grid2>
  )
}
