// ARRAY

const categories = [
    "Electronics",
    "Documents",
    "Clothing",
    "Accessories",
    "Other"
];

// OBJECT


const report = {
    fullName: "",
    email: "",
    reportType: "",
    itemName: "",
    category: "",
    location: "",
    itemDate: "",
    description: ""
};

// REUSABLE FUNCTIONS

// Function 1 - Character Counter
function updateCharacterCount(text) {
    return text.length;
}

// Function 2 - Item Preview
function updateItemPreview(text) {
    if (text.trim() === "") {
        return "No item entered";
    }
    return text;
}

// DOM 1 - Show/Hide Other Category

const category = document.getElementById("category");
const otherCategoryBox = document.getElementById("otherCategoryBox");

category.addEventListener("change", function () {

    if (category.value === "Other") {
        otherCategoryBox.style.display = "block";
    } else {
        otherCategoryBox.style.display = "none";
    }

});

// DOM 2 - Character Counter

const description = document.getElementById("description");
const characterCount = document.getElementById("characterCount");

description.addEventListener("input", function () {
    characterCount.textContent = updateCharacterCount(description.value);
});

// DOM 3 - Message fo the Lost or Found selection

const reportTypes = document.querySelectorAll('input[name="report_type"]');
const reportTypeMessage = document.getElementById("reportTypeMessage");

reportTypes.forEach(function (type) {

    type.addEventListener("change", function () {

        if (type.value === "Lost") {
            reportTypeMessage.textContent = "We hope your item is found soon.";
        } else if (type.value === "Found") {
            reportTypeMessage.textContent = "Thank you for helping return an item.";
        }

    });

});

// DOM 4 - Live preview of the item

const itemName = document.getElementById("itemName");
const itemPreview = document.getElementById("itemPreview");

itemName.addEventListener("input", function () {
    itemPreview.textContent = updateItemPreview(itemName.value);
});
// DOM 5 - Form Validation and Submit Event

const reportForm = document.getElementById("reportForm");
const formMessage = document.getElementById("formMessage");

reportForm.addEventListener("submit", function (event) {

    formMessage.textContent = "";

    // Full Name validation
    if (document.getElementById("fullName").value.trim() === "") {
        event.preventDefault();
        formMessage.textContent = "Please enter your full name.";
        return;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();

    if (email === "" || !email.includes("@")) {
        event.preventDefault();
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Report Type validation
    const reportType = document.querySelector('input[name="report_type"]:checked');

    if (!reportType) {
        event.preventDefault();
        formMessage.textContent = "Please select Lost or Found.";
        return;
    }

    // Category validation
    if (category.value === "") {
        event.preventDefault();
        formMessage.textContent = "Please select a category.";
        return;
    }

    // Location validation
    if (document.getElementById("location").value.trim() === "") {
        event.preventDefault();
        formMessage.textContent = "Please enter the location.";
        return;
    }

    // Date validation
    if (document.getElementById("itemDate").value === "") {
        event.preventDefault();
        formMessage.textContent = "Please select the date.";
        return;
    }

    // Item Name validation
    if (itemName.value.trim() === "") {
        event.preventDefault();
        formMessage.textContent = "Please enter the item name.";
        return;
    }

    // Description validation
    if (description.value.trim() === "") {
        event.preventDefault();
        formMessage.textContent = "Please enter the item description.";
        return;
    }

    formMessage.textContent = "Form submitted successfully.";

});