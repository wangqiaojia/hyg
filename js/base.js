function js_callpage(htmlurl) {
    var newwin = window.open(htmlurl, '', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=2,left=100,width=100,height=100');
    return false;
}

function js_callpage1(htmlurl) {
    var newwin = window.open(htmlurl, '', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=2,left=100,width=100,height=100');
    return false;
}

function showdtl(ti) {
    eval("arrobj=document.getElementById('arr" + ti + "')");
    eval("trobj=document.getElementById('tr" + ti + "')");
    power = arrobj.style.power;
    if (power == "on") {
        trobj.style.display = "";
        arrobj.style.power = "off";
        arrobj.innerHTML = "&lt;&lt;";
    }
    else {
        trobj.style.display = "none";
        arrobj.style.power = "on";
        arrobj.innerHTML = "&gt;&gt;";
    }
}

function IsEmail(str) {
    var myReg = /^[\._\-a-zA-Z0-9]+@([_a-zA-Z0-9]+\.)+[a-zA-Z0-9]/;
    if (!myReg.test(str))
        return false;
    else
        return true;
}

function checkstr(strint) {
    var checkOK = "0123456789.-";
    var checkStr = strint;
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }
    }
    return allValid;
}

function isInt(checkStr) {
    var checkOK = "0123456789";
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }
    }
}

function checkcard(strint) {
    var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.@";
    var checkStr = strint.toUpperCase();
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }
    }
    return allValid;
}

function slarea(area_oid, province_oid, city_oid, thisobj, areav, provincev, cityv) {
    var url = "/public/area_ifr.php?area_oid=" + area_oid + "&province_oid=" + province_oid + "&city_oid=" + city_oid;
    if (thisobj) {
        if (thisobj.id == area_oid) {
            eval("areaid=document.getElementById('" + area_oid + "').value");
            url = url + "&Sareaid=" + areaid;
        }
        if (thisobj.id == province_oid) {
            eval("areaid=document.getElementById('" + area_oid + "').value");
            eval("provinceid=document.getElementById('" + province_oid + "').value");
            url = url + "&Sareaid=" + areaid + "&Sprovinceid=" + provinceid;
        }
    }
    else {
        if (areav) {
            url = url + "&Sareaid=" + areav;
        }
        if (provincev) {
            url = url + "&Sprovinceid=" + provincev;
        }
        if (cityv) {
            url = url + "&Scityid=" + cityv;
        }
    }
    document.getElementById("ifr1").src = url;
}

function base_navigator() {
    //�ж���������汾
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var nav = new Array();
    var s;
    if (s = ua.match(/msie ([\d.]+)/)) {
        nav[0] = "ie";
        nav[1] = s[1];
    }
    if (s = ua.match(/firefox\/([\d.]+)/)) {
        nav[0] = "firefox";
        nav[1] = s[1];
    }
    if (s = ua.match(/chrome\/([\d.]+)/)) {
        nav[0] = "chrome";
        nav[1] = s[1];
    }
    if (s = ua.match(/opera.([\d.]+)/)) {
        nav[0] = "opera";
        nav[1] = s[1];
    }
    if (s = ua.match(/version\/([\d.]+).*safari/)) {
        nav[0] = "safari";
        nav[1] = s[1];
    }
    return nav;
}

function svemail() {
    var str = "<a href='mailto:thinkworld@thinkworld.com.cn' class='tm'>thinkworld@thinkworld.com.cn</a>";
    document.write(str);
}


function isChn(str) {
    var reg = /^[\u4E00-\u9FA5]+$/;
    if (!reg.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function isMobile(str) {
    //var regu =/^[1]([3][0-9]{1}|59|58|50|51|52|53|54|55|56|57|80|81|82|83|84|85|86|87|88|89)[0-9]{8}$/;
    //var regu =/^[1]([3][0-9]|[4][0-9]|[5][0-9]|[6][0-9]|[8][0-9])[0-9]{8}$/;
    var regu = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    var re = new RegExp(regu);
    if (!re.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function get_radiovalue(radioname) {
    /*
    ��� radio �ĵ��ֵ
    ��ѡ������ radioname
    */
    eval("rdsR=document.getElementsByName('" + radioname + "')");

    var v = '';
    for (i = 0; i < rdsR.length; i++) {
        if (rdsR[i].checked) {
            v = rdsR[i].value;
            break;
        }
    }
    return v;
}


function isInt(strint) {
    var checkOK = "0123456789";
    var checkStr = strint;
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }
    }
    return allValid;
}

function isBetween(val, lo, hi) {
    if ((val < lo) || (val > hi)) {
        return (false);
    }
    else {
        return (true);
    }
}

function isDate(theStr) {
    var the1st = theStr.indexOf('-');
    var the2nd = theStr.lastIndexOf('-');

    if (the1st < 0) {
        the1st = theStr.indexOf('��');
    }
    if (the2nd < 0) {
        the2nd = theStr.lastIndexOf('��');
    }

    if (the1st == the2nd) {
        return (false);
    }
    else {
        var y = theStr.substring(0, the1st);
        var m = theStr.substring(the1st + 1, the2nd);
        var d = theStr.substring(the2nd + 1, theStr.length);
        var maxDays = 31;

        if (isInt(m) == false || isInt(d) == false || isInt(y) == false) {
            return (false);
        }
        else if (y.length != 4) {
            return (false);
        }
        else if (!isBetween(m, 1, 12)) {
            return (false);
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) maxDays = 30;
        else if (m == 2) {
            if (y % 4 > 0) maxDays = 28;
            else if (y % 100 == 0 && y % 400 > 0) maxDays = 28;
            else maxDays = 29;
        }
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            maxDays = 31;
        }

        if (isBetween(d, 1, maxDays) == false) {
            return (false);
        }
        else {
            return (true);
        }
    }
}

function Mu_navigator() {
    //�ж���������汾
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var nav = new Array();
    var s;
    if (s = ua.match(/msie ([\d.]+)/)) {
        nav[0] = "ie";
        nav[1] = s[1];
        return nav;
    }
    if (s = ua.match(/firefox\/([\d.]+)/)) {
        nav[0] = "firefox";
        nav[1] = s[1];
        return nav;
    }
    if (s = ua.match(/chrome\/([\d.]+)/)) {
        nav[0] = "chrome";
        nav[1] = s[1];
        return nav;
    }
    if (s = ua.match(/opera.([\d.]+)/)) {
        nav[0] = "opera";
        nav[1] = s[1];
        return nav;
    }
    if (s = ua.match(/version\/([\d.]+).*safari/)) {
        nav[0] = "safari";
        nav[1] = s[1];
        return nav;
    }
    return nav;
}

function Mu_gleft(itemName) {
    //���������
    var item = itemName;
    var totalOffset = 0;
    do {
        try {
            totalOffset += item.offsetLeft;
            item = item.offsetParent;
        }
        catch (ee) {
        }
    }
    while (item != null);
    return totalOffset;
}

function Mu_gtop(itemName) {
    //��ú�����
    var item = itemName;
    var totalOffset = 0;
    do {
        try {
            totalOffset += item.offsetTop;
            item = item.offsetParent;
        }
        catch (ee) {
        }
    } while (item != null);
    return totalOffset;
}

function en_money(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}

function de_money(s) {
    return parseFloat(s.replace(/[^\d\.-]/g, ""));
}
