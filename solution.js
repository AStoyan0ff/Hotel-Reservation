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
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));

    const content = document.querySelector(`.${className}`);

    if (content !== null) {
        content.classList.remove('hidden');
    }
}

changeContent('confirm-reservation-content');

document.querySelector('#confirm-back-btn').addEventListener('click', getBackToPersonalData);
document.querySelector('#confirm-reservation').addEventListener('click', showThanksPage);
document.querySelector('#new-reservation').addEventListener('click', cleanData);

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
    changeContent('search-form-content');
}