import request from '@/utils/request'

export default {
  //获取视频播放凭证
  getVideoAuth(id) {
    return request({
      url: `/vod/video/get/auth/${id}`,
      method: 'get',

    })
  }

}
