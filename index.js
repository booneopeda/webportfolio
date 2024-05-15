$("#landing").animate({ opacity: 1 }, { duration: 1000 });

const projects = document.querySelector("#greeting");
const projects2 = document.querySelector("#projects");
const projects3 = document.querySelector("#tools-trigger");

const initialCoords = projects.getBoundingClientRect();
const initialCoords2 = projects2.getBoundingClientRect();
const initialCoords3 = projects3.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords.top) {
    $("#projects").removeClass("hidden");
    $("#api").addClass("slide-left");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords2.top) {
    $("#react").removeClass("hidden");
    $("#react").addClass("slide-right");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords3.top) {
    $("#tools").animate({ opacity: 1 }, { duration: 1000 });
    $("#contact").animate({ opacity: 1 }, { duration: 1000 });
    $("#footer").animate({ opacity: 1 }, { duration: 1000 });
  }
});
