console.log("ahihi")
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("ahihi")
    var cover = document.querySelector('.cover');
    var header = document.querySelector('.header');

var state = 0;

window.addEventListener("scroll",function() {
    if(window.pageYOffset >= cover.offsetTop && state == 0){
        header.classList.remove("header-big")
        header.classList.add("header-small")
        state = 1;
    }
    else if(window.pageYOffset < cover.offsetTop && state == 1){
        
        header.classList.remove("header-small")
        header.classList.add("header-big")
        state = 0;
    }
});
  });
