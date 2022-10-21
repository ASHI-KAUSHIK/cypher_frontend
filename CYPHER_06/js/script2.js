var famagnifyingglass = document.getElementsByClassName('fa-magnifying-glass')[0];
var serachanime = document.getElementById('serachanime');





famagnifyingglass.addEventListener('click',()=>{
    serachanime.style.display = "inline-block"; 
    
});


document.addEventListener('mouseup',function(e) {
    if (!serachanime.contains(e.target)) {
        serachanime.style.display = "none"; 
        serachanime.value = "";
    }
})
