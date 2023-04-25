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

const checkCircles = (index) => {
  if (index === 0) {
    let circle = document.getElementById("circle1");
    let circleNodes = document.querySelectorAll(
      "#circle2, #circle3, #circle4, #circle5"
    );
    circle.style.filter = "grayscale(1) invert(1)";
    circleNodes.forEach((node) => {
      node.style.filter = "grayscale(1) invert(50%)";
    });
    imageElement.src = images[index].src;
  } else if (index === 1) {
    let circle = document.getElementById("circle2");
    let circleNodes = document.querySelectorAll(
      "#circle1, #circle3, #circle4, #circle5"
    );
    circle.style.filter = "grayscale(1) invert(1)";
    circleNodes.forEach((node) => {
      node.style.filter = "grayscale(1) invert(50%)";
    });
    imageElement.src = images[index].src;
  } else if (index === 2) {
    let circle = document.getElementById("circle3");
    let circleNodes = document.querySelectorAll(
      "#circle1, #circle2, #circle4, #circle5"
    );
    circle.style.filter = "grayscale(1) invert(1)";
    circleNodes.forEach((node) => {
      node.style.filter = "grayscale(1) invert(50%)";
    });
    imageElement.src = images[index].src;
  } else if (index === 3) {
    let circle = document.getElementById("circle4");
    let circleNodes = document.querySelectorAll(
      "#circle1, #circle2, #circle3, #circle5"
    );
    circle.style.filter = "grayscale(1) invert(1)";
    circleNodes.forEach((node) => {
      node.style.filter = "grayscale(1) invert(50%)";
    });
    imageElement.src = images[index].src;
  } else if (index === 4) {
    let circle = document.getElementById("circle5");
    let circleNodes = document.querySelectorAll(
      "#circle1, #circle2, #circle3, #circle4"
    );
    circle.style.filter = "grayscale(1) invert(1)";
    circleNodes.forEach((node) => {
      node.style.filter = "grayscale(1) invert(50%)";
    });
    imageElement.src = images[index].src;
  }
};

const rightArrowOnClick = () => {
  if (index >= 0 && index < 4) {
    index++;
    imageElement.src = images[index].src;
    checkCircles(index);
  } else if (index === 4) {
    index = 0;
    imageElement.src = images[index].src;
    checkCircles(index);
  }
};

const leftArrowOnClick = () => {
  if (index <= 4 && index > 0) {
    index--;
    imageElement.src = images[index].src;
    checkCircles(index);
  } else if (index === 0) {
    index = 4;
    imageElement.src = images[index].src;
    checkCircles(index);
  }
};

const circleOnClick = (event) => {
  let circle = event.target.id;
  if (circle === "circle1") {
    index = 0;
    checkCircles(index);
  } else if (circle === "circle2") {
    index = 1;
    checkCircles(index);
  } else if (circle === "circle3") {
    index = 2;
    checkCircles(index);
  } else if (circle === "circle4") {
    index = 3;
    checkCircles(index);
  } else if (circle === "circle5") {
    index = 4;
    checkCircles(index);
  }
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

checkCircles(index);
