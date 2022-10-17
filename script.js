var menu = document.getElementById('menu');
var ramen = document.getElementById('bowl');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    menu.style.left = value * 1 + 'px';
    menu.style.top = value * 0.25 + 'px';
    bowl.style.left = value * 0.25 - '200px';
})
