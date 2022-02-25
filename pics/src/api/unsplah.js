import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
                Authorization:
                "Client-ID 9TRepZmy5ylbq9CuAS_DpbmrHjS9KMt5y98gGeEloY4",
    },
});