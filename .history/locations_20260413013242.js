let showAllButton = document.querySelector("#showAllButton");
let showTownButton = document.querySelector("#showTownButton");
let showFishingButton = document.querySelector("#showFishingButton");
let showSpecialButton = document.querySelector("#showSpecialButton");

let townLocations = document.querySelector("#townLocations");
let fishingLocations = document.querySelector("#fishingLocations");
let specialLocations = document.querySelector("#specialLocations");

showAllButton.addEventListener("click", function () {
    townLocations.classList.remove("hiddenSection");
    fishingLocations.classList.remove("hiddenSection");
    specialLocations.classList.remove("hiddenSection");
});

showTownButton.addEventListener("click", function () {
    townLocations.classList.remove("hiddenSection");
    fishingLocations.classList.add("hiddenSection");
    specialLocations.classList.add("hiddenSection");
});

showFishingButton.addEventListener("click", function () {
    townLocations.classList.add("hiddenSection");
    fishingLocations.classList.remove("hiddenSection");
    specialLocations.classList.add("hiddenSection");
});

showSpecialButton.addEventListener("click", function () {
    townLocations.classList.add("hiddenSection");
    fishingLocations.classList.add("hiddenSection");
    specialLocations.classList.remove("hiddenSection");
});
