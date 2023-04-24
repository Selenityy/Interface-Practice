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
