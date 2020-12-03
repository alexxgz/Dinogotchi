console.log("It's alive");

$(".sleep").on("click", function () {
    console.log("Dino is going to sleep");
});

$(".feed").on("click", function () {
    console.log("Dino is eating");
});

$(".play").on("click", function () {
    console.log("Dino is playing");
});

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


$(".start").on("click", function (event) {
    event.preventDefault();
    let inputValue = $(".baby-name").val()
    $(".name").text(`Name: ${inputValue}`)
    console.log(inputValue);
});


let age = 1;
const setTimer = function setTimer() {

    const updateAge = function updateAge() {
        console.log("Happy Birthday", age);
        $(".age").text(`Age: ${age}`);
        age++;
        if (age == 19) {
            clearInterval(birthday)
            console.log("Congratulations! You were in amazing parent")
        }
    };
    const birthday = setInterval(updateAge, 60000);
};


let sleep = 1;
const tiredLevel = function tiredLevel() {

    const updateTired = function updateTired() {
        console.log("Sleep level", sleep);
        $(".tired").text(`Tired Level: ${sleep}`);
        sleep++;
        if (sleep == 11) {
            clearInterval(tired)
            console.log("Game over!")
        }
    };
    const tired = setInterval(updateTired, 15000);
};


let hunger = 4;
const feedLevel = function feedLevel() {

    const updateHunger = function updateHunger() {
        console.log("Huger level", hunger);
        $(".hunger").text(`Huger level: ${hunger}`);
        hunger++;
        if (hunger == 11) {
            clearInterval(feedMe)
            console.log("Game over!")
        }
    };
    const feedMe = setInterval(updateHunger, 15000);
};


let bored = 1;
const boredLevel = function boredLevel() {

    const updatePlay = function updatePlay() {
        console.log("Play level", bored);
        $(".bored").text(`Bored level: ${bored}`);
        bored++;
        if (bored == 11) {
            clearInterval(play)
            console.log("Game over!")
        }
    };
    const play = setInterval(updatePlay, 15000);
};

