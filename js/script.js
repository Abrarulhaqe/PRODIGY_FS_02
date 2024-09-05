// Function to confirm deletion
function confirmDelete() {
    return confirm("Are you sure you want to delete this employee?");
}

// Example: Alert when the form is submitted
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            alert("Form submitted successfully!");
        });
    }
});

// Example: Validate phone number input
function validatePhoneNumber(input) {
    const phonePattern = /^[0-9]{10}$/; // Simple regex for a 10-digit number
    if (!phonePattern.test(input.value)) {
        alert("Please enter a valid 10-digit phone number.");
        input.focus();
        return false;
    }
    return true;
}

// Attach validation to phone input field
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            validatePhoneNumber(phoneInput);
        });
    }
});