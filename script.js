// drop down menu
let menuBar = document.getElementById("menuBar");
let visible = false;

const dropDown = () => {
  let elements = document.querySelectorAll(".ulOptions, .menuImg, .menuText");
  if (visible === true) {
    elements.forEach((element) => element.classList.add("hide"));
    visible = false;
  } else {
    elements.forEach((element) => element.classList.remove("hide"));
    visible = true;
  }
};

menuBar.addEventListener("click", dropDown);
