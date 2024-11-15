import React from 'react'
import { useParams } from 'react-router-dom'

export default function OrderDetailsPage() {
  const { id } = useParams();
  return (
    <div>OrderDetailsPage + {id}</div>
  )
}
