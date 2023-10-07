const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else{
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}


navBtn.addEventListener("click", function() {
   if (nav.classList.contains("open")) {
    document.body.style.overflow = 'hidden';
   } else {
    document.body.style.overflow = '';
   } 
});
