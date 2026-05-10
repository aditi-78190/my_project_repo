document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Page refresh hone se rokne ke liye

        // Form values nikaalna
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Ek chhota sa success effect
        const submitBtn = document.querySelector('.btn-submit');
        submitBtn.innerText = "Processing...";
        submitBtn.style.opacity = "0.7";

        setTimeout(() => {
            alert(`Thank you, ${name}! Your registration is successful. A confirmation email has been sent to ${email}.`);
            
            // Form reset karein
            form.reset();
            submitBtn.innerText = "Confirm Registration";
            submitBtn.style.opacity = "1";
        }, 1500);
    });
});