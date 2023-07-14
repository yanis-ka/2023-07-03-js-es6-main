function sessionUserNameLog(){
    const username = document.getElementById('sessionUser');
    console.log(username.value);
    if(username.value !== ''){
        sessionStorage.setItem('username', username.value);
        document.getElementById('usernameLogged').innerHTML = username.value;
        username.value = '';
    }
}

function sessionCheckUserName(){
    if(username = sessionStorage.getItem('username')){
        document.getElementById('usernameLogged').innerHTML = username;
    }
}

function sessionDeleteUsername(){
    sessionStorage.removeItem('username');
    document.getElementById('usernameLogged').innerHTML = '';
}

function sessionClearUsername(){
    sessionStorage.clear();
    document.getElementById('usernameLogged').innerHTML = '';
}

function localUserNameLog(){
    let username = document.getElementById('localUser');
    console.log(username.value);
    if(username.value !== ''){
        localStorage.setItem('username', username.value);
        document.getElementById('usernameLocalLogged').innerHTML = username.value;
        username.value = '';
    }
}

function localCheckUserName(){
    if(username = localStorage.getItem('username')){
        document.getElementById('usernameLocalLogged').innerHTML = username;
    }
}

function localDeleteUsername(){
    localStorage.removeItem('username');
    document.getElementById('usernameLocalLogged').innerHTML = '';
}

function localClearUsername(){
    localStorage.clear();
    document.getElementById('usernameLocalLogged').innerHTML = '';
}

let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getMonth());
console.log(dateNow.toUTCString());
console.log(dateNow.getTime());
console.log(dateNow.setTime( dateNow.getTime() + (24 * 60 * 60 * 1000) ));
console.log(dateNow.toUTCString());

/* 
on utilisera par soucis de simplicité un age maximal 
pour le cookie plutôt qu'une date d'expiration 
*/

function checkCookie(){
    console.log('cookie(s) actuel(s)', document.cookie);
}

/**
 * 
 * @param {String} name - nom du cookie
 * @param {String} value - valeur du cookie
 * @returns
 * @param {Int} days - nombre de jours de vallidité du cookie
 */
function setCookie(name, value = '', days = -1){
    const maxAge = days * 24 * 60 * 60;
    const chaineCookie = `${name}=${value}; max-age=${maxAge}; path=/introduction; Samesite=Strict; secure`;
    document.cookie = chaineCookie;
    return true;
}

/**
 * 
 * @param {String} name 
 * @returns 
 */
function getCookie(name){
    const tabCookie = document.cookie.split('; ');
    //console.log(tabCookie);
    for(cookie of tabCookie){
        //console.log(cookie);
        let tabValue = cookie.split('=');
        //console.log(tabValue);
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

function logCookie(){
    let username = document.getElementById('cookieUsername');
    if(username.value !== ''){
        setCookie('username', username.value, 1);
        document.getElementById('CookieLogUsername').innerHTML = username.value;
        username.value = '';
    }
}

function cookieCheckUserName(){
    if(username = getCookie('username')){
        document.getElementById('CookieLogUsername').innerHTML = username;
    }
}

function unlogCookie(){
    setCookie('username');
    document.getElementById('CookieLogUsername').innerHTML = '';
}