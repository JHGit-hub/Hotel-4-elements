////////////////////////////// JS HOMEPAGE //////////////////////////////


////////////// carrousel

if(window.location.pathname === "/index.html"){
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



////////////// menu burger

    const navMobil = document.getElementById("navMobil");
    const burgerBtn = document.getElementById("burgerBtn");


    burgerBtn.addEventListener("click",function(){
        if(navMobil.classList.contains("hidden-nav")){
            navMobil.classList.remove("hidden-nav");
        } else {
            navMobil.classList.add("hidden-nav");
        };
    });


////////////// scroll sur le header   

const header = document.querySelector("header");
const banner = document.querySelector(".banner");
let hauteurBanner = banner.offsetHeight;

window.addEventListener("scroll",function(){
    if(window.scrollY >= hauteurBanner){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    };
});


}





////////////////////////////// JS PAGE HOTEL FEU //////////////////////////////

////////////// carrousel

if(window.location.pathname === "/pages/hotel-feu.html"){
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



////////////// menu burger

    const navMobil = document.getElementById("navMobil");
    const burgerBtn = document.getElementById("burgerBtn");


    burgerBtn.addEventListener("click",function(){
        if(navMobil.classList.contains("hidden-nav")){
            navMobil.classList.remove("hidden-nav");
        } else {
            navMobil.classList.add("hidden-nav");
        };
    });

}



////////////////////////////// JS PAGE FORMULAIRE

