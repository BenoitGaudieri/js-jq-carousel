$(document).ready(function () {
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    var activeImage = $("img.active");
    var nextImage = $(".active").next("img");
    var prevImage = $(".active").prev("img");
    var imgCollection = $(".image");
    var controlsDiv = $(".controls");

    for (var i = 1; i <= imgCollection.length; i++) {
        controlsDiv.append(
            "<i class='fas fa-circle controls__click' pic='" + i + "'></i>"
        );
    }

    var controlsClick = $(".controls__click");
    console.log(controlsClick.length);

    controlsClick.click(function () {
        var clicked = $(this).attr("pic");
        console.log(clicked);
        activeImage.removeClass("active");
        $(".image:nth-child(" + clicked + ")").addClass("active");
        updateVar();
    });

    function updateVar() {
        activeImage = $(".active");
        nextImage = $(".active").next("img");
        prevImage = $(".active").prev("img");
    }

    function back() {
        if (activeImage.is(":first-child")) {
            prevImage = $(".image:last-child");
        }
        activeImage.removeClass("active");
        prevImage.addClass("active");
        updateVar();
    }

    function next() {
        if (activeImage.is(":last-child")) {
            nextImage = $(".image:first-child");
        }
        activeImage.removeClass("active");
        nextImage.addClass("active");
        updateVar();
    }

    // back and forward
    before.click(back);
    after.click(next);

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            back();
        } else if (e.keyCode == 39) {
            next();
        }
    });

    // end Doc ready
});
