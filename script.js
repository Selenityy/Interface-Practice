// drop down menu
let menuBar = document.getElementById("menuBar");
let visible = false;

const dropDown = () => {
  let elements = document.querySelectorAll(".ulOptions, .menuImg, .menuText");
  if (visible === false) {
    //can't see it
    elements.forEach((element) => element.classList.remove("hide"));
    elements.forEach((element) => element.classList.add("visible"));
    visible = true;
  } else {
    // can see it
    elements.forEach((element) => element.classList.remove("visible"));
    elements.forEach((element) => element.classList.add("hide"));
    visible = false;
  }
};

menuBar.addEventListener("click", dropDown);

// image slider
const imageUrls = [
  "https://raw.githubusercontent.com/Selenityy/Interface-Practice/main/assets/sunrise.png",
  "https://raw.githubusercontent.com/Selenityy/Interface-Practice/main/assets/daytime.png",
  "https://raw.githubusercontent.com/Selenityy/Interface-Practice/main/assets/sunset.png",
  "https://raw.githubusercontent.com/Selenityy/Interface-Practice/main/assets/sunset2.png",
  "https://raw.githubusercontent.com/Selenityy/Interface-Practice/main/assets/night.png",
];

const images = [];
for (let i = 0; i < imageUrls.length; i++) {
  const image = new Image();
  image.src = imageUrls[i];
  images.push(image);
}

let index = Math.floor(Math.random() * 5);
let maxIndex = imageUrls.length - 1;
let imageElement = document.getElementById("image");
imageElement.src = images[index].src;

const rightArrowOnClick = () => {
  if (index >= 0 && index < 4) {
    index++;
    imageElement.src = images[index].src;
  } else if (index === 4) {
    index = 0;
    imageElement.src = images[index].src;
  }
};

const leftArrowOnClick = () => {
  if (index <= 4 && index > 0) {
    index--;
    imageElement.src = images[index].src;
  } else if (index === 0) {
    index = 4;
    imageElement.src = images[index].src;
  }
};

const circleOnClick = () => {
  console.log("circle");
};

let prev = document.getElementById("previous");
prev.addEventListener("click", leftArrowOnClick);

let next = document.getElementById("next");
next.addEventListener("click", rightArrowOnClick);

const circles = [
  document.getElementById("circle1"),
  document.getElementById("circle2"),
  document.getElementById("circle3"),
  document.getElementById("circle4"),
  document.getElementById("circle5"),
];
circles.forEach((circle) => {
  circle.addEventListener("click", circleOnClick);
});
