import axios from 'axios';

const api = axios.create({
  baseURL: 'http://app-escola-api.herokuapp.com/'
});

export default api;