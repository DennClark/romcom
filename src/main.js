var mainCover = document.querySelector(".main-cover");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var savedCoversSection = document.querySelector(".saved-covers-section");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var coverInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptor1Input = document.querySelector("#descriptor1");
var descriptor2Input = document.querySelector("#descriptor2");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.addEventListener("load",randomCover);

randomCoverButton.addEventListener("click", randomCover);

makeNewCoverButton.addEventListener("click", function() {
  changePage(mainCover, formView);
  changePage(savedView, formView)
  hideButton(randomCoverButton);
  hideButton(saveCoverButton);
  showButton(homeButton);
})

viewSavedButton.addEventListener("click", function() {
  changePage(mainCover, savedView);
  changePage(formView, savedView);
  hideButton(randomCoverButton);
  hideButton(saveCoverButton);
  showButton(homeButton);
  displaySavedCovers();
})

homeButton.addEventListener("click", function() {
  changePage(savedView, mainCover);
  changePage(formView, mainCover);
  hideButton(homeButton);
  showButton(saveCoverButton);
  showButton(randomCoverButton);
})

makeMyBookButton.addEventListener("click", function(event) {
  event.preventDefault()
  changePage(formView, mainCover);
  displayMyCover();
  addToArrays();
  hideButton(homeButton);
  showButton(saveCoverButton);
  showButton(randomCoverButton);
})

saveCoverButton.addEventListener("click", addToSaved);

function randomCover() {
  coverImage.src = getRandomIndex(covers);
  coverTitle.innerText = getRandomIndex(titles);
  descriptor1.innerText = getRandomIndex(descriptors);
  descriptor2.innerText = getRandomIndex(descriptors);
};

function displayMyCover(){
  coverImage.src = coverInput.value;
  coverTitle.innerText = titleInput.value;
  descriptor1.innerText = descriptor1Input.value;
  descriptor2.innerText = descriptor2Input.value;
};

function addToArrays() {
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value);
  descriptors.push(descriptor2Input.value);
}

function addToSaved() {
  var currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  var hasDuplicate = false;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === coverImage.src && savedCovers[i].title === coverTitle.innerText && savedCovers[i].tagline1 === descriptor1.innerText && savedCovers[i].tagline2 === descriptor2.innerText) {
      hasDuplicate = true;
    }
  }
  if (hasDuplicate === false) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML += `<section class="mini-cover"><img class="cover-image" src=${savedCovers[i].cover}><h2 class="cover-title">${savedCovers[i].title}</h2><h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}
</span></h3><img class="price-tag" src="./assets/price.png"><img class="overlay" src="./assets/overlay.png"></section>`
  }
}

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

function getRandomIndex(array) {
  var results = Math.floor(Math.random() * array.length);
  return array[results];
}
