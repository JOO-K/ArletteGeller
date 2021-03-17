$("document").ready(function(){

    // Text Toggle for Long List Items in Main-Menu
    function toggleText(elem, init, second) {
        $(elem).mouseover(function(){
            $(elem).text(second);
        })
        $(elem).mouseout(function(){
            $(elem).text(init);
        })
    }

    toggleText("#bc-screening > a", "At-Home B.C. Screening", "At-Home Breast Cancer Screening Device");
    toggleText("#assist-tech > a", "A-T High Spinal Injuries", "Assistive Technology for High Spinal Cord Injuries");
    toggleText("#non-invasive > a", "Non-Invas. V.N. Stimulation", "Non-Invasive Vagus Nerve Stimulation Device");

    // Slider Main Page
    
    let i = 0;
    let curr = i;
    let next = i + 1;
    let aftr = i + 2;

    let slideNum = 6;

    $('*[data-slide-id = ' + curr + ' ]').css({"left": "0%"});
    $('*[data-slide-id =  ' + next + ' ]').css({"left": "50%"});
    $('*[data-slide-id =  ' + aftr + ' ]').css({"left": "100%"});
    $('*[data-slide-id =  5 ]').css({"left": "100%"});

    var winAspect = $(window).width() / $(window).height();
    var imgAspect = 1.78703703704;

    if(winAspect > imgAspect){
        $(".slide-container > img").addClass("wide");
    } else {
        $(".slide-container > img").addClass("tall");
    }

    $(window).resize( function(){
        var winAspect = $(window).width() / $(window).height();
        if(winAspect > imgAspect){
            console.log("wide");
            $(".slide-container > img").removeClass("tall").addClass("wide");
        } else {
            console.log("tall");
            $(".slide-container > img").removeClass("wide").addClass("tall");
        }
    });

    setInterval(slide, 3500);

    function slide() {
         
        let curr = i;
        let next = i + 1;
        let aftr = i + 2;

        console.log(curr);
        
        if (i < slideNum) {
            $('.rotary').css("left", "0");
            $('.rotary img').css("left", "100%");
            $('*[data-slide-id = ' + curr + ' ]').css({"left": "0%", "z-index": "0"});
            $('*[data-slide-id =  ' + next + ' ]').css({"left": "50%", "z-index": "1"});
            $('*[data-slide-id =  ' + aftr + ' ]').css({"left": "100%", "z-index": "2"});
            $('.rotary').animate({
                "left": "-100%"
            }, 700, function() {
                $('.rotary').css("left", "0%");
                $('*[data-slide-id =  ' + curr + ' ]').attr("data-slide-status", "rest");
                $('*[data-slide-id =  ' + aftr + ' ]').attr("data-slide-status", "active");
                i += 1;
                $('.rotary').css("left", "0");
                $('*[data-slide-id = ' + curr + ' ]').css({"left": "100%"});
                $('*[data-slide-id =  ' + next + ' ]').css({"left": "0%"});
                $('*[data-slide-id =  ' + aftr + ' ]').css({"left": "50%"});
            });
        } else {
            let currd = slideNum;
            let nextd = 0;
            let aftrd = 1;
            $('.rotary').css("left", "0");
            $('*[data-slide-id = ' + currd + ' ]').css({"left": "0%", "z-index": "0"});
            $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "50%", "z-index": "1"});
            $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "100%", "z-index": "2"});
            i = 0;
            
            $('.rotary').animate({
                "left": "-100%"
            }, 700, function() {
                $('*[data-slide-id = ' + currd + ' ]').css({"left": "100%"});
                $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "0%"});
                $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "50%"});
                $('.rotary').css("left", "0");
                console.log("---------");
            });
        }
    }  

    $(".test").ready(function(){
        $(".test").hide().delay(300).fadeIn(500);
    });

    // Change Project Spacer Height : Project-Descriptor Div Height
    
    if ($(window).width() < 1000){
        var pspaceTop = ($(".pleft").height() + $(".pright").height() + 100).toString();
        console.log(pspaceTop + "tall  ");
        $(".project-spacer").css("height", pspaceTop);
    } else {
        var pspaceTop = ($(".pleft").height() + $(".pright").height()).toString();
        console.log(pspaceTop + "tall  ");
        $(".project-spacer").css("height", pspaceTop);
    }

    $(window).resize(function(){
        if ($(window).width() < 1000){
            var pspaceTop = ($(".pleft").height() + $(".pright").height() + 100).toString();
            console.log(pspaceTop + "tall  ");
            $(".project-spacer").css("height", pspaceTop);
        } else {
            var pspaceTop = ($(".pleft").height() + $(".pright").height()).toString();
            console.log(pspaceTop + "tall  ");
            $(".project-spacer").css("height", pspaceTop);
        }
    });
    
})



