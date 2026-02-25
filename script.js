// Loader
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// Dark Mode
document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

// Mobile Menu
const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

menuToggle.onclick=()=>{
navMenu.classList.toggle("active");
};

// Typing Animation
const texts=["Full Stack Developer","MERN Stack Developer", "Building Real World Projects"];
let i=0,j=0,current="";
let typing=document.getElementById("typing");

function type(){
if(j<texts[i].length){
current+=texts[i][j];
typing.innerHTML=current;
j++;
setTimeout(type,100);
}else{
setTimeout(erase,1500);
}
}

function erase(){
if(j>0){
current=current.slice(0,-1);
typing.innerHTML=current;
j--;
setTimeout(erase,50);
}else{
i=(i+1)%texts.length;
setTimeout(type,200);
}
}
type();

// Particles
particlesJS("particles-js",{
particles:{
number:{value:70},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});