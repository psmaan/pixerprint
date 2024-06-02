document.addEventListener('DOMContentLoaded', function () {
    var overviewSection = document.querySelector(".overview-landing");
    var ordersSection = document.querySelector(".orders-landing");
    var returnSection = document.querySelector(".returns-landing");
    var accountSection = document.querySelector(".account-section");
    var passwordSection = document.querySelector(".password-section");
    var addressSection = document.querySelector(".address-container");

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
});
