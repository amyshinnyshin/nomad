// -------------Variables ---------------//





document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll('.body-row');
    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            const planId = row.getAttribute('data-plan-id');

            window.location.href = `/myplans/${planId}`;
        });
    });
});



function addAnotherEvent(event) {
    event.preventDefault();

    let originalEvent = document.getElementById('original-event');
    let clone = originalEvent.cloneNode(true);

    clone.removeAttribute('id');

    let inputFields = clone.querySelectorAll('input, textarea');
    inputFields.forEach(function (input) {
        input.value = '';
    });

    let eventsContainer = document.querySelector('.events-container');
    eventsContainer.appendChild(clone);

    clone.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
}
