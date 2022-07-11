import axios from 'axios'

// 请求根部 分离
const request = axios.create({
  baseURL: 'http://localhost:3000',
})

export default request
