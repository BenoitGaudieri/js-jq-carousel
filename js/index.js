// Project:
// Scrollable carousel with thumbnails preview selector and dot selector
// Made by Benoit Gaudieri
// 12/04/2020

$(document).ready(function () {
    // Click reference
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    // Image reference
    var activeImage;
    // Div reference
    var imgCollection;
    var controlsDiv;
    // Reference for selector active
    var activeSelect;

    // Initialize image
    initImage();
    // Initialize selector
    initSelector();

    // All the selectors
    var controlsClick;

    // back and forward
    before.click(back);
    after.click(next);

    // Selector
    controlsClick.click(selectorClick);

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            back();
        } else if (e.keyCode == 39) {
            next();
        } else if (e.keyCode == 13) {
            textCode();
        }
    });

    // Autoscroll
    // setInterval(5000, next)

    // FUNCTIONS

    /**
     * Initialize first image as active
     */
    function initImage() {
        imgCollection = $(".image");
        activeImage = $(".image:first-child");
        activeImage.toggle();
    }

    /**
     * Populate the selector div based on how many images exist
     */
    function initSelector() {
        controlsDiv = $(".controls");
        for (var i = 0; i < imgCollection.length; i++) {
            // controlsDiv.append(`<i class='controls__click' pic='${i}'></i>`);
            var thumb = imgCollection.eq(i);
            thumb = thumb.clone();
            thumb.removeClass("image");
            thumb.addClass("controls__click thumb");
            thumb.attr("pic", i + 1);
            controlsDiv.append(thumb);
        }
        activeSelect = $(".controls__click:first-child");
        activeSelect.addClass("controls__click--selected");
        controlsClick = $(".controls__click");
    }

    function initSelectorCircle() {
        controlsDiv = $(".controls");
        controlsDiv.addClass("controls--circle");
        for (var i = 1; i <= imgCollection.length; i++) {
            controlsDiv.append(
                `<i class='controls__click controls__click--circle' pic='${i}'></i>`
            );
        }
        activeSelect = $(".controls__click--circle:first-child");
        activeSelect.addClass("controls__click--selected");
        controlsClick = $(".controls__click--circle");
    }

    /**
     * Switch the active image and selector using nth-child logic
     */
    function selectorClick() {
        // Reference for the image switch
        var clicked = $(this).attr("pic");
        // Change which selector is lit
        activeSelect.toggleClass("controls__click--selected");
        $(this).addClass("controls__click--selected");

        activeSelect = $(this);
        // Image switch
        activeImage.toggle("fast");
        activeImage = $(".image:nth-child(" + clicked + ")");
        activeImage.fadeToggle();
    }

    /**
     * Previous image logic wrapping using :first-child
     */
    function back() {
        activeImage.toggle("fast");
        if (activeImage.is(":first-child")) {
            activeImage = $(".image:last-child");
        } else {
            activeImage = activeImage.prev("img");
        }
        activeImage.fadeToggle();
        // Move the selector
        activeSelect.toggleClass("controls__click--selected");
        if (activeSelect.is(":first-child")) {
            activeSelect = $(".controls__click:last-child");
        } else {
            activeSelect = activeSelect.prev(".controls__click");
        }
        activeSelect.toggleClass("controls__click--selected");
        // Stop autoscroll
        setInterval(autoscroll, 5000);
    }

    /**
     * Next image logic wrapping using :last-child
     */
    function next() {
        activeImage.toggle("fast");
        if (activeImage.is(":last-child")) {
            activeImage = $(".image:first-child");
        } else {
            activeImage = activeImage.next("img");
        }
        activeImage.fadeToggle();
        // Move the selector
        activeSelect.toggleClass("controls__click--selected");
        if (activeSelect.is(":last-child")) {
            activeSelect = $(".controls__click:first-child");
        } else {
            activeSelect = activeSelect.next(".controls__click");
        }
        activeSelect.toggleClass("controls__click--selected");
    }

    var music = $("audio");

    var space = $(".space");

    function spaceInit() {
        if ($(".space span").html() == "Live long and prosper 🖖") {
            music[0].pause();
        } else {
            controlsDiv.empty();
            $(".img-collection").html(
                "<img class='image animated fadeOut delay-2s resize--vh' src='img/spock-dj.jpg' alt='' />" +
                    "<img class='image resize' src='img/boldlygo.jpg' alt='' />" +
                    "<img class='image resize' src='img/star-trek.jpg' alt='' />" +
                    "<img class='image resize' src='img/cast.jpg' alt='' />" +
                    "<img class='image resize' src='img/concert.jpg' alt='' />" +
                    "<img class='image resize' src='img/peace.jpg' alt='' />"
            );
            initImage();
            initSelectorCircle();
            $("body").css("background-image", "url(img/space.jpg)");
            music[0].play();
            space.addClass("animated flash");
            $(".space span").html("Live long and prosper 🖖");
            console.log($(".space span").html() == "Live long and prosper 🖖");

            // Bugfix:
            controlsClick.click(selectorClick);
        }
    }

    space.click(function () {
        spaceInit();
    });

    var balloon = $(".balloon");
    balloon.toggle();
    var insertText;

    function textCode() {
        balloon.toggle();
        $(".insert-text").focus();
        insertText = $(".insert-text").val();
        console.log(insertText);
        if (insertText == "space") {
            spaceInit();
        }

        // if ($(".inner-text").html().is("space")) {
        //     spaceInit();
        // }
    }

    // end Doc ready
});
