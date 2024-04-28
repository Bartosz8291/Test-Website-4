document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('TestServer.php')
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseContainer').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => {
        console.error('Błąd podczas wysyłania żądania Fetch:', error);
    });
});
