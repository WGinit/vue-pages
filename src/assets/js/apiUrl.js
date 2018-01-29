// 2017-12-21 所有接口封装

let apiUrl = {
    banner: '/api/banner',
    indexList: 'https://hn.algolia.com/api/v1/search_by_date?tags=story',
    picNews: '/listpicnews',
    news: '/api/news.php',
    team: '/api/team.php',
    hospital:'/api/hospital.php',
    story: '/api/story.php',
    getCode: '/getcode',  //获取验证码
    Bili: 'https://api.imjad.cn/bilibili/v2/',  //B站接口
    BiliPic: 'https://api.bilibili.com/x/web-interface/ranking?rid=1&day=3&jsonp=jsonp'
};
export default apiUrl;
