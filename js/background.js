const images = [
    "image02.jpg",
    "image03.jpg",
    "image04.jpg",
    "image05.jpg",
    "image06.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);