if(window.location.pathname === "/pages/formulaire.html"){


////////////// formulaire de reservation

    // attribution des constantes et style

    const divResult = document.getElementById("result");
    const divSummary = document.getElementById("summary");
    const dietSection = document.getElementById("dietSection");
    const restrictionSection = document.getElementById("restrictionSection");
    const modal = document.getElementById("modal");
    const form = document.getElementById("form");
    const validateBtn = document.getElementById("validateBtn");
    const summaryIdentity = document.getElementById("summaryIdentity");
    const summaryReservation = document.getElementById("summaryReservation");
    const summaryOptions = document.getElementById("summaryOptions");
    const summaryTotal = document.getElementById("summaryTotal");
    const errors = document.getElementById("errors");



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
        let tblErrors =[];


        // condition d'attribution de valeur des regimes ou restrictions;
        //si la condition sur le input est validé, alors on attribue la valeur a la constante, sinon rien
        const restrictionSection = document.querySelector('input[name="restrictionSection"]:checked')? 
        document.querySelector('input[name="restrictionSection"]').value : "aucun";

        const dietSection = document.querySelector('input[name="dietSection"]:checked')? 
        document.querySelector('input[name="dietSection"]').value : "aucun";

        const roomValue = document.querySelector('input[name="room"]:checked')?
        document.querySelector('input[name="room"]').value : "aucun";

        /**
        const hotelValue = document.querySelector('input[name="hotel"]:checked')?
        document.querySelector('input[name="hotel"]').value : "aucun";
**/
        console.log(roomValue);

        
        // calcul de la durée du séjour
        let arriveeDate = new Date(arrivee);
        let arriveeFormatted = arriveeDate.toLocaleDateString('fr-FR');
        let departDate = new Date(depart);
        let departFormatted = departDate.toLocaleDateString('fr-FR');
        const oneDay = 24*60*60*1000;

        let journey = Math.round((departDate-arriveeDate)/oneDay);
        console.log(journey);


        //condition Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?\d{9,12}$/; 


        //verification des champs et calcul du total
        let total = 0;

        if(surname.length <2 || surname.length > 50)
            tblErrors.push("Le Nom doit contenir entre 2 et 50 caractéres");

        if(firstname.length <2 || firstname.length > 50)
            tblErrors.push("Le prénom doit contenir entre 2 et 50 caractéres");

        if(streetName.length > 150)
            tblErrors.push("L'adresse ne peut pas avoir plus de 150 caractéres");

        let streetNbrInt = parseInt(streetNbr, 10);
        if (isNaN(streetNbrInt) || streetNbrInt === 0) {
            tblErrors.push("Numéro de rue non valide");
        }

        if(cityCode.length != 5)
            tblErrors.push("Le code postal doit contenir 5 chiffres");

        if(cityName.length > 100)
            tblErrors.push("Le nom de la ville ne peut pas avoir plus de 100 caractéres");

        if(!emailRegex.test(email) || email.length > 100)
            tblErrors.push("Email non valide");

        if(!phoneRegex.test(phone))
            tblErrors.push("Tèlèphone non valide");

        if(!hotel)
            tblErrors.push("Choisissez un Hotel");

        if(!room){
            tblErrors.push("Choisissez une Chambre");
        } else if(roomValue === "Chambre igloo"){
            total += journey*500
        } else if(roomValue === "Suite laponne"){
            total += journey*850
        }
        console.log(total);


        if(!arrivee)
            tblErrors.push("Choisissez une date d'arrivée");

        if(!depart)
            tblErrors.push("Choisissez une date de départ");

        if(departDate < arriveeDate || departDate === arriveeDate)
            tblErrors.push("les dates ne conviennent pas");

        let visitors = null;
        if(visitorsValue === ""){
            tblErrors.push("Veuillez indiquer le nombre de personnes")
        }else {
            visitors = parseInt(visitorsValue);
            if(visitors<0 || visitors>2){
            tblErrors.push("Vous devez être entre 1 et 2 personnes")
            }
        };
        console.log(visitors);


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
            if(driver) options.push("Chauffeur");
            if(diner) options.push("Dîner");
            if(lunch) options.push("Déjeuner");
            if(breackfast) options.push("Petit Déjeuner");
            if(guide) options.push("Visite");

            return options.length>0 ? options.join(", ") : "Aucune"
        }


        // affichage des resultats
        modal.classList.remove("hidden");
        form.classList.add("blur");

        if(tblErrors.length > 0){
            divSummary.classList.remove("summary");
            divSummary.classList.add("hidden");
            divResult.innerHTML = tblErrors.join("<br>");
            validateBtn.classList.add("hidden");

        }

        if(tblErrors.length === 0){
            errors.classList.remove("results");
            errors.classList.add("hidden");

            summaryIdentity.innerHTML = `<span class="summary-span">Vous êtes: </span>${firstname} ${surname}<br>
            <span class="summary-span">Adress: </span>${streetNbr} ${streetName}<br>
            <span class="summary-span">Ville: </span>${cityCode}, ${cityName}<br>
            <span class="summary-span">Téléphone: </span>${phone}<br>
            <span class="summary-span">Email: </span>${email}.`
            summaryReservation.innerHTML = `<span class="summary-span">Vous avez choisi </span>la ${room} de l'${hotel}<br>
            <span class="summary-span">pour un séjour de </span>${visitorsValue} personne(s)<br>
            <span class="summary-span">arrivée le </span>${arriveeFormatted}<br>
            <span class="summary-span">départ le </span>${departFormatted}`
            summaryOptions.innerHTML = `<span class="summary-span">Option(s) selectionnée(s): </span>${optionsChoisis()}`
            summaryTotal.innerHTML = `<span class="summary-span">Votre facture s'élève à: </span>${total}€`
        }


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
            summaryIdentity.innerHTML = "";
            summaryReservation.innerHTML = "";
            summaryOptions.innerHTML = "";
            summaryTotal.innerHTML ="";

            document.getElementById("form").reset();
            restrictionSection.classList.add("hidden");
            dietSection.classList.add("hidden");
            modal.classList.add("hidden");
            form.classList.remove("blur");
            validateBtn.classList.remove("hidden");
            errors.classList.add("results");
            errors.classList.remove("hidden");
            divSummary.classList.add("summary");
            divSummary.classList.remove("hidden");


        }

        
        // activation reset
        document.getElementById("reset-btn").addEventListener("click", reset);
    })

////////////// menu burger

    const navMobil = document.getElementById("navMobil");
    const burgerBtn = document.getElementById("burgerBtn");


    burgerBtn.addEventListener("click",function(){
        if(navMobil.classList.contains("hidden-nav")){
            navMobil.classList.remove("hidden-nav");
        } else {
            navMobil.classList.add("hidden-nav");
        };
    });

}


