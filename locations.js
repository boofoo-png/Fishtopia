let filterButtons = document.querySelectorAll(".filter-button");
let locationSections = document.querySelectorAll(".sectionContainer");
let selectedSection;

filterButtons.forEach(function (filterButton) {
    filterButton.addEventListener("click", function () {
        let associatedElement = this.dataset.associatedElement;

        if (associatedElement === "all") {
            locationSections.forEach(function (section) {
                section.classList.remove("hiddenSection");
            });

            selectedSection = null;
        } else {
            locationSections.forEach(function (section) {
                section.classList.add("hiddenSection");
            });

            selectedSection = document.querySelector(associatedElement);
            selectedSection.classList.remove("hiddenSection");
        }
    });
});
