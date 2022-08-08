export const config = {
  apiUrl: process.env.LATTER_DAY_API_URL,
  apiWard: process.env.LATTER_DAY_API_WARD,
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LATTER_DAY_API_TOKEN,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "62f15ed9be3d42699d238977",
    },
  },
}
