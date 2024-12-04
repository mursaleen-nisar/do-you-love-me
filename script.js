const title = document.querySelector('.title');
const subTitle = document.querySelector('.sub-title');
const video = document.querySelector('.video');
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
let btnClicked = 0;

const getRandomPosition = (element) => {
    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the dimensions of the element
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    

    const maxX = viewportWidth - elementWidth;
    const maxY = viewportHeight - elementHeight;

    // Generate random x and y within the allowed range
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    return { x, y };
};

noBtn.addEventListener('click', () => {
    btnClicked++;

    if (btnClicked === 1) {
        title.textContent = 'Please think again!';
        subTitle.textContent = 'Itni jldii na matt bolo 😥';
        video.src = './assets/2.mp4';
    } else if (btnClicked === 2) {
        title.textContent = 'Ek aur baar sock lo!';
        subTitle.textContent = 'Kyu aisa kr rhe ho plz maan jao 😭';
        video.src = './assets/3.mp4';
    } else if (btnClicked === 3) {
        title.textContent = 'Baby maan jaona kitna bhav khaoge';
        subTitle.textContent = 'Bhut glt baat hai yrr 🥺';
        video.src = './assets/4.mp4';
    } else if (btnClicked === 4) {
        noBtn.style.position = 'absolute';
        noBtn.style.top = getRandomPosition(noBtn).y + 'px';
        noBtn.style.left = getRandomPosition(noBtn).x + 'px';
    }
});

noBtn.addEventListener('mouseover', () => {
    if(btnClicked >= 4) {
        noBtn.style.top = getRandomPosition(noBtn).y + 'px';
        noBtn.style.left = getRandomPosition(noBtn).x + 'px';
    }
});

const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

if (isMobile()) {
    noBtn.addEventListener('touchstart', () => {
        if (btnClicked >= 4) {
            noBtn.style.top = getRandomPosition(noBtn).y + 'px';
            noBtn.style.left = getRandomPosition(noBtn).x + 'px';
        }
    });
}

yesBtn.addEventListener('click', () => {
    title.textContent = 'Yayyy! Thank you so much';
    subTitle.textContent = 'I love you tooooooo 😘';
    video.src = './assets/5.mp4';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});