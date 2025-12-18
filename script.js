// Simple Cart System
let cart = [];
let totalAmount = 0;

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const productCard = button.parentElement;
        const name = productCard.querySelector("h3").innerText;
        const priceText = productCard.querySelector(".price").innerText;
        const price = parseInt(priceText.replace("₹", "").replace(",", ""));

        cart.push({ name, price });
        totalAmount += price;

        alert(`${name} added to cart!\nTotal: ₹${totalAmount}`);
    });
});

// Contact Form Validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.querySelector("input[type='text']").value.trim();
        const email = contactForm.querySelector("input[type='email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
}

// Optional: Show cart summary in console (for testing)
console.log("Cart System Initialized");
