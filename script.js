// alert("hello");

let btnAll = document.querySelector("#btnAll");
let btnFinn = document.querySelector("#btnFinn");
let btnJimbo = document.querySelector("#btnJimbo");
let btnMayor = document.querySelector("#btnMayor");
let btnClive = document.querySelector("#btnClive");
let btnBank = document.querySelector("#btnBank");
let btnMystery = document.querySelector("#btnMystery");
let btnKittizens = document.querySelector("#btnKittizens");

let sectionFinn = document.querySelector("#sectionFinn");
let sectionNPCs = document.querySelector("#sectionNPCs");
let sectionKittizens = document.querySelector("#sectionKittizens");
let cardJimbo = document.querySelector("#cardJimbo");
let cardMayor = document.querySelector("#cardMayor");
let cardClive = document.querySelector("#cardClive");
let cardBank = document.querySelector("#cardBankTeller");
let cardMystery = document.querySelector("#cardMysteryCat");

// Show all button
btnAll.addEventListener("click", function () {
    sectionFinn.classList.remove("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.remove("hiddenSection");
    cardJimbo.classList.remove("hiddenSection");
    cardMayor.classList.remove("hiddenSection");
    cardClive.classList.remove("hiddenSection");
    cardBank.classList.remove("hiddenSection");
    cardMystery.classList.remove("hiddenSection");
});

// Show Finn button

btnFinn.addEventListener("click", function () {
    sectionFinn.classList.remove("hiddenSection");
    sectionNPCs.classList.add("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
});

// Show Jimbo button

btnJimbo.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
    cardJimbo.classList.remove("hiddenSection");
    cardMayor.classList.add("hiddenSection");
    cardClive.classList.add("hiddenSection");
    cardBank.classList.add("hiddenSection");
    cardMystery.classList.add("hiddenSection");
});
// show mayor button
btnMayor.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
    cardJimbo.classList.add("hiddenSection");
    cardMayor.classList.remove("hiddenSection");
    cardClive.classList.add("hiddenSection");
    cardBank.classList.add("hiddenSection");
    cardMystery.classList.add("hiddenSection");
});
// show professor clive button
btnClive.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
    cardJimbo.classList.add("hiddenSection");
    cardMayor.classList.add("hiddenSection");
    cardClive.classList.remove("hiddenSection");
    cardBank.classList.add("hiddenSection");
    cardMystery.classList.add("hiddenSection");
});

// show bank teller
btnBank.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
    cardJimbo.classList.add("hiddenSection");
    cardMayor.classList.add("hiddenSection");
    cardClive.classList.add("hiddenSection");
    cardBank.classList.remove("hiddenSection");
    cardMystery.classList.add("hiddenSection");
});
//  show mystery cat
btnMystery.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.remove("hiddenSection");
    sectionKittizens.classList.add("hiddenSection");
    cardJimbo.classList.add("hiddenSection");
    cardMayor.classList.add("hiddenSection");
    cardClive.classList.add("hiddenSection");
    cardBank.classList.add("hiddenSection");
    cardMystery.classList.remove("hiddenSection");
});

// show kittizens
btnKittizens.addEventListener("click", function () {
    sectionFinn.classList.add("hiddenSection");
    sectionNPCs.classList.add("hiddenSection");
    sectionKittizens.classList.remove("hiddenSection");
});
