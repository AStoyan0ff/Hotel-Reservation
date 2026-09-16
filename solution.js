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

changeContent('search-result-form-content');

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

function fillSearchForm(event) {
    event.preventDefault();

    changeContent('search-form-content');

    const checkInInput = document.querySelector('#check-in');
    const checkOutInput = document.querySelector('#check-out');
    const peopleInput = document.querySelector('#people');

    if (checkInInput && checkOutInput && peopleInput) {
        checkInInput.value = reservation.startDate;
        checkOutInput.value = reservation.endDate;
        peopleInput.value = reservation.guestsCount;
    }
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

    if (!selectedRoom) {
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