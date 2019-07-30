//ajax����
var http_request = false;

function send_request(url) {
    //��ʼ����ָ������������������ĺ���
    http_request = false;
    //��ʼ��ʼ��XMLHttpRequest����
    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest(); //Mozilla �����
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml'); //����MiME���
        }
    }
    else if (window.ActiveXObject) {
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } //IE�����
        catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
            }
        }
    }
    if (!http_request) {
        window.alert("���ܴ���XMLHttpRequest����ʵ��."); //�쳣����������ʵ��ʧ��
        return false;
    }
    http_request.open("GET", url, true); // ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
    http_request.send(null);
}
