const normalizeProfile = (user) => ({
  "name": {
    "first": user.first,
    "middle": user.middle,
    "last": user.last
  },
  "email": user.email,
  "image": {
    "url": user.url,
    "alt": user.alt
  },
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

export default normalizeProfile;