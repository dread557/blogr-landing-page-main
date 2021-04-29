const accBtns = document.querySelectorAll(".accordion-header");
const accContents = document.querySelectorAll(".accordion-body");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const mobileNav = document.querySelector(".mobile-nav");



accBtns.forEach(btn => {
    btn.addEventListener("click", (e)=>{

        accContents.forEach((acc) => {
            if(e.target.nextElementSibling !== acc && acc.classList.contains("active")){
                acc.classList.remove("active");
                accBtns.forEach(btn => btn.classList.remove("active"));
            }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
});

window.onclick = (e) => {
    if(!e.target.matches(".accordion-header")){
        accBtns.forEach(btn => btn.classList.remove("active"));
        accContents.forEach(acc => acc.classList.remove("active"));
    }
}

openNav.addEventListener("click", ()=>{
    mobileNav.style.display = "block";
    if(mobileNav.style.display = "block") {
        closeNav.style.display = "block";
        openNav.style.display = "none";
    } else {
        closeNav.style.display = "none";
    }
});

closeNav.addEventListener("click", ()=>{
    mobileNav.style.display = "none";
    if(mobileNav.style.display = "none") {
        closeNav.style.display = "none";
        openNav.style.display = "block";
    } else {
        closeNav.style.display = "none";
    }
});
