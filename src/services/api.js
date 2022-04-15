import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teset-pg.herokuapp.com/api/v1'
});

export default api;