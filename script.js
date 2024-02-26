// skape et billettobjekter-array
let billetter = [];

// funksjon for å legge til en billett
function kjopBillett() {
    // Fjerner alle tidligere feilmeldinger
    nullstillErrormessages();
    // Henter verdier fra inputfeltene
    let film = document.getElementById("filmSelect").value;
    let antall = document.getElementById("antallInput").value;
    let fornavn = document.getElementById("fornavnInput").value;
    let etternavn = document.getElementById("etternavnInput").value;
    let telefon = document.getElementById("telefonInput").value;
    let epost = document.getElementById("epostInput").value;

    // Validering av inputs
    if (film === ""){
        filmSelectErrorMessage.textContent = "Vennligst velg en film.";
    }
    if (antall === "" || isNaN(antall)){
        antallInputErrorMessage.textContent = "Vennligst skriv inn et tall.";
    }
    if (fornavn === ""){
        fornavnInputErrorMessage.textContent = "Vennligst skriv inn fornavn."
    }
    if (etternavn === ""){
        etternavnInputErrorMessage.textContent = "Vennligst skriv inn etternavn."
    }

    // Validering av telefonnummer ved bruk av regex
    if (telefon === "" || !validerTelefon(telefon)){
        telefonInputErrorMessage.textContent = "Vennligst skriv inn et gyldig telefonnummer."
    }

    // Validering av e-postadresse ved bruk av regex
    if (epost === "" || !validerEpost(epost)){
        epostInputErrorMessage.textContent = "Vennligst skriv inn en gyldig e-postadresse."
    }
    // "Samlevalidering" med return slik at alle feilmeldinger kan vises samtidig OG en "alert" dukker opp for å gi beskjed til brukeren
    if (
    film === "" || 
    antall === "" || 
    fornavn === "" || 
    etternavn === "" || 
    telefon === "" || 
    epost === "" || 
    !validerTelefon(telefon) || 
    isNaN(antall) ||
    !validerEpost(epost)) {
        alert("Vennligst fyll ut alle informasjonsfeltene.");
        return;
    }

    // oppretter et billettobjekt
    let billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    // legger til billettobjektet i arrayet
    billetter.push(billett);

    // oppdaterer visningen av alle billetter
    oppdaterBilletter();

    // Nullstiller alle inputfeltene
    nullstillInputfelt();
}


// Funksjon for validering av telefonnummer - kreves minst 8 siffer

function validerTelefon(telefon) {
    var re = /^\d{8,}$/; 
    return re.test(telefon);
}

// Funksjon for validering av e-postadresse, hvor adressen må struktureres slik: eksempel@eksempel.eksempel
// Adressen må altså inneholde "@" og vise til et domenenavn.
function validerEpost(epost) {
    var re = /\S+@\S+\.\S+/;
    return re.test(epost);
}


// Funksjon for å oppdatere visningen av alle billetter
function oppdaterBilletter() {
    let billettListe = document.getElementById("alleBilletter");
    billettListe.innerHTML = "<h2>Alle billetter</h2>";

    // Går gjennom hver enkelt billett og legger til nye i listen
    billetter.forEach(function(billett, index) {
        billettListe.innerHTML += `
            <p>Billett ${index + 1}:</p>
            <p>Film: ${billett.film}</p>
            <p>Antall: ${billett.antall}</p>
            <p>Fornavn: ${billett.fornavn}</p>
            <p>Etternavn: ${billett.etternavn}</p>
            <p>Telefon: ${billett.telefon}</p>
            <p>Epost: ${billett.epost}</p>
            <hr>
        `;
    });
}

// Funksjon for å slette alle billetter
function slettBilletter() {
    // Tøm arrayet med billetter
    billetter = [];
    // Oppdater visningen av alle billetter
    oppdaterBilletter();
}

// Funksjon for å nullstille inputfeltene
function nullstillInputfelt() {
    document.getElementById("filmSelect").value = "";
    document.getElementById("antallInput").value = "";
    document.getElementById("fornavnInput").value = "";
    document.getElementById("etternavnInput").value = "";
    document.getElementById("telefonInput").value = "";
    document.getElementById("epostInput").value = "";
}

// Funksjon for å nullstille feilmeldinger
function nullstillErrormessages() {
    document.getElementById("filmSelectErrorMessage").textContent = "";
    document.getElementById("antallInputErrorMessage").textContent = "";
    document.getElementById("fornavnInputErrorMessage").textContent = "";
    document.getElementById("etternavnInputErrorMessage").textContent = "";
    document.getElementById("telefonInputErrorMessage").textContent = "";
    document.getElementById("epostInputErrorMessage").textContent = "";
}
