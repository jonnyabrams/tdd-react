import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/my0EdJWqbKfwb6zjETNxjMsEvLmVDdZ9'
})

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants')
    return response.data
  },
}

export default api