
document.querySelector('.container').classList.add('spinner');

fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm')
    .then(response => response.json())
    .then(data => {
        let title = document.getElementById('title');
        title.innerText = data.title;
        let picture = document.getElementById('picture');
        picture.src = data.hdurl;
        let explataionText = document.getElementById('explanation_text');
        explataionText.innerText = data.explanation;
        let a = document.getElementById('copyright');
        a.innerText = data.copyright;
        document.querySelector('.container').classList.remove('spinner');
    });

/*document.querySelector('.container').classList.add('spinner');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm');

xhr.responseType = 'json';

xhr.send();

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        document.querySelector('.container').classList.remove('spinner');
    }

};

xhr.onload = function () {
    let data = xhr.response;
    let title = document.getElementById('title');
    title.innerText = data.title;
    let picture = document.getElementById('picture');
    picture.src = data.hdurl;
    let explataionText = document.getElementById('explanation_text');
    explataionText.innerText = data.explanation;
    let a = document.getElementById('copyright');
    a.innerText = data.copyright;
};*/

