//const { json } = require("stream/consumers");

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

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        
            
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.log(error))
} 

function UpdateUsers(updateUser){
    
    fetch(`${url}/1`, {
       method: "PUT",
       body: JSON.stringify(updateUser),
        headers:{"Content-type" : "application/json; charset=UTF-8"} ,
        
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.log(error))
}



const newUser = {
    name: "Reinaldo Ramos",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}

const updateUser = {
    name: "clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}



//addUser(newUser)
getUser();
getUsers();
UpdateUsers(updateUser, 3)
