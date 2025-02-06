function scrollAndHighlightForm() {
    const formElement = document.getElementById('bookingForm');
    formElement.scrollIntoView({ behavior: 'smooth' });
    formElement.classList.add('highlight');
    setTimeout(() => {
        formElement.classList.remove('highlight');
    }, 2000);
}

function scrollToForm(carType, carMake) {
    const bookingForm = document.getElementById('bookingForm');
    const carTypeDropdown = document.getElementById('carType');
    const hiddenField = document.getElementById('hiddenField');

    // Scroll to the form
    bookingForm.scrollIntoView({ behavior: 'smooth' });

    // Fill the dropdown and hidden field
    carTypeDropdown.value = carType;
    hiddenField.value = carMake;
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    window.location.href = 'booking.html?' + queryString;
});