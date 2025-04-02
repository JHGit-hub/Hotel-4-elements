///////////////////// carrousel homepage


//creation des variables

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

// action "click" sur carrousel

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


///////////////////// formulaire de reservation

// function reset

// function reset
function reset(){
    const divResult = document.getElementById("result");
    const divSummary = document.getElementById("summary");
    const dietSection = document.getElementById("dietSection");
    const dietRestriction = document.getElementById("dietRestriction");
    const modal = document.getElementById("modal");

    const radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach(radio => radio.checked = false);        
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    divResult.innerHTML = "";
    divSummary.innerHTML = "";

    document.getElementById("form").reset();
    dietRestriction.style.display = "none";
    dietSection.style.display = "none";
    modal.style.display = "none"

    document.getElementById("reset-btn").addEventListener("click", reset);
}



// function affichage des restrictions et regime alimentaire

document.getElementById("breackfast").addEventListener("change", toggleDiet);
document.getElementById("lunch").addEventListener("change", toggleDiet);
document.getElementById("diner").addEventListener("change", toggleDiet);
dietSection.style.display = "none";
dietRestriction.style.display = "none";
modal.style.display = "none"

function toggleDiet(){
    const breackfast = document.getElementById("breackfast").checked;
    const lunch = document.getElementById("lunch").checked;
    const diner = document.getElementById("diner").checked;
    if(breackfast || lunch || diner){
        dietSection.style.display = "flex";
        dietRestriction.style.display ="flex";
    } else {
        dietSection.style.display = "none";
        dietRestriction.style.display = "none";
    }
}








document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

// creation des constantes
    const surname = document.getElementById("surname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const streetNbr = document.getElementById("streetNbr").value.trim();
    const streetName = document.getElementById("streetName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const cityName = document.getElementById("cityName").value.trim();
    const cityCode = document.getElementById("cityCode").value.trim();
    const hotel = document.getElementById("hotel").value;
    const breackfast = document.getElementById("breackfast").checked;
    const lunch = document.getElementById("lunch").checked;
    const diner = document.getElementById("diner").checked;
    const arrivee = document.getElementById("arrivee").value;
    const depart = document.getElementById("depart").value;
    const visitors = document.getElementById("visitors").value.trim();
    const driver = document.getElementById("driver").checked;
    const guide = document.getElementById("guide").checked;

// tableau de stockage des erreurs
    let erros =[];









})


// Regimes alimentaire
document.getElementById("breackfast").addEventListener("change", toggleDiet);
document.getElementById("lunch").addEventListener("change", toggleDiet);
document.getElementById("diner").addEventListener("change", toggleDiet);
dietSection.style.display = "none";

function toggleDiet(){
    const petitDejeuner = document.getElementById("petit_dejeuner").checked;
    const dejeuner = document.getElementById("dejeuner").checked;
    const diner = document.getElementById("diner").checked;
    if(petitDejeuner || dejeuner || diner){
        dietSection.style.display = "flex";
        console.log("dietSection est AFFICHÉE");
    } else {
        dietSection.style.display = "none";
        console.log("dietSection est MASQUÉE");
    }
}




// condition d'attribution de valeur des regimes ou restrictions;

const dietRestriction = document.querySelector('input[name="dietRestriction"]:checked')? 
document.querySelector('input[name="dieRestriction"]').value : "aucun";
