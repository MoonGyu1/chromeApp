function plus(a, b) {
    console.log(a + b);
}

function divide(a, b){
    console.log(a/b);
}

divide(98, 20);
plus(8, 60);

const player = {
    name: "gyuwon",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("lynn");
player.sayHello("nico");