


$(document).ready(function() {

    var now = $(".now");
    function scrollByOne() {
        var prev = now.removeClass("now");
        now = now.next().addClass("now");
        now.prepend(prev.children().first());
        $("#scrollContainer").animate({ scrollTop: "+="+prev.outerHeight(true) }, 1500);
        if (now.length === 0) clearInterval(intervalId);
    }
    var intervalId = setInterval(scrollByOne, 5 * 1000);
});