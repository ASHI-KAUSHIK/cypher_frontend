var searchicon = document.getElementById('searchicon');
var serachanime = document.getElementById('serachanime');


searchicon.addEventListener('click',()=>{
    serachanime.style.display = "inline-block"; 
});



document.addEventListener('mouseup',function(e) {
    if (!serachanime.contains(e.target)) {
        serachanime.style.display = "none"; 
        serachanime.value = "";
    }
})