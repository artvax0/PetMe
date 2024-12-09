import { Box, Button, Grid2, Paper } from "@mui/material";
import FormControl from "../utils/FormControl";
import { useTheme } from "../../providers/ThemeProvider";

export default function TransactionForm({ onSubmit, validateForm, styles = {}, errors = '', formData, onInputChange }) {
  const { theme } = useTheme();
  return (
    <Paper
      component="form"
      sx={{
        ...styles,
        maxWidth: '100%',
        mx: { xs: 0, sm: 'auto' },
        p: 2,
      }}
    >
      <Grid2 container spacing={2}>
        {/* Credit Card Number Input */}
        <Grid2 size={12}>
          <FormControl
            name="number"
            label="Credit Card Number"
            error={errors.number}
            onChange={onInputChange}
            formData={formData}
            slotProps={{ htmlInput: { maxLength: 16, placeholder: "0123456789012345", style: { textAlign: 'center' } } }}
          />
        </Grid2>

        {/* Expiration Date and CVV Inputs */}
        <Grid2 size={6}>
          <FormControl
            name="expiry"
            label="Expiration Date (MM/YY)"
            error={errors.expiry}
            onChange={onInputChange}
            formData={formData}
            slotProps={{ htmlInput: { maxLength: 5, placeholder: "MM/YY", style: { textAlign: 'center' } } }}
          />
        </Grid2>

        <Grid2 size={6}>
          <FormControl
            name="cvv"
            label="CVV"
            error={errors.cvv}
            onChange={onInputChange}
            formData={formData}
            slotProps={{ htmlInput: { maxLength: 4, placeholder: "000", style: { textAlign: 'center' } } }}
          />
        </Grid2>

        {/* Submit Button */}
        <Grid2 size={12}>
          <Button
            variant="contained"
            disabled={!validateForm()}
            onClick={onSubmit}
            size="large"
            color="success"
            fullWidth
            sx={{
              color: '#fff',
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1.1rem',
              py: 1,
              backgroundColor: theme.palette.success.main,
              '&:hover': { backgroundColor: theme.palette.success.dark },
            }}
          >
            Proceed Payment
          </Button>
        </Grid2>
      </Grid2>
    </Paper >
  )
}
