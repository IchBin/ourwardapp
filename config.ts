export const config = {
  wardName: "Maples 6th Ward",
  apiUrl: process.env.API_URL,
  apiWard: process.env.API_WARD,
  wardAddress: {
    street: "8107 S 6700 W",
    city: "West Jordan",
    zip: "84081",
    mapUrl: "https://maps.app.goo.gl/o44HE2BvxPsEka1ZA",
  },
  apiHeaders: {
    headers: {
      "x-api-key": process.env.API_TOKEN,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: process.env.API_HERO_CARD,
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}
