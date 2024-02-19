import axios from "axios";

const client = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers:     {
      "API-KEY": "fbd6a7c7-cf96-48ab-8089-263e020e2e23"
  }
});

export default client