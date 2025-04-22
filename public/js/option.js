let optionBtn = document.getElementById("option-btn");
let closeBar = document.getElementById("closebar");
let sideBar = document.getElementById("sidebar");

optionBtn.addEventListener("click", () => {
  sideBar.classList.add("open");
});

closeBar.addEventListener("click", () => {
  sideBar.classList.remove("open");
});
