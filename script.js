
let home = document.querySelector('#home');
let contact = document.querySelector('#contact');
let info = document.querySelector('#info');
let  guide = document.querySelector('#guide');
let defaults = document.querySelector('#default');

document.querySelector('.home').addEventListener("click",function(){
    defaults.style.display = "none";
    guide.style.display = "none";
    info.style.display = "none";
    contact.style.display = "none";
    home.style.display = "block";
})
document.querySelector('.contact').addEventListener("click",function(){
    defaults.style.display = "none";
    guide.style.display = "none";
    info.style.display = "none";
    contact.style.display = "block";
    home.style.display = "none";
})
document.querySelector('.info').addEventListener("click",function(){
    defaults.style.display = "none";
    guide.style.display = "none";
    info.style.display = "block";
    contact.style.display = "none";
    home.style.display = "none";
})
document.querySelector('.guide').addEventListener("click",function(){
    defaults.style.display = "none";
    guide.style.display = "block";
    info.style.display = "none";
    contact.style.display = "none";
    home.style.display = "none";
})