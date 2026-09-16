let reservation = {

    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));

    if (document.querySelector(`.${className}`) != null) {
        document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

changeContent('search-form-content');

document.querySelector('#search-form-button').addEventListener('click', searchFormData);
document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));

function cleanData(e) {
    changeContent('search-form-content');
}

function searchFormData(event) {
    event.preventDefault();

    const form = event.currentTarget.closest('form');
    const checkIn = form.querySelector('#check-in').value;
    const checkOut = form.querySelector('#check-out').value;
    const people = form.querySelector('#people').value;

    const hasValidData =
        checkIn !== '' &&
        checkOut !== '' &&
        people !== '' &&
        new Date(checkIn) <= new Date(checkOut);

    if (!hasValidData) {
        return;
    }

    reservation.startDate = checkIn;
    reservation.endDate = checkOut;
    reservation.guestsCount = Number(people);

    console.log(reservation);
    changeContent('search-result-form-content');
}
