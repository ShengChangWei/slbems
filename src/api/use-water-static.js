import request from '../services/request.service';

const uwService = {

  /**
     * 获取总表当前月用水量
     */
  getWaterSumMonthUsed() {
    return request.get('/httpClient/getWaterSumMonthUsed');
  },
  /**
     * 根据二级水表号 获取当前月累计用水量
     */
  getWaterMonthUsed() {
    return request.get('/httpClient/getWaterMonthUsed');
  },

  /**
     * 获取所有水表 设备 当前月累计用水量
     */
  getAllWaterMonthUsed() {
    return request.get('/httpClient/getAllWaterMonthUsed');
  },

  /**
   * 获取所有水表 设备 预警
   */
  getAllWaterWarn() {
    return request.get('/httpClient/getAllWaterWarn');
  },
  /**
     * 获取所有水表 设备 运行状态
     */
  getAllWaterStatus() {
    return request.get('/httpClient/getAllWaterStatus');
  },
  /**
     * 获取一二级表 当日用水量（饼图用）
     */
  getWaterDayUsed() {
    return request.get('/httpClient/getWaterDayUsed');
  },

  /**
     *
    获取总表 当前月 的同比 环比
     */
  getWaterSumMonthLastUsed() {
    return request.get('/httpClient/getWaterSumMonthLastUsed');
  },

  /**
     * 获取总当前年用水量
     */
  getWaterSumYearUsed() {
    return request.get('/httpClient/getWaterSumYearUsed');
  },

  /**
 * 获取总表 年同比 用水量
 */
  getWaterSumYearLastUsed() {
    return request.get('/httpClient/getWaterSumYearLastUsed');
  }

}

export default uwService;
