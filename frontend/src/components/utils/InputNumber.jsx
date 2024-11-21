import { TextField } from '@mui/material';

export default function InputNumber({ stock, setStock }) {

  const handleValueChange = (e) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      if (Number(value) > 500) return setStock(500);
      if (Number(value) < 1) return setStock(1);
      setStock(Number(value));
    }
  }

  return (
    <TextField value={stock} aria-label='Quantity' type='number' onChange={(e) => handleValueChange(e)} slotProps={{ htmlInput: { min: 1, max: 500, style: { padding: 0, minWidth: '35px', minHeight: '35px', aspectRatio: '1/1' } }, input: { style: { boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px' } } }} />
  )
}
