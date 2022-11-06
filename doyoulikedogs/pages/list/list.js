// pages/list/list.js

let key = 'APCBZ-4O4W3-FWS3M-3Z3QG-XMGIE-3SF2U';  //使用在腾讯位置服务申请的key
let referer = '耶总会';   //调用插件的app的名称
 
// let startPoint = JSON.stringify({  //起点,若不写默认为用户当前位置
//   'name': '',
//   'latitude': ,
//   'longitude': 
// });
let endPoint = JSON.stringify({  //终点
  'name': '西湖公园耶总会',
  'latitude': '26.09333082973811',
  'longitude': '119.28392359783936'

});


Page({

  /**
   * 页面的初始数据
   */
  data: { 
    // //自定义标记点数组
    //  markers:[],
    // //纬度
    // latitude:'',
    // //经度
    // longitude:'',
  },
  gotomap(){
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
//   onLoad: function () {
//     // 实例化API核心类
//     qqmapsdk = new QQMapWX({
//         key: 'APCBZ-4O4W3-FWS3M-3Z3QG-XMGIE-3SF2U' //上面第二步申请的认证KEY
//     });
// },
// onShow: function () {
//     // 调用接口
//     qqmapsdk.search({
//         keyword: '酒店',
//         success: function (res) {
//             console.log(res);
//         },
//         fail: function (res) {
//             console.log(res);
//         },
//     complete: function (res) {
//         console.log(res);
//     }
//  });
// },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})