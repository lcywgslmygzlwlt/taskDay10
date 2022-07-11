import request from '@/utils/request'

export const getSearchList = (params) =>
  request({ url: '/cloudsearch', params })

export const getSearchTag = (params) => request({ url: '/search/hot', params })
