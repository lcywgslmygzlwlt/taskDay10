import request from '@/utils/request'

// 热搜关键字
export const getSearchTag = (params) =>
  request({
    url:'/search/hot',
    params,
  })

// 搜索结果
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  })
