$(document).ready(function() {	$(window).on("scroll", function() { 
    var scroll_pos = $(window).scrollTop();
    var element_pos = $(".image-fade").offset().top;
    if (scroll_pos >= element_pos) {
        $(".image-fade").addClass("active");
    }
});
});