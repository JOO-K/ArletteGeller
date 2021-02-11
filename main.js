$("document").ready(function(){

    // Text Toggle for Long List Items in Main-Menu
    function toggleText(param, init, second) {
        $(param).mouseover(function(){
            $(param).text(second);
        })
        $(param).mouseout(function(){
            $(param).text(init);
        })
    }

    toggleText("#bc-screening > a", "At-Home B.C. Screening", "At-Home Breast Cancer Screening Device");
    toggleText("#assist-tech > a", "Assist-Tech High Spinal Injuries", "Assistive Technology for High Spinal Cord Injuries");
    toggleText("#non-invasive > a", "Non-Invas. V.N. Stimulation", "Non-Invasive Vagus Nerve Stimulation Device");
    
})

