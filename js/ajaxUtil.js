/**
 * Created by hxsd on 2016/7/15.
 */
var $ = {
    ajax:function(options){
        // step 1: 创建核心对象
        // 标准的创建方式(非IE的方式), 支持IE7+、以及其它浏览器
        var xhr = this.createRequest();
        // step 2: 配置相关的参数
        xhr.open(options.method,options.url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                //alert(xhr.status);
                if(xhr.status == 200){
                    //alert(xhr.responseText);
                    options.success(xhr.responseText);
                }else{
                    options.fail();
                }
            }
        };

        // step 3: 发送请求
        xhr.send(null);
    },
    getJSON:function(url,success,fail){
        // step 1: 创建核心对象
        // 标准的创建方式(非IE的方式), 支持IE7+、以及其它浏览器
        var xhr = this.createRequest();
        // step 2: 配置相关的参数
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    success(xhr.responseText);
                }else{
                    fail();
                }
            }
        };

        // step 3: 发送请求
        xhr.send(null);
    },
    // 专门创建XMLHttpRequest对象的函数
    createRequest:function(){
        var xhr = null;

        try{
            // 先用下面这种方式创建XMLHttpRequest核心对象
            xhr = new XMLHttpRequest();
        }catch(e){
            // 如果上面的try中的语句执行失败，则进入这个代码块执行 - 主要是针对IE的不同版本
            try{
                xhr = new ActiveXObject("Msxml2.XMLHTTP");  // IE稍微高点的版本(6.5)
            }catch(e){
                try{
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){
                    console.log("你的浏览器版本太低，建议更新最新版");
                }
            }
        }

        return xhr;
    }
};