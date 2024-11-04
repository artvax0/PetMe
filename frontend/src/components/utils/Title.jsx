import { useEffect } from 'react'

// Change the page title using this component
export default function Title({ title }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return null;
}
