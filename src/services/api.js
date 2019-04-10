import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-042019-2.herokuapp.com',
});

export default api;