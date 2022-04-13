import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teset-pg.herokuapp.com/'
});

export default api;