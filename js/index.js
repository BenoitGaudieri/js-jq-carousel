$(document).ready(function () {
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    var activeImage = $("img.active");
    var nextImage = $(".active").next("img");
    var prevImage = $(".active").prev("img");

    function updateVar() {
        nextImage = $(".active").next("img");
        prevImage = $(".active").prev("img");
    }

    function back() {
        if (activeImage.is(":first-child")) {
            prevImage = $(".image:last-child");
        }
        activeImage.removeClass("active");
        prevImage.addClass("active");
        activeImage = $(".active");
        updateVar();
    }

    function next() {
        if (activeImage.is(":last-child")) {
            nextImage = $(".image:first-child");
        }
        activeImage.removeClass("active");
        nextImage.addClass("active");
        activeImage = $(".active");
        updateVar();
    }

    before.click(function () {
        back();
    });

    after.click(function () {
        next();
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            back();
        } else if (e.keyCode == 39) {
            next();
        }
    });

    // end Doc ready
});
