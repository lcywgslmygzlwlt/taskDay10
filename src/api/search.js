import request from '@/untils/request'
export const getSearchTags = (params) => {
    return request({
      url: '/search/hot',
      params,
    });
  };
  
  // /cloudsearch
  
  export const getSearchList = (params) => {
      return request({
        url: '/cloudsearch',
        params,
      });
    };