"use strict";


/* =========================================================
   FEATURE 1
   CONTACT FORM VALIDATION AND PREVIEW
   ========================================================= */

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {

    // Prevent the browser from reloading the page
    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const topic =
        document.getElementById("topic").value;

    const message =
        document.getElementById("message").value.trim();


    // Validate name
    if (name === "") {

        formFeedback.textContent =
            "Please enter your name.";

        return;
    }


    // Validate message
    if (message === "") {

        formFeedback.textContent =
            "Please enter your message.";

        return;
    }


    // Validate email format
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formFeedback.textContent =
            "Please enter a valid email address.";

        return;
    }


    // Display local validation preview
    formFeedback.textContent =
        "Your data was validated successfully. " +
        "Name: " + name +
        " | Email: " + email +
        " | Topic: " + topic +
        " | Message: " + message;
});



/* =========================================================
   FEATURE 2
   EXPANDABLE PROJECT DETAILS
   ========================================================= */

const detailButtons =
    document.querySelectorAll(".details-button");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const details =
            button.nextElementSibling;


        if (details.hidden) {

            details.hidden = false;

            button.textContent =
                "Hide Details";

            button.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            details.hidden = true;

            button.textContent =
                "Show Details";

            button.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});



/* =========================================================
   FEATURE 3
   PHOTO GALLERY VIEWER
   ========================================================= */

const photos = [

    {
        src: "photo1.jpeg",
        alt: "Hope Lishiko personal photo",
        caption: "Photo 1 - My personal photo."
    },

    {
        src: "picture.jpeg",
        alt: "Photo representing my student life",
        caption: "Photo 2 - A photo representing my student life."
    },

    {
        src: "photo2.jpeg",
        alt: "Photo representing a day in my life",
        caption: "Photo 3 - A photo representing a day in my life."
    }

];


let currentPhoto = 0;


const galleryImage =
    document.getElementById("galleryImage");

const galleryCaption =
    document.getElementById("galleryCaption");

const previousPhoto =
    document.getElementById("previousPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");


function displayPhoto(index) {

    galleryImage.src =
        photos[index].src;

    galleryImage.alt =
        photos[index].alt;

    galleryCaption.textContent =
        photos[index].caption;


    // Disable Previous at first photo
    previousPhoto.disabled =
        index === 0;


    // Disable Next at last photo
    nextPhoto.disabled =
        index === photos.length - 1;
}


previousPhoto.addEventListener("click", function () {

    if (currentPhoto > 0) {

        currentPhoto--;

        displayPhoto(currentPhoto);
    }
});


nextPhoto.addEventListener("click", function () {

    if (currentPhoto < photos.length - 1) {

        currentPhoto++;

        displayPhoto(currentPhoto);
    }
});


displayPhoto(currentPhoto);



/* =========================================================
   FEATURE 4
   PROJECT SEARCH / FILTER
   ========================================================= */

const projectSearch =
    document.getElementById("projectSearch");

const resetProjects =
    document.getElementById("resetProjects");

const projectMessage =
    document.getElementById("projectMessage");

const projectCards =
    document.querySelectorAll(".project-card");


function filterProjects() {

    const searchText =
        projectSearch.value
            .trim()
            .toLowerCase();


    let matchingProjects = 0;


    projectCards.forEach(function (card) {

        const projectText =
            card.textContent.toLowerCase();


        if (projectText.includes(searchText)) {

            card.style.display = "block";

            matchingProjects++;

        } else {

            card.style.display = "none";
        }
    });


    if (searchText === "") {

        projectMessage.textContent =
            "Showing all projects.";

    } else if (matchingProjects === 0) {

        projectMessage.textContent =
            "No projects or skills match your search.";

    } else {

        projectMessage.textContent =
            matchingProjects +
            " project(s) found.";
    }
}


projectSearch.addEventListener(
    "input",
    filterProjects
);


resetProjects.addEventListener(
    "click",
    function () {

        projectSearch.value = "";

        projectCards.forEach(
            function (card) {

                card.style.display =
                    "block";
            }
        );

        projectMessage.textContent =
            "Showing all projects.";
    }
);



/* =========================================================
   FEATURE 5
   LIGHT / DARK THEME SWITCH
   ========================================================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeButton.textContent =
                "Switch to Light Mode";

        } else {

            themeButton.textContent =
                "Switch to Dark Mode";
        }
    }
);



/* =========================================================
   FEATURE 6
   STUDY HOURS CALCULATOR
   ========================================================= */

const studyForm =
    document.getElementById("studyForm");

const studyResult =
    document.getElementById("studyResult");


studyForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const hoursPerDay =
            document.getElementById(
                "hoursPerDay"
            ).value.trim();


        const daysPerWeek =
            document.getElementById(
                "daysPerWeek"
            ).value.trim();


        // Check for blank values
        if (
            hoursPerDay === "" ||
            daysPerWeek === ""
        ) {

            studyResult.textContent =
                "Please enter both hours per day and days per week.";

            return;
        }


        const hours =
            Number(hoursPerDay);

        const days =
            Number(daysPerWeek);


        // Check for invalid numbers
        if (
            isNaN(hours) ||
            isNaN(days)
        ) {

            studyResult.textContent =
                "Please enter valid numbers.";

            return;
        }


        // Hours must be greater than zero
        if (hours <= 0) {

            studyResult.textContent =
                "Hours per day must be greater than 0.";

            return;
        }


        // Days must be between 1 and 7
        if (
            days < 1 ||
            days > 7
        ) {

            studyResult.textContent =
                "Days per week must be between 1 and 7.";

            return;
        }


        const totalHours =
            hours * days;


        studyResult.textContent =
            "Your planned study time is " +
            totalHours +
            " hours per week.";
    }
);



/* =========================================================
   FEATURE 7
   MOBILE NAVIGATION
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


menuButton.addEventListener(
    "click",
    function () {

        const isOpen =
            mainNav.classList.toggle(
                "mobile-open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        if (isOpen) {

            menuButton.textContent =
                "✕ Close Menu";

        } else {

            menuButton.textContent =
                "☰ Menu";
        }
    }
);



/* Close the mobile menu when a link is clicked */

const navLinks =
    document.querySelectorAll(
        "#mainNav a"
    );


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            mainNav.classList.remove(
                "mobile-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent =
                "☰ Menu";
        }
    );
});