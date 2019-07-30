function gosh() {
    document.formsh.submit();
}

function Mu_onload() {
    //body onload
    //��������ͼƬ
    Mu_preload('/images_2015/hd_sbitbj_hover.jpg');
}

function Mu_preload() {
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = Mu_preload.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function Mu_addLoadEvent(func) {
    //���ض��windw.onload
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function HD_dh(c) {
    for (b = 1; b <= 2; b++) {
        if (b != c) {
            document.getElementById("HDtag" + b).style.background = "url(../images_2015/new_daabj_hover.jpg) no-repeat";
            document.getElementById("HDtag" + b).style.color = "#fff";
            document.getElementById("HDbar" + b).style.display = "none";
        }
    }
    document.getElementById("HDbar" + c).style.display = "block";
    document.getElementById("HDtag" + c).style.background = "url(../images_2015/new_daabj.jpg) no-repeat";
    document.getElementById("HDtag" + c).style.color = "#ea2222";
}


function HD_addfav() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("����������������ƣ��밴 Ctrl+D �ֶ��ղأ�");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
        try {
            window.external.addFavorite(url, title);
        }
        catch (e) {
            alert('�����������֧��,�밴 Ctrl+D �ֶ��ղ�!');
        }
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    else {
        alert('�����������֧��,�밴 Ctrl+D �ֶ��ղ�!');
    }
}

function ref_HDitem() {
    //����ͷ�ļ��Ĺ��ﳵ����
    var url = "/js/get_buyitem.php?r=" + Math.random()
    send_request(url); //����˴������,��������
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4 && http_request.status == 200) {
            //��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
            var jtxt = http_request.responseText;
            var HD_item = document.getElementById("HD_item");
            HD_item.innerHTML = jtxt;
        }
        else //ҳ�治����
        {
            //alert("���������ҳ�����쳣��");
        }
    }
}
