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
函数包含了一个 prompt() 函数， 它会像 alert() 一样弹出一个对话框。只不过 prompt() 需要用户输入数据,，而且在用户点击确定后将数据存储在变量里。在这里，我们要求用户输入姓名。接下来我们调用一个叫 localStorage 的 API ，它允许我们将数据存储在浏览器里以供后续获取。我们使用 localStorage 的 setItem() 函数来创建并将数据存储在名为 'name' 的参数里，然后将它的值设置为包含用户输入的姓名的 myName 变量。 最后，我们将标题的 textContent 属性设置成加上用户姓名的字符串。
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