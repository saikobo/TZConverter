import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.timezonedb.com/v2.1',
  headers: {
    'Content-type': 'application/json',
  },
});
