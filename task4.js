let myRadius = window.prompt(
  "What is the circle's radius value?",
  "Enter radius here"
);

function calculateArea() {
  return myRadius * myRadius * Math.PI;
}
function MyArea() {
  var area = calculateArea(myRadius);
  alert("the total area is " + area);
}
MyArea();

let sqrroot = window.prompt("Enter a number to find square root");
result = Math.sqrt(sqrroot);
alert("square root is : " + result);

let cosInput = window.prompt("Enter an angle to calc the cos");
function cosine() {
  // radians = degrees * PI / 180
  x = Math.cos((cosInput * Math.PI) / 180);
  alert(x.toFixed(2));
}

cosine();
let cos = document.getElementById("cosine");
cos.innerHTML = "Cos" + cosInput + " is = " + x.toFixed(2);
