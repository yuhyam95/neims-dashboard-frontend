import axios from "axios";

export default axios.create({
    baseURL: "https://neims-backend.onrender.com/api",
})