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

$(".start-game").on("click", function () {
    console.log("The game has begun");
});


$(".start-game").on("click", function () {
    $(".identity").show();
});

$(".start-game").on("click", function () {
    $(".controls").show();
});

$(".start-game").click(function () {
    $(".instructions").hide();
});
$(".start-game").click(function () {
    $(".input-text").hide();
});
$(".start-game").click(function () {
    $(".dino-egg").hide();
});
$(".start-game").click(function () {
    $(".start-game").hide();
});

