import axios from 'axios';

const api = axios.create({
    baseURL: newFunction(),
});

function newFunction() {
    return 'http://192.168.1.60:3333';
}

export default api;


