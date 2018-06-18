// pages/result/retult.js
var latitude;
var longitude;
var metrics;
var m=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    touristSite:0,
    relax:0,
    saving:0,
    time:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    m = JSON.parse(options.metrics);
    this.setData({
     // city: options.metrics[0],
      touristSite: m[0],
      relax: m[1],
      time: m[2],
      saving: m[3], 
      city:options.getcity
      })
      console.log(this.data.city)
    metrics = {
      city: this.data.city,
      touristSite: this.data.touristSite,
      relax: this.data.relax,
      time: this.data.time
    }
    //console.log(metrics)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

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
  getmap: function(e){
    latitude = ["39.915285", "39.915285","39.915285"]
    longitude = ["116.403857", "116.405857", "116.407857"]
    wx.navigateTo({
      url: '/pages/map/map?latitude=' + JSON.stringify(latitude) + '&longitude=' + JSON.stringify(longitude)
      
    })
  
  }
})

