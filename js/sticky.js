window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#000";
    navbar.style.height = "";
    navbar.style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    navbar.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = "#333";
    navbar.style.boxShadow = "0px 0px 0px transparent";
    navbar.style.display = "none";
  }
}

function dropdown() {
  const drop = document.getElementById("drop");
  const rel = document.getElementById("rel");
  if (rel.name === "off") {
    drop.style.display = "block";
    rel.innerHTML = '<i class="fa fa-times"></i>';
    rel.name = "on";
  } else {
    drop.style.display = "none";
    rel.innerHTML = '<i class="fa fa-bars"></i>';
    rel.name = "off";
  }
}
function dropdowns() {
  const drop = document.getElementById("drop");
  const rel = document.getElementById("rel");
  if (rel.name === "off") {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    drop.style.display = "block";
    rel.innerHTML = '<i class="fa fa-times"></i>';
    rel.name = "on";
  } else {
    drop.style.display = "none";
    rel.innerHTML = '<i class="fa fa-bars"></i>';
    rel.name = "off";
  }
}

function show() {
  const parens = document.getElementById("parens");
  const children = document.getElementById("children");
  if (parens.name === "off") {
    children.style.display = "block";
  } else {
    children.style.display = "none";
  }
}
