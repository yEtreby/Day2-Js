function find_longest_word(useInput) {
  let array1 = userInput.match(/\w[a-z]{0,}/gi);

  let result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }

  return result;
}

let userInput = window.prompt("Please enter a sentence");
console.log(find_longest_word());
