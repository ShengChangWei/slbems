import axios from 'axios'
// 创建一个axios
const request = axios.create({
  baseURL: ''
})

/**
 * 请求拦截
 */
request.interceptors.request.use(config => {
  return config
}, (error) => {
  return Promise.reject(error)
})
/**
 * 响应拦截
 */
request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  // 成功后的回调
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
const weatherService = {

  getWeatherReport() {
    return request.get('https://restapi.amap.com/v3/weather/weatherInfo?city=110108&extensions=all&output=JSON&key=55f909211b9950837fba2c71d0488db9')
  }
}

export default weatherService
