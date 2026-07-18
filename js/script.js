const button = document.getElementById("contact-button");

button.addEventListener("click", function() {
    alert("Thanks for visiting my portfolio!");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("form-message").textContent =
        "Thanks! Your message has been sent.";

});