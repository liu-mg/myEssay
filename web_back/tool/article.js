//设置article对象，保存文章接口的调用方法
var article = {
    //getDate用来获取文章列表的接口方法
    getCate : function(options){
        $.ajax({
            //type : 'get',  get默认，可以不用写
            url : ARTICLE_GET,
            success : options.callback
        });
    },

    // addCate用来管理文章分类新增接口的调用方式
    addCate : function(options){
        $.ajax({
            type : 'post',
            url : ARTICLE_ADD,
            data : options.data,
            success : options.callback
        });
    },

    //editCate方法用来管理文章编辑接口的调用方式
    editCate : function(options){
        $.ajax({
            type : 'post',
            url : ARTICLE_EDIT,
            data : options.data,
            success : options.callback
        });
    },

    //delCate方法用来管理文章编辑接口的调用方式
    delCate : function(options){
        $.ajax({
            type : 'post',
            url : ARTICLE_DEL,
            data : options.data,
            success : options.callback
        });
    },
}