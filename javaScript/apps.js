console.log("It's alive");

// Sleep Button
$(".sleep").on("click", function () {
    sleep = sleep - 1;
    $(".tired").text(`Tired level: ${sleep}`);
    console.log("Dino is going to sleep", sleep);
});

// Hunger Button
$(".feed").on("click", function () {
    hunger = hunger - 1;
    $(".hunger").text(`Huger level: ${hunger}`);
    console.log("Dino is eating");
});

// Play Button
$(".play").on("click", function () {
    bored = bored - 1;
    $(".bored").text(`Bored level: ${bored}`);
    console.log("Dino is playing");
});

// Begin Game function
$(".start").on("click", function () {
    $(".identity").show();
    $(".controls").show();
    $(".instructions").hide();
    $(".input-text").hide();
    $(".dino-egg").hide();
    $(".start-game").hide();
    console.log("The game has begun");
    setTimer();
    tiredLevel();
    feedLevel();
    boredLevel();
});

// Naming the Dinogotchi
$(".start").on("click", function (event) {
    event.preventDefault();
    let inputValue = $(".baby-name").val()
    $(".name").text(`Name: ${inputValue}`)
    console.log(inputValue);
});

// Timers
const timers = {
    age: null,
    sleep: null,
    hunger: null,
    bored: null,
}

// Aging Function 
let age = 0;
const setTimer = function setTimer() {

    const updateAge = function updateAge() {
        age++;
        growDino();
        console.log("Happy Birthday", age);
        $(".age").text(`Age: ${age}`);
        if (age == 18) {
            console.log("Congratulations! You were an amazing parent")
            endGame();
        }
    };
    timers.age = setInterval(updateAge, 5000);
};

// How he grows after turning a certain age 
const growDino = function growDino() {
    if (age == 5) {
        $(".dino").attr("src", "https://i.imgur.com/1VnW8oq.gif");
    } if (age == 10) {
        $(".dino").attr("src", "https://i.imgur.com/FADHNpm.gif");
    }
};

// Sleeing Function
let sleep = 0;
const tiredLevel = function tiredLevel() {
    const updateTired = function updateTired() {
        sleep++;
        console.log("Sleep level", sleep);
        $(".tired").text(`Tired level: ${sleep}`);
        if (sleep <= 0 || sleep == 10) {
            console.log("Game over!")
            endGame();
        }
    };
    timers.sleep = setInterval(updateTired, 1500);
};

// Hungry Function
let hunger = 4;
const feedLevel = function feedLevel() {
    const updateHunger = function updateHunger() {
        hunger++;
        console.log("Huger level", hunger);
        $(".hunger").text(`Huger level: ${hunger}`);
        if (hunger <= 0 || hunger == 10) {
            console.log("Game over!")
            endGame();
        }
    };
    timers.hunger = setInterval(updateHunger, 1000);
};

// Bored Button
let bored = 0;
const boredLevel = function boredLevel() {
    const updatePlay = function updatePlay() {
        bored++;
        console.log("Play level", bored);
        $(".bored").text(`Bored level: ${bored}`);
        if (bored <= 0 || bored == 10) {
            console.log("Game over!")
            endGame();
        }
    };
    timers.bored = setInterval(updatePlay, 1500);
};

// Function to end the game 
const endGame = function endGame() {
    if (age == 18) {
        clearInterval(timers.age);
        clearInterval(timers.hunger);
        clearInterval(timers.bored);
        clearInterval(timers.sleep);
        $(".dino").hide();
        $(".youWin").show();
    } else {
        clearInterval(timers.age);
        clearInterval(timers.hunger);
        clearInterval(timers.bored);
        clearInterval(timers.sleep);
        $(".dino").hide();
        $(".gameOver").show();
    }
};
