// window.location.href='login.html
function check(){
    var re = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if(document.form1.name.value==""){
        window.alert("姓名不能为空");
    }
    else if(document.form1.phone.value.length<8 || document.form1.phone.value.length>11){
        window.alert("电话长度必须介于8-11个字符之间！");
    }
    else if(!re.test(document.form1.email.value)){
        window.alert("邮箱格式错误");
    }
    else if(document.form1.address.value==""){
        window.alert("住址不能为空");
    }
    else if(document.form1.qq.value==""){
        window.alert("QQ号不能为空");
    }
    else{
        window.location.href="addressList.html";
    }
}