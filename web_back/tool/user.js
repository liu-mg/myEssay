// 这个user.js用来管理用户进行的所有接口请求操作
//    - 将页面中的功能提取到user.js后需要区别哪部分代码是与接口有关的，哪部分代码是与页面有关的
//      - 与接口有关的要留下，与页面有关的部分再放回到页面中，并通过传参方式传入
var user = {
  // login方法用来管理用户登录接口的操作方式
  login: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
      //  success : function(res){
      //    options.callback(res);
      //  }
    });
  },

  // logout方法用来管理用户退出接口的操作方式
  logout: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback

    })
  },

  // getInfo方法用来管理用户的简单信息获取接口的操作方式
  getInfo: function (options) {
    $.ajax({
      // type : 'get',
      url: USER_INFO,
      success: options.callback
    });
  },

  // getAllInfo方法用来管理用户的详细信息接口的操作方式
  getAllInfo: function (options) {
    $.ajax({
      url: USER_INFO_GET,
      success: options.callback
    })
  },

  // edit方法用来管理用户的编辑接口的操作方式
  edit: function (options) {
    $.ajax({
      type: 'post',
      url: USER_INFO_EDIT,
      contentType: false,
      processData: false,
      success: options.callback
    })

  },

};