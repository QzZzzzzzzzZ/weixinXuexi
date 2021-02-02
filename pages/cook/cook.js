Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用自定义函数
    var array = this.initData();
    // 设置data数据
    this.setData({
      array:array
    });
  },

  /**
   * 自定义函数--数据加载
   */
  initData: function (options) {
    var array = [];
    // 创建对象和属性，保存到数组
    var obj1 = new Object();
    obj1.img = '../../images/list/food.png';
    obj1.title = '爱心早餐';
    obj1.type = '健康养生';
    obj1.liulan = '20696浏览';
    obj1.pinglun = '12评论';
    array[0] = obj1;

    var obj2 = new Object();
    obj2.img = '../../images/list/food.png';
    obj2.title = '困了只要喝咖啡';
    obj2.type = '家庭';
    obj2.liulan = '30696浏览';
    obj2.pinglun = '15评论';
    array[1] = obj2;

    var obj3 = new Object();
    obj3.img = '../../images/list/food.png';
    obj3.title = '橘子吃多了变成小黄人';
    obj3.type = '在线一生';
    obj3.liulan = '10696浏览';
    obj3.pinglun = '5评论';
    array[2] = obj3;

    var obj4 = new Object();
    obj4.img = '../../images/list/food.png';
    obj4.title = '搜狐新闻，手机用多了';
    obj4.type = '广告';
    obj4.liulan = '20696浏览';
    obj4.pinglun = '12评论';
    array[3] = obj4;

    var obj5 = new Object();
    obj5.img = '../../images/list/food.png';
    obj5.title = '爱心早餐';
    obj5.type = '健康养生';
    obj5.liulan = '20696浏览';
    obj5.pinglun = '12评论';
    array[4] = obj5;
    return array;
  },
  // 点击绑定的事件：seeDetail
  seeDetail:function(e){
    // e：事件对象
    // currentTarget 属性集合
    // currentTarget.属性名称获取值
    console.log(e.currentTarget.id);
  }

})