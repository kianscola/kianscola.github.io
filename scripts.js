document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
