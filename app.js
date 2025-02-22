function scrollAndHighlightForm() {
    const formElement = document.getElementById('bookingForm');
    formElement.scrollIntoView({ behavior: 'smooth' });
    formElement.classList.add('highlight');
    setTimeout(() => {
        formElement.classList.remove('highlight');
    }, 2000);
}

function scrollToForm(carType, carMake, carID) {
    const bookingForm = document.getElementById('bookingForm');

    const hiddenField = document.getElementById('hiddenField');
    const newCarID = document.getElementById('carID');


    // Scroll to the form
    bookingForm.scrollIntoView({ behavior: 'smooth' });

    // Fill the dropdown and hidden field
   
    hiddenField.value = carMake;
    newCarID.value = carID;
}
function scrollToFormOnly() {
    const bookingForm = document.getElementById('bookingForm');
    // Scroll to the form
    bookingForm.scrollIntoView({ behavior: 'smooth' });

}

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();

        window.location.href = 'booking.html?' + queryString;
    });


function showAllCar() {
    let i = 1;
    let carElement;

    while ((carElement = document.getElementById(`car${i}`)) !== null) {
        carElement.classList.remove('d-none');
        i++;
    }

    const changeCarButton = document.getElementById('changeCarButton');
    changeCarButton.classList.add('d-none');
    const carTypeButtons = document.getElementById('carTypeButtons');
    carTypeButtons.classList.remove('d-none');
    const infoForm = document.getElementById('infoForm');
    infoForm.classList.add('d-none');
  
    const mainTitle = document.getElementById('mainTitle2');
    mainTitle.classList.remove('d-none');
    
    
}

function showEconomy() {
    const allCars = document.querySelectorAll('.col-md-3.col-sm-12.mt-3');
    allCars.forEach(car => {
        if (car.classList.contains('economy')) {
            car.classList.remove('d-none');
        } else {
            car.classList.add('d-none');
        }
    });
}

function showSedan() {
    const allCars = document.querySelectorAll('.col-md-3.col-sm-12.mt-3');
    allCars.forEach(car => {
        if (car.classList.contains('sedan')) {
            car.classList.remove('d-none');
        } else {
            car.classList.add('d-none');
        }
    });
}

function showFamily() {
    const allCars = document.querySelectorAll('.col-md-3.col-sm-12.mt-3');
    allCars.forEach(car => {
        if (car.classList.contains('family-car')) {
            car.classList.remove('d-none');
        } else {
            car.classList.add('d-none');
        }
    });
}

function showSUV() {
    const allCars = document.querySelectorAll('.col-md-3.col-sm-12.mt-3');
    allCars.forEach(car => {
        if (car.classList.contains('suv')) {
            car.classList.remove('d-none');
        } else {
            car.classList.add('d-none');
        }
    });
}
function showOnlySelectedCar(selectedCarId, carBrand) {
    const allCars = document.querySelectorAll('.col-md-3.col-sm-12.mt-3');
    allCars.forEach(car => {
        if (car.id === selectedCarId) {
            car.classList.remove('d-none');
        } else {
            car.classList.add('d-none');
        }
    });

    const changeCarButton = document.getElementById('changeCarButton');
    changeCarButton.classList.remove('d-none');
    const carTypeButtons = document.getElementById('carTypeButtons');
    carTypeButtons.classList.add('d-none');
    const infoForm = document.getElementById('infoForm');
    infoForm.classList.remove('d-none');

    const mainTitle = document.getElementById('mainTitle2');
    mainTitle.classList.add('d-none');

    // Hide the card if the viewport is less than 770px
    if (window.innerWidth < 770) {
        const selectedCar = document.getElementById(selectedCarId);
        selectedCar.classList.add('d-none');
    }

    setBrandToInput(carBrand);
}

function setBrandToInput(carBrand) {
    const carBrandInput = document.getElementById('carBrand');
    carBrandInput.value = carBrand;
}



function logFormValues() {
    const form = document.getElementById('infoForm').querySelector('form');
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    console.log(formValues);
    sendEmail(formValues);
}

