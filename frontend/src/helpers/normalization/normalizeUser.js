const normalizeUser = (user) => ({
  "name": {
    "first": user.first,
    "middle": user.middle,
    "last": user.last
  },
  "email": user.email,
  "password": user.password,
  "phone": user.phone,
  "address": {
    "country": user.country,
    "state": user.state,
    "city": user.city,
    "street": user.street,
    "houseNumber": user.houseNumber,
    "zip": user.zip
  }
})

export default normalizeUser;