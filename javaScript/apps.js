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
});


$(".start").on("click", function (event) {
    event.preventDefault();
    let inputValue = $(".baby-name").val()
    $(".name").text(inputValue)
    console.log(inputValue);
});
