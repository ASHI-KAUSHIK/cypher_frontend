var makepositionfixed = document.getElementsByClassName('makepositionfixed')[0];
// var famagnifyingglass = document.getElementsByClassName('fa-magnifying-glass')[0];
// var serachanime = document.getElementById('serachanime');

window.onscroll = function(){
    if(document.body.scrollTop >=495 || document.documentElement.scrollTop >=495){
        makepositionfixed.style.position = "fixed";

        makepositionfixed.style.top = "0px";
    }

    else if(document.body.scrollTop < 495 || document.documentElement.scrollTop <495){
        makepositionfixed.style.top = "550px";
        makepositionfixed.style.position = "fixed";
    }
}

// famagnifyingglass.addEventListener('click',()=>{
//     serachanime.style.display = "inline-block"; 
// });



// document.addEventListener('mouseup',function(e) {
//     if (!serachanime.contains(e.target)) {
//         serachanime.style.display = "none"; 
//         serachanime.value = "";
//     }
// })








// var fixedtopscroll = document.getElementsByClassName('fixed-top-scroll')[0];

// window.onscroll() = function(){
//     if(document.body.scrollTop >=500 || document.documentElement.scrollTop >=500){
//         fixedtopscroll.style.position = "fixed";
//         fixedtopscroll.style.top = "500px";
//     }
// }
