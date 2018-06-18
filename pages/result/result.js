// pages/result/retult.js
//接入小程序api
var QQMapWX = require('../../lib/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var metrics;
var qqmapsdk;
var mylocation;
var result={
  hotel:"",
  touristSite:"",
  restaurant:"",
  city: ""
};
var city;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city:"哈哈",
    touristSite:0,
    relax:0,
    saving:0,
    time:0,
   // input:" "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      city: options.metrics[0],
      touristSite: options.metrics[1],
      relax: options.metrics[2],
      time: options.metrics[3],
      saving: options.metrics[4], })
      console.log(options.metrics);
    metrics = {
      city: this.data.city,
      touristSite: this.data.touristSite,
      relax: this.data.relax,
      time: this.data.time
    }
console.log(this.data.touristSite);
  

  },
/** *
*获取所在位置
*/

/**
 * 获取半径长度
 */
getRadius:function(){
      
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 /* onReady: function () {
       
 },*/

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onReady:function(){
    wx.request({
      url: "http://apis.map.qq.com/ws/place/v1/search?keyword=酒店&boundary=region(" + metrics.city + ",0)&page_size=" + 20 + "&page_index=1&orderby=_distance" + "&key=ZWFBZ-VF2WG-NNQQN-I3HA7-6M447-FXFLV",
      method: "GET",
      header: {},

      success: function (res) {
        console.log(res)

      },
      fail: function () { console.log("fail") },
      complete: function () { },
    })
  }
  


})

