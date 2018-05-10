var element = document.createElement('p');
var text = document.createTextNode("I'm a developmet");
var parent = document.getElementsByTagName('body')[0]
parent.appendChild(element);
element.appendChild(text);
//element.innerHTML=text.textContent;

