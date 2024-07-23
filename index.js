document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    if (name && phone && date) {
        alert(`Appointment made successfully for ${name} on ${date}.`);
    } else {
        alert('Please fill out all fields.');
    }
});
