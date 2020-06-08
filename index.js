
function Apod(id) {
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'container');
    this.container.setAttribute('id', this.id);
    this.addElement = function () {
        let element = document.createElement('div');
        element.classList.add('date');
        if (this.date === undefined) {
            this.date = new Date();
            fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm')
                .then(response => response.json())
                .then(data => this.renderPage(data));

        } else {
            let date = this.yyyymmdd(this.date.setDate(this.date.getDate() - 1));
            fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm&date=' + date)
                .then(response => response.json())
                .then(data => this.renderPage(data));
        }

        element.innerText = this.date;
        this.container.append(element);
    };

    this.renderPage = function (data) {
        let pageContainer = document.createElement('div');
        pageContainer.classList.add('main_container');
        this.container.append(pageContainer);

        let title = document.createElement('h1');
        title.innerText = data.title;
        pageContainer.append(title);

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
        pageContainer.append(image);

        let explataionText = document.createElement('p');
        explataionText.classList.add('explanation');
        explataionText.innerText = data.explanation;
        pageContainer.append(explataionText);

        if (data.copyright) {
            let copyright = document.createElement('span');
            copyright.innerText = data.copyright;
            pageContainer.append(copyright);
        }
    };

    this.yyyymmdd = function () {
        var now = this.date;
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var mm = m < 10 ? '0' + m : m;
        var dd = d < 10 ? '0' + d : d;
        return '' + y + '-' + mm + '-' + dd;
    };

    this.addElement();
    document.body.classList.remove('spinner');
    body.append(this.container);
}

const apod = new Apod('apod');






///function pictureOfTheDay() {

///document.body.classList.add('spinner');


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

