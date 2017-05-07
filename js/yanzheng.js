window.onload=function(){
// 使用者
function isuseName(){
    var obj=document.getElementById("useName");
    if(/^\W{2,}$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
   obj.className="red_color";
       return false;
    }
}
// 手机号码
 function ints(){
    var obj=document.getElementById("int");
    if(/^\s*[0-9]{8,11}\s*$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
   obj.className="red_color";
       return false;
    }
}
// 邮箱
function isEmail(){
    var obj=document.getElementById("useEmail");
    // var filter=/^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
    if(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
       obj.className="red_color";
       return false;
    }
}
// QQ号码
function isQQ(){
    var obj=document.getElementById("useQQ");
    if(/^\s*[0-9]{5,11}\s*$/.test(obj.value)){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 日期
function isDate(){
    var obj=document.getElementById("intdate");
    if(!obj.value==""){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 风格
function isstyle(){
    var obj=document.getElementById("styles");
    if(!obj.value==""){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 多行文本
function moreTst(){
    var obj=document.getElementById("moreText");
    if(!obj.value==""){
       return true;
    }else{
       return false;
    }
}
// 整体验证
function allinput(){
    return isuseName()　&&  isEmail() && isTel() && isQQ() && isDate() && isstyle() && moreTst();
}
}