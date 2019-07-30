// ����
 //var baseUrl = "http://10.150.27.154:8080/gateway-lease";//����ĵ�ַ
 // var baseUrl = "http://172.30.13.47:8080";//����ĵ�ַ
// ��֤�ֻ����������֤���Ƿ���ȷ
function validate(id , errId  , flag){
	var tel = $(id).val().trim();
	if(flag == "name"){
		//�������û���������ʽ
		var reg = /[\w-#@.]+$/
	}else if(flag == 'pwd'){
		//��¼����������ʽ Ҫ��8λ������ĸ��������ϡ�
		var reg = /(?=.*\d)(?=.*[A-z])^[0-9A-z]{8,}$/;
	}
	var html = ''
	var isValidate = false;
	if(tel==''){
		if(flag == "name"){
			html = "�û�������Ϊ��"
		}else if(flag == 'pwd'){
			html = '���벻��Ϊ��'
		}

	}else if(tel!='' && !reg.test(tel)){
        if(flag == "name"){
			html = '�û�����֧��Ӣ���ַ������֣��»��ߣ�"-"��"#"��"@"��"."'
		}else if(flag == 'pwd'){
			html = '�����ʽ����������8λ������ĸ���������'
		}

	}else{
		isValidate = true;
	}
	try {
		$(errId).text(html);
	}catch(e){
		console.log("������֤ҳ��")
	}

	return isValidate;

}

function getCookie(){

	if(!sessionStorage.getItem("isLogin")){
         window.location.href = "/gateway-lease/login"
    }
}

 // header �û���Ϣ
function getUserName(){
	$("#login").html('<a href="/gateway-lease/login"><span>��½</span></a>')
	var userName = "";
	if(sessionStorage.getItem("isLogin")){
        userName  = localStorage.getItem("username") || localStorage.getItem("loginPhone")
    }
    // var userName = getUserName();
	var userNameHtml = ""
	if(userName.trim() === ""){
		$("#login").html('<a href="/gateway-lease/login"><span>��½</span></a>')
	}else{
		$("#login").html('��ã�<span>' + userName + '</span><a href="javascript:" onclick="logout()">�˳�</a>' )
	}
    return userName;
}

// �˳�
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
            layer.msg("����������Ժ�")
        }
	})


}

//�����ӿڷ�װ
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

//��ȡ��ַ����������
function getUrlParam(name,objStr) {
    var urlStr = window.location.search;
    if(objStr){
        urlStr = objStr;
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
    var r = urlStr.substr(1).match(reg);  //ƥ��Ŀ�����-
    if (r != null) return unescape(r[2]); return null; //���ز���ֵ
}

function resetHeight(){
	getUserName();
    var height = document.body.clientHeight - 116 -240;
    $(".main").css("min-height",height)
    $("[class*='Wrap']:not([class*='logo'])").css("min-height",height)
}

function yazhengReg(){
    $(".left_nav li").click(function(){
        alert("����¼�")

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
	        if(data.status=='400' && flag === "register"){//��ע�� register
	            errHTML = "���ֻ�����ע�ᣬ��������¼"
	            isRegister = true
	        }else if(data.status=='200' && flag === "login"){// δע��
	        	errHTML = "���ֻ���δע�ᣬ��ע����½��"
	        }
	        $(errId).text(errHTML)
	        return isRegister;

	    },
        error : function(){
            layer.msg("����������Ժ�")
        }
	});
}
