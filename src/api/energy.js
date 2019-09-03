import request from '../services/request.service'

const energy = {
  uploadFile(params) {
    return request.post('/fileController/uploadFile', params)
  },
  getFileList() {
    return request.get('/fileController/getFileList')
  },
  getUseWater() {
    return request.get('/httpClient/getWaterUsed')
  },
  getSumUseWater() {
    return request.get('/httpClient/getWaterUsedSUM')
  },
  getWaterUsedDay() {
    return request.get('/httpClient/getWaterUsedDay')
  }
}

export default energy
