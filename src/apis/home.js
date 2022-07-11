// 和 Hoem相关的接口写在一块

import request from '@/utils/request'

// 、personalized
// 首页 - 推荐歌单
export const getRecommendList = (params) => {
  return request({
    url: '/personalized',
    params,
    // 将来外面可能传入params的值 {limit：20}
  })
}

export const getNewsongList = (params) => {
  return request({
    url: '/personalized/newsong',
    params,
    // 将来外面可能传入params的值 {limit：20}
  })
}
