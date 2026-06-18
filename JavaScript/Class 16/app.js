console.log("JavaScript Connected!");


var container = document.getElementById("container");

// container.setAttribute("class" , "box")

// console.log(container.hasAttribute("class"));
// console.log(container.hasAttribute("id"));
// console.log(container.getAttribute("id"));
// console.log(container.getAttribute("class"));

// console.log(container.attributes[1]);


var para = document.createElement("p");
var text = document.createTextNode("This is a text node created using javascript!");

para.appendChild(text);

container.appendChild(para);

var heading = container.children[0];

container.removeChild(heading)

console.log(heading);



