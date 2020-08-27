// Create variables targetting the relevant DOM elements here 👇
var mainCover = document.querySelector(".main-cover");
var formView = document.querySelector(".form-view");
var savedCoversSection = document.querySelector(".saved-view");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button")
// var saveCover = "";
// var saveTitle = "";
// var saveImage = "";
// var saveTagline = "";
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", function() {
  randomCover();
  instantiateCurrentCover();
});

randomCoverButton.addEventListener("click", function() {
  randomCover();
  instantiateCurrentCover();
})

makeNewCoverButton.addEventListener("click", function() {
  changePage(mainCover, formView);
  changePage(savedCoversSection, formView)
  hideButton(randomCoverButton);
  hideButton(saveCoverButton);
  showButton(homeButton);
})

viewSavedButton.addEventListener("click", function() {
  changePage(mainCover, savedCoversSection);
  changePage(formView, savedCoversSection);
  hideButton(randomCoverButton);
  hideButton(saveCoverButton);
  showButton(homeButton);
})//This area seems to be breaking the makeCover form view

// Create your event handlers and other functions here 👇
function randomCover() {
  coverImage.src = getRandomIndex(covers);
  coverTitle.innerText = getRandomIndex(titles);
  descriptor1.innerText = getRandomIndex(descriptors);
  descriptor2.innerText = getRandomIndex(descriptors);
};

function instantiateCurrentCover(){
  currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText);
};

function changePage(hide, show) {
  hide.classList.add("hidden");
  show.classList.remove("hidden");
}

function hideButton(button) {
  button.classList.add("hidden");
}

function showButton(button) {
  button.classList.remove("hidden");
}
// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
function getRandomIndex(array) {
  var results = Math.floor(Math.random() * array.length);
  return array[results];
}
