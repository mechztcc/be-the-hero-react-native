import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.132:8080'
})

export default api;