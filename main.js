$("document").ready(function(){

    

    // Slider Main Page
    
    let i = 0;
    let curr = i;
    let next = i + 1;
    let aftr = i + 2;

    let slideNum = 5;

    $('*[data-slide-id = ' + curr + ' ]').css({"left": "0%"});
    $('*[data-slide-id =  ' + next + ' ]').css({"left": "50%"});
    $('*[data-slide-id =  ' + aftr + ' ]').css({"left": "100%"});
    $('*[data-slide-id =  5 ]').css({"left": "100%"});

    var winAspect = $(window).width() / $(window).height();
    var imgAspect = 1.77777777778;

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
        
        if (i < slideNum - 1) {
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
        } else if (i == slideNum - 1) {
            let currd = i;
            let nextd = i+1;
            let aftrd = 0;
            $('.rotary').css("left", "0");
            $('.rotary img').css("left", "100%");
            $('*[data-slide-id = ' + currd + ' ]').css({"left": "0%", "z-index": "0"});
            $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "50%", "z-index": "1"});
            $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "100%", "z-index": "2"});
            
            $('.rotary').animate({
                "left": "-100%"
            }, 700, function() {
                $('*[data-slide-id =  ' + currd + ' ]').attr("data-slide-status", "rest");
                $('*[data-slide-id =  ' + aftrd + ' ]').attr("data-slide-status", "active");
                $('*[data-slide-id = ' + currd + ' ]').css({"left": "100%"});
                $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "0%"});
                $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "50%"});
                $('.rotary').css("left", "0");
                i += 1;
                console.log("---------");
            });
        } else {
            let currd = i;
            let nextd = 0;
            let aftrd = 1;
            $('.rotary').css("left", "0");
            $('.rotary img').css("left", "100%");
            $('*[data-slide-id = ' + currd + ' ]').css({"left": "0%", "z-index": "0"});
            $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "50%", "z-index": "1"});
            $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "100%", "z-index": "2"});
            
            $('.rotary').animate({
                "left": "-100%"
            }, 700, function() {
                $('*[data-slide-id =  ' + currd + ' ]').attr("data-slide-status", "rest");
                $('*[data-slide-id =  ' + aftrd + ' ]').attr("data-slide-status", "active");
                $('*[data-slide-id = ' + currd + ' ]').css({"left": "100%"});
                $('*[data-slide-id =  ' + nextd + ' ]').css({"left": "0%"});
                $('*[data-slide-id =  ' + aftrd + ' ]').css({"left": "50%"});
                $('.rotary').css("left", "0");
                i = 0;
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
    

    // Add copyright
    $(".gallery").append("<div class='imagebox copyright'></>");
    $(".copyright").append("<h2 class='hehe'>Web Design by ai.goo © 2021</h2>");

    // Add dropdown
    $("nav").append(`
    <div class='desktopnav'>
    <ul class='section-list'>
        <li id="Home">
            <a href='index.html' id='home'>Arlette Geller</a>
        </li>
        <li id="about-me">
            <a href='about.html'>About Me</a>
        </li>
        <li id="resume">
            <a href='resume.html'>Resume</a>
        </li>
        <li id="email">
           <a href='https://www.linkedin.com/in/arlettegeller'><img src='images/linkedin.png' style='margin-top:10px;'></a><br>
       </li>
       <li>
           <a href='mailto:ArletteGeller@gmail.com'><img src='images/Email.png'></a>
       </li>
    </ul>
    <br>
    <ul class='project-list'>
        <li id='spec-appart'>
            <a href='speculum-apparatus.html'>Speculum Redesign</a>
       </li>
       <li id='cyst-append'>
            <a href='cystoscope-apenditure.html'>Cystoscope</a>
       </li>
        <li  id='mitral-valve'>
            <a href='mitral-valve-sewing-ring.html'>Mitral Valve Sewing Ring</a>
       </li>
        <li id="drain-syst">
           <a href='drainage-system.html'>Drainage System</a>
       </li>
        <li id='heart-failure' >
            <a href='heart-failure-prediction-model.html'>Heart Failure Prediction Model</a>
        </li>

        <li id='bc-screening'>
            <a href='at-home-breast-cancer-screening.html'>At-Home B.C. Screening</a>
        </li>
        <li id='assist-tech'>
            <a href='assistive-technology-high-spinal-injuries.html'>A-T High Spinal Injuries</a>
        </li>
        <li id='pen-plotter'>
            <a href='pen-plotter-machine.html'>Pen Plotter Machine</a>
        </li>
        <li id='non-invasive'>
            <a href='non-invasive-vagus-nerve-stimulation-device.html'>Non-Invasive V.N.S.</a>
        </li>
        <li id='game-board'>
            <a href='game-board-design.html'>Game Board Design</a>
        </li>
    </ul>

    </div>
    
    <div class='dropdown'>
        <button onclick='myFunction()' class='dropbtn'></button>
        <div id='myDropdown' class='dropdown-content'>
            <li id="home"><a href='index.html' id='home' style='border-radius: 0; padding-left: 10px;'>Arlette Geller</a></li>    
            <li id="about-me"><a href='about.html' id='person' style='border-radius: 0;'>About Me</a></li>    
            <li id="resume"><a href='resume.html' id='person' style='border-bottom: 1px grey solid; border-radius: 0;'>Resume</a></li>    
            
            <li id="spec-appart"><a href='speculum-apparatus.html'>Speculum Redesign</a></li>
            <li id="cyst-append"><a href='cystoscope-apenditure.html'>Cystoscope</a></li>
            <li id="mitral-valve"><a href='mitral-valve-sewing-ring.html'>Mitral Valve Sewing Ring</a></li>
            <li id="drain-syst"><a href='drainage-system.html'>Drainage System</a></li>
            <li id="heart-failure"><a href='heart-failure-prediction-model.html'>Heart Failure Prediction Model</a></li>
            <li id="bc-screening-m"><a href='at-home-breast-cancer-screening.html'>At-Home B.C. Screening</a></li>
            <li id="assist-tech-m"><a href='assistive-technology-high-spinal-injuries.html'>Assist-Tech High Spinal Injuries</a></li>
            <li id="pen-plotter"><a href='pen-plotter-machine.html'>Pen Plotter Machine</a></li>
            <li id="non-invasive-m"><a href='non-invasive-vagus-nerve-stimulation-device.html'>Non-Invasive V.N.S.</a></li>
            <li id="game-board"><a href='game-board-design.html' style='border-bottom: 1px grey solid; border-radius: 0;'>Game Board Design</a></li>

            <li id="linked-in"><a href='https://www.linkedin.com/in/arlettegeller'><img src='images/linkedin.png' style='margin-top:10px; width: 25px;'></a></li>
            <li id="email"><a href='mailto:ArletteGeller@gmail.com'><img src='images/Email.png' style='margin-top:10px; width: 25px;'></a></li> 
        </div>
    </div>
    
    <script>
        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById('myDropdown').classList.toggle('show');
}

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        }
    </script>`)
})

