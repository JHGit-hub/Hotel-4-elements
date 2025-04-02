// carrousel

let carrouselBtnFeu = document.getElementById("carrouselBtnFeu");
let nodeSlideFeu = document.querySelectorAll(".carrousel-slideFeu");
let tblSlideFeu = Array.from(nodeSlideFeu);
let i=0;

console.log(tblSlideFeu);

carrouselBtnFeu.addEventListener("click", function(){
    tblSlideFeu[i].classList.add("hidden");
    if(i<tblSlideFeu.length-1){
        i++;
    } else {
        i=0;
    };
    tblSlideFeu[i].classList.remove("hidden");
});