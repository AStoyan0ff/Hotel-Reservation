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
    .querySelector('#guest-details-back-btn')
    .addEventListener('click', fillRoomForm);

document
    .querySelector('#guest-details-next-btn')
    .addEventListener('click', getPersonalData);

document
    .querySelector('#confirm-back-btn')
    .addEventListener('click', getBackToPersonalData);

document
    .querySelector('#confirm-reservation')
    .addEventListener('click', showThanksPage);

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

function fillRoomForm(event) {
    event.preventDefault();
    changeContent('search-result-form-content');
}

function getPersonalData(event) {
    event.preventDefault();

    const form = event.currentTarget.closest('form');
    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone-number').value.trim();
    const email = form.querySelector('#email').value.trim();

    const hasValidData =
        name !== '' &&
        phone !== '' &&
        email !== '';

    if (!hasValidData) {
        return;
    }

    reservation.name = name;
    reservation.phone = phone;
    reservation.email = email;

    console.log(reservation);

    fillConfirmReservationData(reservation);
    changeContent('confirm-reservation-content');
}

function fillConfirmReservationData(customReservation) {
    const reservationDetails = {
        '#guest-name': `Name: ${customReservation.name}`,
        '#guest-phone': `Phone Number: ${customReservation.phone}`,
        '#guest-email': `Email: ${customReservation.email}`,
        '#guest-room-type': `Room Type: ${customReservation.roomType}`,
        '#guest-data-in': `Date-in: ${customReservation.startDate}`,
        '#guest-data-out': `Date-out: ${customReservation.endDate}`
    };

    for (const [selector, text] of Object.entries(reservationDetails)) {
        const element = document.querySelector(selector);

        if (element !== null) {
            element.textContent = text;
        }
    }
}

function getBackToPersonalData(event) {
    event.preventDefault();
    changeContent('guest-details-form-content');
}

function showThanksPage(event) {
    event.preventDefault();
    changeContent('thank-you-content');
}

function cleanData(event) {
    event.preventDefault();

    Object.assign(reservation, {
        startDate: null,
        endDate: null,
        guestsCount: 0,
        roomType: null,
        name: null,
        phone: null,
        email: null
    });

    document
        .querySelectorAll('form')
        .forEach(form => form.reset());

    const rooms = document.querySelectorAll('.room-type');

    rooms.forEach(room => room.classList.remove('selected-room'));

    if (rooms.length > 0) {
        rooms[0].classList.add('selected-room');
    }

    changeContent('search-form-content');
}