/**
 * Created by mshuang on 2017/6/7.
 */
var ul = document.getElementById("queue");

function left_in() {
    var input = document.getElementById("inputNum");
    var input_num = input.value;
    if ((!isNaN(input_num)) && input_num>=10 && input_num<= 100) {
        var li = document.createElement("li");
        li.innerHTML=input_num;
        ul.insertBefore(li,ul.firstElementChild);
    }else{
        alert("������һ��10-100֮���������");
    }
}

function right_in(){
    var input = document.getElementById("inputNum");
    var input_num = input.value;
    if ((!isNaN(input_num)) && input_num>=10 && input_num<= 100) {
        var li = document.createElement("li");
        li.innerHTML=input_num;
        ul.appendChild(li);
    }else{
        alert("������һ��10-100֮���������");
    }
}

function left_out(){
    if(ul.firstElementChild){
        ul.removeChild(ul.firstChild);
    }else{
        alert("û��Ԫ�ؿ���ɾ��");
    }
}

function right_out(){
    if(ul.lastElementChild){
        ul.removeChild(ul.lastChild);
    }else{
        alert("û��Ԫ�ؿ���ɾ��");
    }
}

//ð�������㷨
function resort(){
    var queue = document.getElementsByTagName("li");
    var ul = document.getElementById("queue");
    var arr = [].slice.call(queue);
    if(arr.length != 0) {
        arr.sort(function (arr1, arr2) {
            var value1 = arr1.innerText;
            var value2 = arr2.innerText;
            return value1 - value2;
        });
        for(var i=0; i<arr.length; i++){
            ul.appendChild(arr[i]);
        }
    }else{
        alert("û��Ԫ����Ҫ����");
    }
}
