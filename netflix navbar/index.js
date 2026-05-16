const mgsearchcontainer=document.querySelector(".mgsearch");
const mgsearchbtn=document.querySelector(".mgmagnifier");
const mgmaindiv=document.querySelector(".mgmain")


mgsearchbtn.addEventListener("click",()=>{
    mgsearchcontainer.classList.toggle("active")
})

window.addEventListener("scroll",()=>{
if(window.scrollY>20){
    mgmaindiv.classList.add("down1")
}else{
    mgmaindiv.classList.remove("down1")
}
})


















































