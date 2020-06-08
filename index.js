
function Apod(id) {
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'container');
    this.container.setAttribute('id', this.id);
    this.addElement = function () {
        if (this.date === undefined) {
            this.date = new Date();
            fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm')
                .then(response => response.json())
                .then(data => renderPage(data));

        } else {
            this.date = yyyymmdd();
            fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm')
                .then(response => response.json())
                .then(data => renderPage(data));
        }

    };
    this.addElement();
    body.append(this.container);
}

const apod = new Apod('apod');


function yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + y + '-' + mm + '-' + dd;
}



///function pictureOfTheDay() {

///document.body.classList.add('spinner');

function renderPage(data) {
    let body = document.body;

    let container = document.createElement('div');
    container.classList.add('container');
    body.append(container);

    let title = document.createElement('h1');
    title.innerText = data.title;
    container.append(title);

    let image = document.createElement('div');
    image.classList.add('image');
    if (data.media_type === 'video') {
        let video = document.createElement('iframe');
        video.setAttribute('src', data.url);
        video.setAttribute('width', '420');
        video.setAttribute('height', '300');
        image.append(video);
    } else {
        let picture = document.createElement('img');
        picture.setAttribute('src', data.hdurl);
        picture.setAttribute('id', 'picture');
        image.append(picture);
    }
    container.append(image);

    let explataionText = document.createElement('p');
    explataionText.classList.add('explanation');
    explataionText.innerText = data.explanation;
    container.append(explataionText);

    if (data.copyright) {
        let copyright = document.createElement('span');
        copyright.innerText = data.copyright;
        container.append(copyright);
    }
    body.classList.remove('spinner');
};
///}





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

