// import axios from "axios";

// export default axios.create({
//     baseURL: "https://neims-backend.onrender.com/api",
// })

import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://neims-backend.onrender.com/api',
  // baseURL: 'localhost:3000/api'
})

export { CanceledError };