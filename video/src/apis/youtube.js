import axios from 'axios';

const KEY = 'AIzaSyA7g88ca52IKQO8MVTsg3GQXxycePoSFF0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        // q: 'surfboards',
    }
});

