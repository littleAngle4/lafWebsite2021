let text = "Mr Blue has a blue house and a blue car.";
let variable = "blue";
text = text.replace(new RegExp(variable, "gi"), "red");
console.log(text);
