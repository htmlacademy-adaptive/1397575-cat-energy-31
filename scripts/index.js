var n=document.querySelector(".location__map"),a=document.querySelector(".navigation"),o=document.querySelector(".navigation__toggle");n.classList.remove("location__map--nojs");a.classList.remove("navigation--nojs");o.addEventListener("click",()=>{a.classList.contains("navigation--closed")?(a.classList.remove("navigation--closed"),a.classList.add("navigation--opened")):(a.classList.remove("navigation--opened"),a.classList.add("navigation--closed"))});
