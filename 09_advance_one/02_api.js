/*
    0 -> UNSENT Client has been created. open() not called yet.
    1 -> OPENED open() has been called.
    2 -> HEADERS_RECEIVED send() has been called, and headers and status are
    available.
    3 -> LOADING Downloading; responseText holds partial data.
    4 -> DONE The operation is complete.
*/

const requestUrl = 'https://api.github.com/users/R3MODAS';
const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);

xhr.open('GET', requestUrl);
// console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);

    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);
        const card = document.querySelector(".card");
        card.innerHTML = `
            <img src=${data?.avatar_url} class="card-img" />
            <h2>${data?.name}</h2>
            <p class="card-follow">Followers:${data?.followers}</p>
            <p>${data?.bio || "No bio provided"}</p>
        `
    }
}
xhr.send()