$(document).scroll(function () { 
    if($(document).scrollTop() != 0){
        $(".navigation").addClass("nav-scrolled");
        $(".navigation").removeClass("nav-unscrolled");
    }
    else{
        $(".navigation").addClass("nav-unscrolled");
        $(".navigation").removeClass("nav-scrolled");
        
    }
});