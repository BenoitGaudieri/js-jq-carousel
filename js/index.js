$(document).ready(function () {
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    var activeImage = $(".active");
    var nextImage = $(".active").next();
    var prevImage = $(".active").prev();

    before.click(function () {
        activeImage.removeClass("active");
        prevImage.addClass("active");
        activeImage = $(".active");
        nextImage = $(".active").next();
        prevImage = $(".active").prev();
    });

    after.click(function () {
        activeImage.removeClass("active");
        nextImage.addClass("active");
        activeImage = $(".active");
        nextImage = $(".active").next();
        prevImage = $(".active").prev();
    });

    // end Doc ready
});
