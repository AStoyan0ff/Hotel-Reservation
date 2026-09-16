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

changeContent('guest-details-form-content');

document.querySelector('#new-reservation').addEventListener('click', cleanData);
document.querySelector('#guest-details-back-btn').addEventListener('click', fillRoomForm);
document.querySelector('#guest-details-next-btn').addEventListener('click', getPersonalData);

function cleanData(event) {
    event.preventDefault();
    changeContent('search-form-content');
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

    if (name === '' || phone === '' || email === '') {
        return;
    }

    reservation.name = name;
    reservation.phone = phone;
    reservation.email = email;

    console.log(reservation);

    changeContent('confirm-reservation-content');
    fillConfirmReservationData(reservation);
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