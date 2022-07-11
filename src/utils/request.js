// 对axios封装
import axios from "axios";

// axios.default.baseUrl = "http://localhost:3000";

// export default axios;

// axios.create({})==> axios 的实例
const request = axios.create({
    baseURL: "http://localhost:3000",
})

export default request;