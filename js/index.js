/**
 * Created by hxsd on 2016/7/15.
 */
window.onload=function(){
	   function fix(n){
           return n<10? "0"+n : n ;
    	};
    var time=new Date();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var	hours=time.getHours();
    var hour=time.getMinutes();
    var day=time.getDay();
    if(day==0){
		day="日";
    }else if(day==1){
	    day="一";
    }else if(day==2){
		day="二";
    }else if(day==3){
		day="三";
    }else if(day==4){
		day="四";
    }else if(day==5){
		day="五";
    }else if(day==6){
		day="六";
    }
	var time_jint=fix(month)+"月"+fix(date)+"日"+" "+"星期"+day;
//--------------------------------------
    function getNum(text){
        var value = text.replace(/[^0-9]/ig,"");
        return value;
    };
 //-------------------------------
    var oInp=document.getElementById('text');
    var oAdd=document.getElementById('add');
    var oDw=document.getElementById("dingwei");
    var timer=null;
    var oDzA2=document.getElementById("diz_a2");
    oDzA2.innerHTML=oInp.value;
 	var oArr=['北京','上海','广州','深圳','天津','重庆','南通','郑州','香港','南京','杭州','沈阳','海口','台北','长沙','昆明','长春','武汉','西安','合肥','石家庄','澳门','大连','珠海','济南','贵阳','太原','哈尔滨','兰州','南宁','南昌','青岛','三亚','福州','乌鲁木齐','西宁','厦门','银川','珠海','拉萨','成都','呼和浩特','开县','泰州']  
	var oTqiDZ=document.getElementById('tianqi_diz');
    for(var j=0;j<oArr.length;j++){
        var oLi=document.createElement('li');
        oLi.innerHTML=oArr[j];
        oTqiDZ.appendChild(oLi);
    };

//--------------
    oDw.onclick=function(){
        oTqiDZ.style.display="block"
    };
//---------
    var aLi=oTqiDZ.children;
    for(var a=0;a<aLi.length;a++){       
        aLi[a].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className=" ";
            };
            oInp.value=this.innerHTML;
            oDzA2.innerHTML=oInp.value;
            this.className="dz_bc";
            oTqiDZ.style.display="none";
            fn();
        };
		
    };
    oDw.onmouseout=function(){
        timer=setTimeout(function(){
            oTqiDZ.style.display="none";
        },500);
//-------------地址 ul------
        oTqiDZ.onmouseover=function(){
            clearTimeout(timer);
        };
    };
//---------but事件---------
    document.getElementById('but').onclick=function(){
        oDzA2.innerHTML=oInp.value;
        fn();
    };


 //-----------------------------------------------
    function iftype(type){
        var urlimg=""
        if(type=="晴"){
            urlimg="a_0.gif"
        }
        else if(type=="阴"){
            urlimg="a_1.gif"
        }
        else if(type=="多云"){
            urlimg="a_2.gif"
        }
        else if(type=="阵雨"){
            urlimg="a_3.gif"
        }
        else if(type=="雷阵雨"){
            urlimg="a_4.gif"
        }
        else if(type=="雷阵雨并伴有冰雹 "){
            urlimg="a_5.gif"
        }
        else if(type=="雨加雪"){
            urlimg="a_6.gif"
        }
        else if(type=="小雨"){
            urlimg="a_7.gif"
        }
        else if(type=="中雨"){
            urlimg="a_8.gif"
        }
        else if(type=="大雨"){
            urlimg="a_9.gif"
        }
        else if(type=="暴雨"){
            urlimg="a_10.gif"
        }
        else if(type=="大暴雨"){
            urlimg="a_11.gif"
        }
        else if(type=="特大暴雨"){
            urlimg="a_12.gif"
        }
        else if(type=="多云"){
            urlimg="a_13.gif"
        }
        else if(type=="阵雪"){
            urlimg="a_14.gif"
        }
        else if(type=="小雪"){
            urlimg="a_15.gif"
        }
        else if(type=="中雪"){
            urlimg="a_16.gif"
        }
        else if(type=="大雪"){
            urlimg="a_17.gif"
        }
        else if(type=="暴雪"){
            urlimg="a_18.gif"
        }
        else if(type=="雾"){
            urlimg="a_19.gif"
        }
        else if(type=="冻雨"){
            urlimg="a_20.gif"
        }
        else if(type=="沙尘暴"){
            urlimg="a_21.gif"
        }
        else if(type=="小到中雨"){
            urlimg="a_22.gif"
        }
        else if(type=="中到大雨"){
            urlimg="a_23.gif"
        }
        else if(type=="大到暴雨"){
            urlimg="a_24.gif"
        }
        else if(type=="暴雨到大暴雨"){
            urlimg="a_25.gif"
        }
        else if(type=="大暴雨到特大暴雨"){
            urlimg="a_26.gif"
        }
        else if(type=="小到中雪"){
            urlimg="a_27.gif"
        }
        else if(type=="中到大雪"){
            urlimg="a_28.gif"
        }
        else if(type=="大到暴雪"){
            urlimg="a_29.gif"
        }
        else if(type=="浮尘"){
            urlimg="a_30.gif"
        }
        return urlimg;
    };
//--------------------------------
    function fn(){
        var options={
            method: "GET",
            url:"http://wthrcdn.etouch.cn/weather_mini?city="+ oInp.value,
            success:showData
        };
        $.ajax(options);
        function showData(arr){
            var jsObj=JSON.parse(arr);
            //--------------------------
            document.getElementById("gan_mao").innerHTML=jsObj.data.ganmao;//感冒指数
            document.getElementById('time_today').innerHTML=time_jint;//今天时间
            //-----------------------------
            var f=jsObj.data.forecast;
            //------------------------------

            document.getElementById("to_day").innerHTML=
                '<span class="tqTubiao"><img src="images/'+iftype(f[0].type)+'"></span>'+
                ' <h3>'+f[0].type+'</h3>'+
                '<h2>'+getNum(f[0].high)+'℃ / '+getNum(f[0].low)+'℃</h2>'+
                '<h3>'+f[0].fengli+'</h3>';
            //------------------------------------------------
            var oFuture=document.getElementById("fu_ture");
            oFuture.innerHTML='';
            for(var i=1;i<f.length;i++){
                var oLi=document.createElement('li');
                oLi.innerHTML=
                    '<span><img src="images/'+iftype(f[i].type)+'"></span>'+
                    '<h3>'+f[i].type+' / '+f[i].fengli+'</h3>'+
                    '<h2>'+getNum(f[i].high)+'℃</h2>'+
                    '<h4>'+getNum(f[i].low)+'℃</h4>'+
                    '<time>'+f[i].date+'</time>';
                oFuture.appendChild(oLi);
            };

        };
    };
//------------------------------
    fn();
};