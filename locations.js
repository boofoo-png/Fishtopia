// get all filter buttons
let filterButtons = document.querySelectorAll(".filter-button");

// get all main content sections
let locationSections = document.querySelectorAll(".section-container");

// keep track of the currently selected section/ button (if any)
let selectedSection;

// loop through each filter button
filterButtons.forEach(function (filterButton) {
    filterButton.addEventListener("click", function () {
        // read the data attribute from the button that got clicked
        let associatedElement = this.dataset.associatedElement;

        // if user clicks "all", show every section listed
        if (associatedElement === "all") {
            locationSections.forEach(function (section) {
                section.classList.remove("hidden-section");
            });

            selectedSection = null;
        } else {
            // first hide all sections
            locationSections.forEach(function (section) {
                section.classList.add("hidden-section");
            });

            // then show only the selected section
            selectedSection = document.querySelector(associatedElement);
            selectedSection.classList.remove("hidden-section");
        }
    });
});
