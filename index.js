"use strict";

const userUrl = 'http://localhost:3000/api/users';

function displayUsers() {
    loadUsers(userUrl).then(users => {
        usersToHTML(users.map(User.generateUser));
    }).catch(error => {
        console.error("Error al cargar usuarios:", error);
    });
}

let ximenaUser = new User("Ximena", "Ruis", "ximena.ruiz@iteso.mx", "BestPassword2", "1997-08-08", "M");

function addUser(user) {
    storeUser(userUrl, user, () => {
        console.log("Usuario agregado exitosamente");
        displayUsers();
    }, error => {
        console.error("Error al agregar usuario:", error);
    });
}

addUser(ximenaUser);

displayUsers();