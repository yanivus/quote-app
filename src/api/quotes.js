import axios from 'axios';

const defaultOptions = {
    baseURL:"https://quotes.rest/qod?language=en",
};
export default axios.create(defaultOptions);