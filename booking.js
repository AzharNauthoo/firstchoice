document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    let startDate = urlParams.get("startDate");
    let returnDate = urlParams.get("returnDate");
    let startLocation = urlParams.get("startLocation");
    let returnLocation = urlParams.get("returnLocation");
    let carMake = urlParams.get("hiddenField");
    let babyseat = urlParams.get("babySeat");

    console.log(startDate + " " + returnDate + " " + startLocation + " " + returnLocation + " " + carMake + " " + babyseat);


    let newCarId = urlParams.get('carID');
    if (newCarId != "" && newCarId != null) {
        showOnlySelectedCar2(newCarId);

    }
  
    setHiddenInputFields(startDate, returnDate, startLocation, returnLocation, carMake, babyseat);
    
    
});

function setHiddenInputFields(startDate, returnDate, startLocation, returnLocation, carMake, babyseat) {
    document.getElementById('startD').value = startDate;
    document.getElementById('returD').value = returnDate;
    document.getElementById('startL').value = startLocation;
    document.getElementById('returnL').value = returnLocation;
    document.getElementById('baby').value = babyseat;

    if (carMake != "") {
    document.getElementById('carBrand').value = carMake;
    }
}


function showOnlySelectedCar2(selectedCarId) {
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
}