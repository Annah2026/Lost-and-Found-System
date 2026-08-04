//First DOM
const category = document.getElementById("category");
const otherCategoryBox = document.getElementById("otherCategoryBox");

category.addEventListener("change", function () {

    if (category.value === "Other") {
        otherCategoryBox.style.display = "block";
    } else {
        otherCategoryBox.style.display = "none";
    }
});
const description = document.getElementById("description");
const characterCount = document.getElementById("characterCount");

description.addEventListener("input", function () {
    characterCount.textContent = description.value.length;
});
// DOM 3 - Message for Lost or Found selection

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

// DOM 4 - Live preview of the item name

const itemName = document.getElementById("itemName");
const itemPreview = document.getElementById("itemPreview");

itemName.addEventListener("input", function () {

    if (itemName.value.trim() === "") {
        itemPreview.textContent = "No item entered";
    } else {
        itemPreview.textContent = itemName.value;
    }

});
});
