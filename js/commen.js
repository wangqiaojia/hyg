// 常量
 //var baseUrl = "http://10.150.27.154:8080/gateway-lease";//跨域的地址
 // var baseUrl = "http://172.30.13.47:8080";//跨域的地址
// 验证手机号码或者验证码是否正确
function validate(id , errId  , flag){
	var tel = $(id).val().trim();
	if(flag == "name"){
		//检验手用户名正则表达式
		var reg = /[\w-#@.]+$/
	}else if(flag == 'pwd'){
		//登录密码正则表达式 要求8位以上字母及数字组合。
		var reg = /(?=.*\d)(?=.*[A-z])^[0-9A-z]{8,}$/;
	}
	var html = ''
	var isValidate = false;
	if(tel==''){
		if(flag == "name"){
			html = "用户名不能为空"
		}else if(flag == 'pwd'){
			html = '密码不能为空'
		}

	}else if(tel!='' && !reg.test(tel)){
        if(flag == "name"){
			html = '用户名仅支持英文字符，数字，下划线，"-"，"#"，"@"和"."'
		}else if(flag == 'pwd'){
			html = '密码格式错误，请输入8位以上字母及数字组合'
		}

	}else{
		isValidate = true;
	}
	try {
		$(errId).text(html);
	}catch(e){
		console.log("用于认证页面")
	}

	return isValidate;

}

function getCookie(){

	if(!sessionStorage.getItem("isLogin")){
         window.location.href = "/gateway-lease/login"
    }
}

 // header 用户信息
function getUserName(){
	$("#login").html('<a href="/gateway-lease/login"><span>登陆</span></a>')
	var userName = "";
	if(sessionStorage.getItem("isLogin")){
        userName  = localStorage.getItem("username") || localStorage.getItem("loginPhone")
    }
    // var userName = getUserName();
	var userNameHtml = ""
	if(userName.trim() === ""){
		$("#login").html('<a href="/gateway-lease/login"><span>登陆</span></a>')
	}else{
		$("#login").html('你好，<span>' + userName + '</span><a href="javascript:" onclick="logout()">退出</a>' )
	}
    return userName;
}

// 退出
function logout(){
	$.ajax({
		url : getUrl() + "logout",
		data : {loginPhone : localStorage.getItem("loginPhone")},
		success :function(data){
			if(data.code === 200){
				sessionStorage.removeItem("isLogin");
				localStorage.clear();
				window.location.href = "/gateway-lease/login"
			}
		},
        error : function(){
            layer.msg("网络错误，请稍后")
        }
	})


}

//公共接口封装
function getUrl(){
    //var oUrl = '/financeLease-core/';
    var oUrl = 'http://10.150.27.154:8080/gateway-lease/';
    //var oUrl = 'http://172.30.13.47:8080/gateway-lease/';
    return oUrl;
}
// function getUrl2(){
//     //var oUrl = '/financeLease-core/';
//     var oUrl = 'http://10.150.26.83:8088/traffic-service/';
//     //var oUrl = 'http://10.100.19.25:8088/traffic-service/';
//     return oUrl;
// }

//获取地址栏参数方法
function getUrlParam(name,objStr) {
    var urlStr = window.location.search;
    if(objStr){
        urlStr = objStr;
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = urlStr.substr(1).match(reg);  //匹配目标参数-
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function resetHeight(){
	getUserName();
    var height = document.body.clientHeight - 116 -240;
    $(".main").css("min-height",height)
    $("[class*='Wrap']:not([class*='logo'])").css("min-height",height)
}

function yazhengReg(){
    $(".left_nav li").click(function(){
        alert("点击事件")

    })
}

function checkPhoneIsRegister(id , errId  , flag){
	var errHTML = ""
	var isRegister = false;
	var phone=$(id).val().trim();
	$.ajax({
	    url:getUrl() + "user/findUserByPhone?loginPhone="+phone,
	    success:function(data){
	        console.log(data.status);
	        if(data.status=='400' && flag === "register"){//已注册 register
	            errHTML = "该手机号已注册，请立即登录"
	            isRegister = true
	        }else if(data.status=='200' && flag === "login"){// 未注册
	        	errHTML = "该手机号未注册，请注册后登陆！"
	        }
	        $(errId).text(errHTML)
	        return isRegister;

	    },
        error : function(){
            layer.msg("网络错误，请稍后")
        }
	});
}
