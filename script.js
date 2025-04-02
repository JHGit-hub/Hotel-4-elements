// carrousel

let carrouselBtnFeu = document.getElementById("carrouselBtnFeu");
let nodeSlideFeu = document.querySelectorAll(".carrousel-slideFeu");
let tblSlideFeu = Array.from(nodeSlideFeu);

let carrouselBtnAir = document.getElementById("carrouselBtnAir");
let nodeSlideAir = document.querySelectorAll(".carrousel-slideAir");
let tblSlideAir = Array.from(nodeSlideAir);

let carrouselBtnEau = document.getElementById("carrouselBtnEau");
let nodeSlideEau = document.querySelectorAll(".carrousel-slideEau");
let tblSlideEau = Array.from(nodeSlideEau);

let carrouselBtnTerre = document.getElementById("carrouselBtnTerre");
let nodeSlideTerre = document.querySelectorAll(".carrousel-slideTerre");
let tblSlideTerre = Array.from(nodeSlideTerre);

let i=0;

carrouselBtnFeu.addEventListener("click", function(){
    tblSlideFeu[i].classList.add("hidden");
    if(i<tblSlideFeu.length-1){
        i++;
    } else {
        i=0;
    };
    tblSlideFeu[i].classList.remove("hidden");
});
carrouselBtnEau.addEventListener("click", function(){
    tblSlideEau[i].classList.add("hidden");
    if(i<tblSlideEau.length-1){
        i++;
    } else {
        i=0;
    };
    tblSlideEau[i].classList.remove("hidden");
});
carrouselBtnAir.addEventListener("click", function(){
    tblSlideAir[i].classList.add("hidden");
    if(i<tblSlideAir.length-1){
        i++;
    } else {
        i=0;
    };
    tblSlideAir[i].classList.remove("hidden");
});
carrouselBtnTerre.addEventListener("click", function(){
    tblSlideTerre[i].classList.add("hidden");
    if(i<tblSlideTerre.length-1){
        i++;
    } else {
        i=0;
    };
    tblSlideTerre[i].classList.remove("hidden");
});