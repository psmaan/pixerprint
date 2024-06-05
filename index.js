document.addEventListener('DOMContentLoaded', function () {
    var overviewSection = document.querySelector(".overview-landing");
    var ordersSection = document.querySelector(".orders-landing");
    var returnSection = document.querySelector(".returns-landing");
    var accountSection = document.querySelector(".account-section");
    var passwordSection = document.querySelector(".password-section");
    var addressSection = document.querySelector(".address-container");

    var returnPageSection = document.querySelector(".return-order-page");

    var allSections = document.querySelectorAll(".main-landing > div");

    window.showOverview = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        overviewSection.style.display = "block";
    }

    window.showOrders = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        ordersSection.style.display = "block";
    }

    window.showReturns = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        returnSection.style.display = "block";
    }

    window.showAccounts = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        accountSection.style.display = "block";
    }

    window.showPassword = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        passwordSection.style.display = "block";
    }

    window.showAddress = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        addressSection.style.display = "block";
    }

    window.showReturnPage = function () {
        allSections.forEach(function (section) {
            section.style.display = "none";
        });
        returnPageSection.style.display = "block";
    }
});

// JavaScript to handle dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    // Function to show the dropdown
    function showDropdown(event) {
        // Prevent event from propagating to document click event listener
        event.stopPropagation();

        // Get all dropdown elements
        const dropdowns = document.querySelectorAll('.order-dropdown');

        // Hide all dropdowns except the one clicked
        dropdowns.forEach(dropdown => {
            if (dropdown !== event.target.nextElementSibling) {
                dropdown.style.transform = 'scaleY(0)';
            }
        });

        // Toggle the visibility of the clicked dropdown
        const dropdown = event.target.nextElementSibling;
        if (dropdown.style.transform === 'scaleY(1)') {
            dropdown.style.transform = 'scaleY(0)';
        } else {
            dropdown.style.transform = 'scaleY(1)';
        }
    }

    // Add event listeners to all images inside order-detail-image divs
    const images = document.querySelectorAll('.order-detail-image img, .address-dropdown img');
    images.forEach(image => {
        image.addEventListener('click', showDropdown);
    });

    // Add event listener to hide dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.order-detail-image')) {
            document.querySelectorAll('.order-dropdown').forEach(dropdown => {
                dropdown.style.transform = 'scaleY(0)';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to hide the address edit container
    function hideAddressEditor() {
        const addressEditorContainer = document.querySelector('.address-edit-container');
        addressEditorContainer.style.display = 'none';
    }

    function showAddressEditor() {
        const newaddressEditorContainer = document.querySelector('.address-edit-container');
        newaddressEditorContainer.style.display = 'flex';
    }

    // Add event listener to the cross-editor image
    const crossEditorImage = document.querySelector('.address-editor-header img');
    crossEditorImage.addEventListener('click', hideAddressEditor);

    const addressEditorImage = document.querySelector('.add-address');
    addressEditorImage.addEventListener('click', showAddressEditor);
});


