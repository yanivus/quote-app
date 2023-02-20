import axios from 'axios';

const defaultOptions = {
    baseURL:"https://quotes.rest/qod",
};
export default axios.create(defaultOptions);