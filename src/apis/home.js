import request from '@/utils/request.js'

export const getCommendList = (params) =>
  request({
    url: '/personalized',
    params,
  })

// /personalized/newsong
export const getSongList = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  })
