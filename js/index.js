$(document).ready(function () {
    // Click reference
    var before = $(".chevrons-left i");
    var after = $(".chevrons-right i");
    // Image reference
    var activeImage = $(".image:first-child");
    activeImage.toggle();
    // Div reference
    var imgCollection = $(".image");
    var controlsDiv = $(".controls");

    // Initialize selector
    initSelector();
    // Reference for selector active
    var activeSelect = $(".controls__click:first-child");
    activeSelect.addClass("controls__click--selected");
    // All the selectors
    var controlsClick = $(".controls__click");

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

    // FUNCTIONS
    /**
     * Populate the selector div based on how many images exist
     */
    function initSelector() {
        for (var i = 1; i <= imgCollection.length; i++) {
            controlsDiv.append(`<i class='controls__click' pic='${i}'></i>`);
        }
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

    // end Doc ready
});
