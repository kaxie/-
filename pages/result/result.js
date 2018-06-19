// pages/result/retult.js
var routedata;
var metrics;
var latitude;
var longitude;

var relaxCount;
var tourCount;
var locations;
var tourResult;
var relaxResult;
/*
getresult的参数
*/
var myradius;
var mallnum;
var restnum;
var seninum;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "",
    touristSite: 0,
    relax: 0,
    saving: 0,
    time: 0,
    /*myradius:1000,
    mallnum:5,
    restnum:5,
    seninum:5
     radius:1000,*/
    mall: 5,
    rest: 5,
    senic: 5,
    lng: 0,
    lat: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      city: options.getcity,
      touristSite: options.metrics[0],
      relax: options.metrics[1],
      time: options.metrics[2],
      saving: options.metrics[3],
    })

    /* 实现时间转化为搜索的半径*/
    // myradius=this.data.time/100;
    var cityStr = JSON.stringify(this.data.city);
    console.log(cityStr);
    wx.request({
      url: "https://apis.map.qq.com/ws/place/v1/search?keyword="+cityStr+" 景点&boundary=region(全国)&page_size=" + 20 + "&page_index=1&orderby=_distance" + "&key=ZWFBZ-VF2WG-NNQQN-I3HA7-6M447-FXFLV",
      method: "GET",
      header: {},

      success: function (res) {
        // console.log(res.data.cluster);
        // console.log(JSON.stringify(res));
        console.log(res)
      },
      fail: function () { console.log("fail") },
      complete: function () { },
    })
    wx.request({
      url: "https://apis.map.qq.com/ws/place/v1/search?keyword=" + cityStr + " 休闲&boundary=region(全国)&page_size=" + 20 + "&page_index=1&orderby=_distance" + "&key=ZWFBZ-VF2WG-NNQQN-I3HA7-6M447-FXFLV",
      method: "GET",
      header: {},

      success: function (res) {
        console.log(res)
      },
      fail: function () { console.log("fail") },
      complete: function () { },
    })
    var tour = this.data.touristSite;
    var relax = this.data.relax;
    var time = this.data.time;
    var saving = this.data.saving;
    var locations = time / 12;
    var ratio = tour / relax;
    if (ratio > 1.5) {
      tourCount = 7;
      relaxCount = 1
    }
    else if (ratio < 1.5 && ratio > 1) {
      tourCount = 6;
      relaxCount = 2
    }
    else if (ratio == 1) {
      tourCount = 4;
      relaxCount = 4;
    }
    else if (ratio < 1 && ratio > 0.5) {
      tourCount = 2;
      relaxCount = 6;
    }
    else {
      relaxCount = 8;
      tourCount = 0;
    }
    if (time <= 50) {
      relaxCount = relaxCount / 2;
      if (tourCount != 0) {
        tourCount = tourCount / 2;
      }
    }
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
  getmap: function (e) {
    latitude = ["39.915285", "39.915285", "39.915285"]
    longitude = ["116.403857", "116.405857", "116.407857"]
    wx.navigateTo({
      url: '/pages/map/map?latitude=' + JSON.stringify(latitude) + '&longitude=' + JSON.stringify(longitude)

    })
  }
})

