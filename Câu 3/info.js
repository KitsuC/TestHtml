let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mb = document.getElementById('mountains_behind');
let mf = document.getElementById('mountains_front');
let btn = document.querySelector('.link-me')
let text = document.querySelector('.text')
let hd = document.querySelector('header')


window.addEventListener('scroll', function(){
    let val = window.scrollY;
    stars.style.left = val *.25 + 'px'
    moon.style.top = val * .75 + 'px'
    mb.style.top = val * .5 + 'px'
    mf.style.top = val * 0 + 'px'
    text.style.marginRight = val * 4 + 'px'
    text.style.marginTop = val + 'px'
    btn.style.marginTop = val + 'px'
    hd.style.top = val * .5 + 'px'
})

