const url = "http://localhost:5500/api";

function getUsers() {
    fetch(url)
    .then(response => (response.json()))
    .then(data => renderAPIResult.textContent = JSON.stringify(data) )
    .catch(error => console.log(error))
}

function getUser() {
    fetch(`${url}/1`)
.then(response => response.json())
    .then(data => {
        return renderAPIResult.textContent = JSON.stringify(data.name)
    })
    .catch(error => console.log(error))
}

getUser();
getUsers();
