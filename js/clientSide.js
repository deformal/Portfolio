
$(".heading").fadeOut(300).fadeIn(5000);
$(".heading1").fadeOut(300).fadeIn(5000);

$(document).ready(function () {
    $(".uparrow").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: -0 }, "slow");
        return false;
    });
});

$(document).ready(function () {
    $(".abo").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 1080 }, "slow");
        return false;
    }); 2
});

$(document).ready(function () {
    $(".ski").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 1900 }, "slow");
        return false;
    }); 2
});
$(document).ready(function () {
    $(".hobs").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 3300 }, "slow");
        return false;
    }); 2
});

$(document).ready(function () {
    $(".ga").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 5400 }, "slow");
        return false;
    });
});
$(document).ready(function () {
    $(".con").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 7080 }, "slow");
        return false;
    });
});




AOS.init();