jQuery(function() {
    let path = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (path == "speculum-apparatus.html"){
        $("#spec-appart > a").addClass("active");
    } else if(path=="cystoscope-apenditure.html"){
        $("#cyst-append > a").addClass("active");
    } else if(path=="mitral-valve-sewing-ring.html"){
        $("#mitral-valve > a").addClass("active");
    } else if(path=="drainage-system.html"){
        $("#drain-syst > a").addClass("active");
    } else if(path=="heart-failure-prediction-model.html"){
        $("#heart-failure > a").addClass("active");
    } else if(path=="at-home-breast-cancer-screening.html"){
        $("#bc-screening > a").addClass("active");
        $("#bc-screening-m > a").addClass("active");
    } else if(path=="assistive-technology-high-spinal-injuries.html"){
        $("#assist-tech > a").addClass("active");
        $("#assist-tech-m > a").addClass("active");
    } else if(path=="pen-plotter-machine.html"){
        $("#pen-plotter > a").addClass("active");
    } else if(path=="non-invasive-vagus-nerve-stimulation-device.html"){
        $("#non-invasive > a").addClass("active");
        $("#non-invasive-m > a").addClass("active");
    } else if(path=="game-board-design.html"){
        $("#game-board > a").addClass("active");
    } else if(path=="about.html"){
        $("#about-me > a").addClass("active");
    } else if(path=="resume.html"){
        $("#resume > a").addClass("active");
    }

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
    toggleText("#non-invasive > a", "Non-Invasive V.N.S.", "Non-Invasive Vagus Nerve Stimulation Device");
})
