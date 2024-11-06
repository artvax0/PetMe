import { Button, TextField } from '@mui/material';
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(1);

  const raiseCount = () => {
    setCount(prev => Math.min(++prev, 100));
  }

  const lowerCount = () => {
    setCount(prev => Math.max(--prev, 1));
  }

  const handleValueChange = (e) => {
    const value = e.target.value;
    if (/\d*/.test(Number(value))) {
      if (Number(value) > 100) return setCount(100);
      if (Number(value) < 1) return setCount(1);
      setCount(Number(value));
    }
    setCount(prev => prev);
    console.log(count)
  }

  return (
    <>
      <Button variant='contained' aria-label='Lower Quantity' onClick={lowerCount} sx={{ p: 0, minWidth: '30px', aspectRatio: '1/1' }}>-</Button>
      <TextField value={count} aria-label='Quantity' defaultValue={1} type='number' onChange={(e) => handleValueChange(e)} slotProps={{ htmlInput: { min: 1, max: 100, style: { padding: 0, minWidth: '30px', minHeight: '30px', aspectRatio: '1/1' } }, }} sx={{ p: 0 }} />
      <Button variant='contained' aria-label='Raise Quantity' onClick={raiseCount} sx={{ p: 0, minWidth: '30px', aspectRatio: '1/1' }}>+</Button>
    </>
  )
}
