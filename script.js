function firstChar(text) {
  if (text.trim() === "") {
    return ""; // Return empty string if text is empty or contains only whitespace
  } else {
    return text.trim()[0]; // Return the first character after trimming whitespace
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
