///////////////////// carrousel homepage

if(window.location.pathname === "/html.index"){
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

}

if(window.location.pathname === "/pages.hotel-feu.html"){
    let carrouselBtnFeu = document.getElementById("carrouselBtnFeu");
    let nodeSlideFeu = document.querySelectorAll(".carrousel-slideFeu");
    let tblSlideFeu = Array.from(nodeSlideFeu);
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
}






///////////////////// formulaire de reservation



// attribution des constantes et style

const divResult = document.getElementById("result");
const divSummary = document.getElementById("summary");
const dietSection = document.getElementById("dietSection");
const restrictionSection = document.getElementById("restrictionSection");
const modal = document.getElementById("modal");
const form = document.getElementById("form");



// function affichage des restrictions et regime alimentaire

function toggleDiet(){
    const breackfast = document.getElementById("breackfast").checked;
    const lunch = document.getElementById("lunch").checked;
    const diner = document.getElementById("diner").checked;
    if(breackfast || lunch || diner){
        dietSection.classList.remove("hidden");
        restrictionSection.classList.remove("hidden");
    } else {
        dietSection.classList.add("hidden");
        restrictionSection.classList.add("hidden");
    }
}


document.getElementById("breackfast").addEventListener("change", toggleDiet);
document.getElementById("lunch").addEventListener("change", toggleDiet);
document.getElementById("diner").addEventListener("change", toggleDiet);



// recuperation des informations du formulaire

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
    const room = document.getElementById("room").value;
    const breackfast = document.getElementById("breackfast").checked;
    const lunch = document.getElementById("lunch").checked;
    const diner = document.getElementById("diner").checked;
    const arrivee = document.getElementById("arrivee").value;
    const depart = document.getElementById("depart").value;
    const visitorsValue = document.getElementById("visitors").value.trim();
    const driver = document.getElementById("driver").checked;
    const guide = document.getElementById("visit").checked;


    // tableau de stockage des erreurs
    let errors =[];


    // condition d'attribution de valeur des regimes ou restrictions;
    //si la condition sur le input est validé, alors on attribue la valeur a la constante, sinon rien
    const restrictionSection = document.querySelector('input[name="restrictionSection"]:checked')? 
    document.querySelector('input[name="restrictionSection"]').value : "aucun";

    const dietSection = document.querySelector('input[name="dietSection"]:checked')? 
    document.querySelector('input[name="dietSection"]').value : "aucun";

    
    // calcul de la durée du séjour
    let arriveeDate = new Date(arrivee);
    let arriveeFormatted = arriveeDate.toLocaleDateString('fr-FR');
    let departDate = new Date(depart);
    let departFormatted = departDate.toLocaleDateString('fr-FR');
    const oneDay = 24*60*60*1000;

    let journey = Math.round((departDate-arriveeDate)/oneDay);


    //condition Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?\d{9,12}$/; 


    //verification des champs et calcul du total
    let total = 0;


    if(surname.length <2 || surname.length > 50)
        errors.push("Le Nom doit contenir entre 2 et 50 caractéres");

    if(firstname.length <2 || firstname.length > 50)
        errors.push("Le prénom doit contenir entre 2 et 50 caractéres");

    if(streetName.length > 150)
        errors.push("L'adresse ne peut pas avoir plus de 150 caractéres");

    let streetNbrInt = parseInt(streetNbr, 10);
    if (isNaN(streetNbrInt) || streetNbrInt === 0) {
        errors.push("Numéro de rue non valide");
    }

    if(cityCode.length != 5)
        errors.push("Le code postal doit contenir 5 chiffres");

    if(cityName.length > 100)
        errors.push("Le nom de la ville ne peut pas avoir plus de 100 caractéres");

    if(!emailRegex.test(email) || email.length > 100)
        errors.push("Email non valide");

    if(!phoneRegex.test(phone))
        errors.push("Tèlèphone non valide");

    if(!hotel)
        errors.push("Choisissez un Hotel");

    if(!room){
        errors.push("Choisissez une Chambre");
    } else if(room.value === "igloo"){
        total += journey*500
    } else if(room.value === "suite"){
        total += journey*850
    }

    if(!arrivee)
        errors.push("Choisissez une date d'arrivée");

    if(!depart)
        errors.push("Choisissez une date de départ");

    if(departDate < arriveeDate || departDate === arriveeDate)
        errors.push("les dates ne conviennent pas");

    if(!breackfast && !driver && !guide && !lunch && !diner)
        errors.push("Vous devez choisir au moins une option")

    let visitors = null;
    if(visitorsValue === ""){
        errors.push("Veuillez indiquer le nombre de personnes")
    }else {
        visitors = parseInt(visitorsValue);
        if(visitors<0 || visitors>2){
        errors.push("Vous devez être entre 1 et 2 personnes")
        }
    };

    if(driver)
        total += 11*journey;

    if(breackfast)
        total += 15*journey*visitors;

    if(diner)
        total += 25*journey*visitors;

    if(lunch)
        total += 25*journey*visitors;

    if(guide)
        total += 20;










    // function résumé des options
    function optionsChoisis(){
        let options = [];
        if(driver) options.push("Cauffeur");
        if(diner) options.push("Dîner");
        if(lunch) options.push("Déjeuner");
        if(breackfast) options.push("Petit Déjeuner");
        if(guide) options.push("Visite");

        return options.length>0 ? options.join(", ") : "Aucune"
    }






    // affichage des resultats
    modal.classList.remove("hidden");
    form.classList.add("blur");

    divResult.innerHTML = errors.length>0 ? errors.join("<br>") : "Enregistrement validé";
    divSummary.innerHTML = errors.length === 0 ?
        `Vous êtes Mr(Mme) ${firstname} ${surname}, habitant au ${streetNbr} de la rue ${streetName},<br>
        ${cityCode}, ${cityName}, ${phone}, ${email}.<br>
        Vous avez choisi l'${hotel} pour un séjour de ${visitorsValue} personne(s),<br>
        arrivée le ${arriveeFormatted} et départ le ${departFormatted}, dans l'(la) ${room}.
        Option(s) selectionnée(s): ${optionsChoisis()}<br>
        Votre facture s'élève à ${total}€`: "Modifiez votre enregistrement";





   // function reset
    function reset(){
    const divResult = document.getElementById("result");
    const divSummary = document.getElementById("summary");
    const dietSection = document.getElementById("dietSection");
    const restrictionSection = document.getElementById("restrictionSection");
    const modal = document.getElementById("modal");
    const form = document.getElementById("form");

    const radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach(radio => radio.checked = false);        
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    divResult.innerHTML = "";
    divSummary.innerHTML = "";

    document.getElementById("form").reset();
    restrictionSection.classList.add("hidden");
    dietSection.classList.add("hidden");
    modal.classList.add("hidden");
    form.classList.remove("blur");
    }

    
    document.getElementById("reset-btn").addEventListener("click", reset);

    document.getElementById("validate-btn").addEventListener("click", function(){
        alert("Je sais pas faire la zone de payement!")
    })
})



