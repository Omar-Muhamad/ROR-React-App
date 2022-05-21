import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/greetings';

const getRandomGreeting = async () => axios.get(API_URL);

export default getRandomGreeting;
