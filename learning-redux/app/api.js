import axios from 'axios'

const API_BASE = 'https://brewed-dev.herokuapp.com/v1'
const API_KEY = 'b780aac581de488cf77a629517ac999b'

let adapter

export function api() {
  if (!adapter) {
    adapter = axios.create({
      baseURL: API_BASE,
      timeout: 10000,
      headers: {
        'X-Api-Key': API_KEY,
        Accept: 'application/json'
      }
    })
  }

  return adapter
}

export default {
  recipes: {
    list: (filters) =>
      api().get('/recipes', { params: filters })
  },
  users: {
    create: user =>
      api().post('/users', { user })
  }
}

