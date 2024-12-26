const mapUserToModel = (user) => ({
  first: user.name.first,
  middle: user.name.middle,
  last: user.name.last,
  email: user.email,
  phone: user.phone,
  country: user.address.country,
  state: user.address.state,
  city: user.address.city,
  street: user.address.street,
  houseNumber: user.address.houseNumber,
  zip: user.address.zip
})

export default mapUserToModel;