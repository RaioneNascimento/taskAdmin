import axios from 'axios';

const api = axios.create({
  baseURL: 'http://task-apiadmin.herokuapp.com/'
})

export default api;