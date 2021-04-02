$(document).ready(function(){
    
    var elem;
    elem = ".test";
    
    var elemHeight = parseInt($(elem).height());
    var elemTop = parseInt($(".test").offset().top);
    $(document).scroll(function(){
        var docScrollTop = $(document).scrollTop();
        if(docScrollTop > elemTop - elemHeight && docScrollTop < elemTop + elemHeight) {
            $(".background").css("background-color", "green");
        }
        else {
            $(".background").css("background-color", "pink");
        }
    })
});