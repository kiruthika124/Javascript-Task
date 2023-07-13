var list = document.getElementByIdTagName ('li');
for (var i= 0;i<list.length;i++){
    var span = document.createElement("span");
    span.className="close"
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
}
var close = document.getElementByIdclassName("close");
for (i=0;i<close.length;i++){
    close[i].onclick=function(){
        var d = this.parentElement;
        d.style.display="none";
    }
}
function mylist(){
    var li = document.createElement("li");
    var mytext = document.getElementById("mytext").value;
    var t = document.createTextNode(mytxt)
    li.appendChild(t);
    if(mytxt ==""){
        alert("Input Field is Empty");

    }
    else{
        document.getElementById("myUl").appendChild(li);
    }
    var list = document.getElementByIdTagName ('li');
for (var i= 0;i<list.length;i++){
    var span = document.createElement("span");
    span.className="close"
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
}

var close = document.getElementByIdclassName("close");
for (i=0;i<close.length;i++){
    close[i].onclick=function(){
        var d = this.parentElement;
        d.style.display="none";
    }
}


}