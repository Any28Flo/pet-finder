import axios from 'axios';
// TODO: Move this to .env file 
const API_BASE_URL = 'https://frontend-take-home-service.fetch.com'; 

const api = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true
});

export default api;