var img=document.querySelector(".wpc")
var text=document.querySelector(".del")
var h2=document.querySelector(".h2")
window.addEventListener("scroll",function(){
    if(window.pageYOffset > 200){
        img.style.opacity="100%"
    }
    else{
        img.style.opacity="0%"
    }
})
window.addEventListener("scroll",function(){
    if(window.pageYOffset > 600){
        text.style.opacity="100%",h2.style.opacity="100%"
    }
    else{
        text.style.opacity="0%"
    }
})