
console.log("Medcom script.js loaded");
(function () {
    emailjs.init("Ymv-3RMFVNu5BkZaS");
})();

document.getElementById("enquiry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_h1eh0bn",
        "template_ilfhgxp",
        this
    )
    .then(function() {
        alert("Thank you! Your enquiry has been submitted successfully.");
        document.getElementById("enquiry-form").reset();
    }, function(error) {
        alert("Failed to send enquiry. Please try again.");
        console.log(error);
    });
});



(function () {
    emailjs.init("Ymv-3RMFVNu5BkZaS");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_h1eh0bn",
        "template_ilfhgxp",
        this
    )
    .then(function() {
        alert("Thank you for contacting Medom! Your enquiry has been submitted successfully.");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send enquiry. Please try again.");
        console.log(error);
    });
});