const breakPointButton = document.querySelector(".btn-1");
const breakPointOnAttributeChange = document.querySelector(".btn-2");

breakPointButton.addEventListener("click", (e) => {
  breakPointOnAttributeChange.style.background = "#1abc9c";
  breakPointOnAttributeChange.style.border = "3px solid #1abc9c";
});
