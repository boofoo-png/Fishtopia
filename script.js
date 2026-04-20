let filterButtons = document.querySelectorAll(".filter-button");
let locationSections = document.querySelectorAll(".section-container");

filterButtons.forEach(function (filterButton) {
    filterButton.addEventListener("click", function () {
        let associatedElement = this.dataset.associatedElement;

        if (associatedElement === "all") {
            locationSections.forEach(function (section) {
                section.classList.remove("hidden-section");
            });
            document
                .querySelectorAll(".character-container")
                .forEach(function (card) {
                    card.classList.remove("hidden-section");
                });
            // intial rendering
                selectedSection = null;
        } else {
            // Hide all sections
            locationSections.forEach(function (section) {
                section.classList.add("hidden-section");
            });
            document
                .querySelectorAll(".character-container")
                .forEach(function (card) {
                    card.classList.add("hidden-section");
                });

            // Show the matched element
            selectedSection = document.querySelector(associatedElement);
            selectedSection.classList.remove("hidden-section");

            // Also unhide its parent section-container if it has one
            let parentSection = selectedSection.closest(".section-container");
            if (parentSection) {
                parentSection.classList.remove("hidden-section");
            }
        }
    });
});
