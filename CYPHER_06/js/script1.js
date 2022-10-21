var makepositionfixed1 = document.getElementsByClassName('makepositionfixed1')[0];

window.onscroll = function(){
    if(document.body.scrollTop >=100 || document.documentElement.scrollTop >=100){
        makepositionfixed1.style.position = "fixed";

        makepositionfixed1.style.top = "70px";
    }

    else if(document.body.scrollTop < 100 || document.documentElement.scrollTop <100){
        makepositionfixed1.style.top = "90px"
    }
}