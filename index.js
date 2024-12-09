function getUserInfo() {
  namee = prompt("Enter your name:");
  age = prompt("Enter your age:");
  email = prompt("Enter your email address:");
  phone = prompt("Enter your phone number:");

  if (!namee || !/^[a-zA-Z\s]+$/.test(namee)) {
    console.log("Name should only conatin string and cannot be empty");
    return;
  }

  if (!/^\d+$/.test(age)) {
    console.log("Age must be a positive number.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("Please enter a valid email address.");
    return;
  }
  if (!/^\+?[0-9\s\-()]+$/.test(phone) || phone.length < 10) {
    console.log(
      "Please enter a valid phone number (minimum 10 digits, may include +, -, (), and spaces)."
    );
    return;
  }
  console.log(`Welcome, ${namee}!`);
  console.log(
    `Your age is ${age}, and your email address is ${email}, and your phone number is ${phone}.`
  );
}

getUserInfo();

let name1 = document.getElementById("name");
name1.innerHTML += " " + namee;

let age2 = document.getElementById("age");
age2.innerHTML += " " + age;

let mail = document.getElementById("email");
mail.innerHTML += " " + email;

let phone1 = document.getElementById("phone");
phone1.innerHTML += " " + phone;

function changeFontColor() {
  const color = prompt("Choose a color for the font (like: red, blue, green):");

  if (!color) {
    console.log("No color entered. The font color will not change.");
    return;
  }

  document.body.style.color = color;
}

changeFontColor();
