const reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
};

function changeContent(className) {
    document
        .querySelectorAll('.custom-form')
        .forEach(div => div.classList.add('hidden'));

    const content = document.querySelector(`.${className}`);

    if (content !== null) {
        content.classList.remove('hidden');
    }
}

changeContent('search-form-content');

document
    .querySelector('#search-form-button')
    .addEventListener('click', searchFormData);

document
    .querySelector('#search-back-btn')
    .addEventListener('click', fillSearchForm);

document
    .querySelectorAll('.room-type')
    .forEach(room => room.addEventListener('click', selectRoomType));

document
    .querySelector('#search-next-btn')
    .addEventListener('click', findRoom);

document
    .querySelector('#new-reservation')
    .addEventListener('click', cleanData);

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

function fillSearchForm(event) {
    event.preventDefault();

    changeContent('search-form-content');

    document.querySelector('#check-in').value = reservation.startDate;
    document.querySelector('#check-out').value = reservation.endDate;
    document.querySelector('#people').value = reservation.guestsCount;
}

function selectRoomType(event) {
    document
        .querySelectorAll('.room-type')
        .forEach(room => room.classList.remove('selected-room'));

    event.currentTarget.classList.add('selected-room');
}

function findRoom(event) {
    event.preventDefault();

    const selectedRoom = document.querySelector('.selected-room h4');

    if (selectedRoom === null) {
        return;
    }

    reservation.roomType = selectedRoom.textContent;

    console.log(reservation);
    changeContent('guest-details-form-content');
}

function cleanData(event) {
    event.preventDefault();
    changeContent('search-form-content');
}