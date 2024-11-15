const statusColors = (status) => {
  switch (status) {
    case 'Processing':
      return '#3981DD'

    case 'En Route':
      return '#DDC339'

    case 'Complete':
      return '#16B328'

    default:
      return '#C11'
  }
}

export default statusColors;