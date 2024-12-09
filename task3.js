arr = [];
for (i = 0; i < 5; i++) {
  let userInput = window.prompt("Please enter 5 digits");
  arr.push(userInput);
}
console.log(arr);
let msg1 = document.getElementById("arr");
msg1.innerHTML += arr;

asc = arr.sort();
console.log(asc);

let msg2 = document.getElementById("asc");
msg2.innerHTML += asc;

desc = asc.reverse();
console.log(desc);

let msg3 = document.getElementById("desc");
msg3.innerHTML += desc;
