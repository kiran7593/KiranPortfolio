
const currentYear = new Date().getFullYear();

const footer = document.querySelector(".footer p");

if (footer) {
    footer.innerHTML = `&copy; ${currentYear} Kiran Persaud. All rights reserved.`;
}
