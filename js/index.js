$(document).ready(function () {
    // Click reference
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    // Image reference
    var activeImage = $("img.active");
    var nextImage = $(".active").next("img");
    var prevImage = $(".active").prev("img");
    // Div reference
    var imgCollection = $(".image");
    var controlsDiv = $(".controls");

    // Initialize selector
    initSelector();
    // Reference for selector active
    var prevSelected = $(".controls__click:first-child");
    prevSelected.addClass("controls__click--selected");
    // All the selectors
    var controlsClick = $(".controls__click");

    /**
     * Populate the selector div based on how many images exist
     */
    function initSelector() {
        for (var i = 1; i <= imgCollection.length; i++) {
            controlsDiv.append(
                "<i class='fas fa-circle controls__click' pic='" + i + "'></i>"
            );
        }
    }

    /**
     * Switch the active image and selector using nth-child logic
     */
    function selectorClick() {
        // Reference for the image switch
        var clicked = $(this).attr("pic");
        // Change which selector is lit
        prevSelected.toggleClass("controls__click--selected");
        $(this).addClass("controls__click--selected");
        prevSelected = $(this);
        // Image switch
        activeImage.removeClass("active");
        $(".image:nth-child(" + clicked + ")").addClass("active");
        updateVar();
    }

    /**
     * Update reference for image switch
     */
    function updateVar() {
        activeImage = $(".active");
        nextImage = $(".active").next("img");
        prevImage = $(".active").prev("img");
    }

    /**
     * Previous image logic wrapping using :first-child
     */
    function back() {
        if (activeImage.is(":first-child")) {
            prevImage = $(".image:last-child");
        }
        activeImage.removeClass("active");
        prevImage.addClass("active");
        updateVar();
    }

    /**
     * Next image logic wrapping using :last-child
     */
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

    // Selector
    controlsClick.click(selectorClick);

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            back();
        } else if (e.keyCode == 39) {
            next();
        }
    });

    // end Doc ready
});
