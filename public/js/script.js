document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll('.body-row');
    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            const planId = row.getAttribute('data-plan-id');

            window.location.href = `/myplans/${planId}`;
        });
    });
});