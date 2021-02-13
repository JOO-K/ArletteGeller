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
    toggleText("#assist-tech > a", "Assist-Tech High Spinal Injuries", "Assistive Technology for High Spinal Cord Injuries");
    toggleText("#non-invasive > a", "Non-Invas. V.N. Stimulation", "Non-Invasive Vagus Nerve Stimulation Device");
    
})