const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if(age >= 18 && age <= 50) {
    console.log("you can drink");
} else {
    console.log("you can't drink");
} 