function logTransferValues(){
    const form = document.getElementById('transferForm').querySelector('form');
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    console.log(formValues);
    sendEmailTransfer(formValues);
}

function validateAndSubmitTransfer() {
    const form = document.getElementById('transferForm').querySelector('form');
    const formData = new FormData(form);
    let isValid = true;

    // Check required fields
    form.querySelectorAll('input[required], select[required]').forEach((input) => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-danger'); // Highlight empty fields
        } else {
            input.classList.remove('border-danger');
        }
    });

    const errorMessage = document.getElementById('error-message');
    if (!isValid) {
        errorMessage.classList.remove('d-none');
        return;
    } else {
        errorMessage.classList.add('d-none');
    }

    // Show loading animation
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = document.getElementById('buttonText');
    const loadingSpinner = document.getElementById('loadingSpinner');

    buttonText.classList.add('d-none');
    loadingSpinner.classList.remove('d-none');

    // Simulate form submission delay
    setTimeout(() => {
        logTransferValues();
    }, 1000);
}

function sendEmailTransfer(formValues) {

    const email = formValues.email;

    const name = formValues.fullName;

    const phone = formValues.mobileNumber;

    const vehicleType = formValues.vehicleType;

    const arrivalDate = formValues.arrivalDate;

    const departureDate = formValues.departureDate;

    const arrivalTime = formValues.flightArrivalTime;

    const departureTime = formValues.departureTime;

    const hotelName = formValues.hotelName;

    const flightArrivalNumber = formValues.flightArrivalNumber;

    const numPassengers = formValues.numPassengers;

    const babySeat = formValues.babySeat;


    let params = {
        carType: vehicleType,
        numPax: numPassengers,
        arrivalDate: arrivalDate,
        flightNum: flightArrivalNumber,
        arrivalTime: arrivalTime,
        depDate: departureDate,
        DepTime: departureTime,
        hotel: hotelName,
        email: email,
        name: name,
        phone: phone,
        babyseat: babySeat
    }
    emailjs.send('service_gsfxkrj', 'template_1wbijlf', params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        window.location.href = 'thankyou.html';
    }, function(error) {
       console.log('FAILED...', error);
    });


}



function sendEmail(formValues) {
    const email = formValues.email;
    const name = formValues.fullName;
    const phone = formValues.whatsapp;
    const carBrand = formValues.carBrand;
    const startDate = formValues.startD;
    const returnD= formValues.returD;
    const startL = formValues.startL;
    const returnL = formValues.returnL;
    const babyseat = formValues.babyseat;
    const add = formValues.additionalInfo;
    const numPax = formValues.numberOfPassengers;
    const bigL = formValues.bigLuggage;
    const smallL = formValues.smallLuggage;
    const flightNum = formValues.flightNumber;

    let params = {
        carBrand : carBrand,
        numPax : numPax,
        startD: startDate,
        returnD: returnD,
        startL: startL,
        returnL: returnL,
        name: name,
        flightNum: flightNum,
        bigL: bigL,
        smallL: smallL,
        phoneNum: phone,
        email: email,
        babyseat: babyseat, 
        add: add
    }

    emailjs.send('service_gsfxkrj', 'template_yvk08kv', params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        window.location.href = 'thankyou.html';
    }, function(error) {
       console.log('FAILED...', error);
    });

   
}


function validateAndSubmit() {
    const form = document.getElementById('infoForm').querySelector('form');
    const formData = new FormData(form);
    let isValid = true;

    // Check required fields (excluding additionalInfo and babyseat)
    form.querySelectorAll('input[required]').forEach((input) => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-danger'); // Highlight missing fields
        } else {
            input.classList.remove('border-danger');
        }
    });

    const errorMessage = document.getElementById('error-message');
    if (!isValid) {
        errorMessage.classList.remove('d-none');
        return;
    } else {
        errorMessage.classList.add('d-none');
    }

    // Show loading animation
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = document.getElementById('buttonText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    buttonText.classList.add('d-none');
    loadingSpinner.classList.remove('d-none');

    // Simulate form submission delay
    setTimeout(() => {
        logFormValues();
    }, 1000);
}


