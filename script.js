// DARK MODE

const toggleBtn = document.getElementById("theme-toggle");

if(toggleBtn){

toggleBtn.addEventListener("click",function(){

let html=document.documentElement;

if(html.getAttribute("data-bs-theme")==="light"){
html.setAttribute("data-bs-theme","dark");
}else{
html.setAttribute("data-bs-theme","light");
}

});

}


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll",function(){

let navbar=document.querySelector(".navbar");

if(window.scrollY>50){
navbar.classList.add("shadow");
}else{
navbar.classList.remove("shadow");
}

});

// animated counter

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCount,10);

}else{

counter.innerText = target + "+";

}

};

updateCount();

});
