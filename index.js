
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

