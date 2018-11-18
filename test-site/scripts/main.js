var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/time.jpg') {
      myImage.setAttribute('src', 'images/time3.jpg');
    } else {
      myImage.setAttribute('src', 'images/time3.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are my beloved, ' + myName;
}
/*
����������һ�� prompt() ������ ������ alert() һ������һ���Ի���ֻ���� prompt() ��Ҫ�û���������,���������û����ȷ�������ݴ洢�ڱ�������������Ҫ���û��������������������ǵ���һ���� localStorage �� API �����������ǽ����ݴ洢����������Թ�������ȡ������ʹ�� localStorage �� setItem() �����������������ݴ洢����Ϊ 'name' �Ĳ����Ȼ������ֵ����Ϊ�����û������������ myName ������ ������ǽ������ textContent �������óɼ����û��������ַ�����
*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are my beloved, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}