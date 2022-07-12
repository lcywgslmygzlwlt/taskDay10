import request from '@/untils/request';

export const getRecommendList = (params) => {
  return request({
    url: '/personalized',
    params,
  });
};
export const getNewsongList = (params) => {
  return request({
    url: '/personalized/newsong',
    params,
  });
};
