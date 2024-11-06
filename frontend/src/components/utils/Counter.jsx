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
      <Button variant='contained' onClick={lowerCount}>-</Button>
      <TextField value={count} defaultValue={1} type='number' onChange={(e) => handleValueChange(e)} slotProps={{ htmlInput: { min: 1, max: 100 } }} />
      <Button variant='contained' onClick={raiseCount}>+</Button>
    </>
  )
}
