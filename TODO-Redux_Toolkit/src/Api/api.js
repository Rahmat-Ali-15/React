//# axios is used to for asynchrounous task. In this task api.js is not needed

import { axios } from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})
