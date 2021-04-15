import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://www.omdbapi.com/'
});

export default Api;