"use strict";

async function loadUsers(url) {
    let response = await fetch(url);
    if (response.status != 200) return[];
    let users = await response.json();
    return users;
}

function storeUser(url, user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            getXhrResponse(xhr, onSuccess, onError);
        }
    };

    xhr.send(JSON.stringify(user));
}

function putUser(url, user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            getXhrResponse(xhr, onSuccess, onError);
        }
    };

    xhr.send(JSON.stringify(user));
}

function deleteUser(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            getXhrResponse(xhr, onSuccess, onError);
        }
    };

    xhr.send();
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}