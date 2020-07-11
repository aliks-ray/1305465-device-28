//Попап с обратной связью

var feedbackLink = document.querySelector(".button-contacts");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".modal-feedback-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackLogin = feedbackPopup.querySelector(".popup-name");
var feedbackEmail = feedbackPopup.querySelector(".popup-email");
var feedbackMessage = feedbackPopup.querySelector(".popup-message");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-feedback-show");
  feedbackLogin.focus();

  if (storageLogin && storageEmail) {
  feedbackLogin.value = storageLogin;
  feedbackEmail.value = storageEmail;
  feedbackMessage.focus();
} else {
  feedbackLogin.focus();
}

});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-feedback-show");
  feedbackPopup.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("popup-error");
  } else {
    localStorage.setItem("login", feedbackLogin.value);
    localStorage.setItem("email", feedbackEmail.value);
  }
});

feedbackLogin.addEventListener("input", function (evt) {
  if (feedbackLogin.validity.valid) {
    feedbackLogin.classList.remove("popup-invalid");
    feedbackLogin.offsetWidth = feedbackLogin.offsetWidth;
    feedbackLogin.classList.add("popup-invalid");
  }
});

feedbackEmail.addEventListener("input", function (evt) {
  if (feedbackEmail.validity.valid) {
    feedbackEmail.classList.remove("popup-invalid");
    feedbackEmail.offsetWidth = feedbackEmail.offsetWidth;
    feedbackEmail.classList.add("popup-invalid");
  }
});

feedbackMessage.addEventListener("input", function (evt) {
  if (feedbackMessage.validity.valueMissing) {
    feedbackMessage.classList.remove("popup-invalid");
    feedbackMessage.offsetWidth = feedbackMessage.offsetWidth;
    feedbackMessage.classList.add("popup-invalid");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("popup-feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("popup-feedback-show");
      feedbackPopup.classList.remove("popup-error");
    }
  }
});

//Попап с картой

var mapLink = document.querySelector(".small-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-map-show");
    }
  }
});

//Слайдер "сервисы"

var servicesButton = document.querySelectorAll(".services-button");
var servicesSlide = document.querySelectorAll(".services-slide");

for (var i = 0; i < servicesButton.length; i++) {
	servicesButton[i].addEventListener("click", (function (index) {
		return function() {
			for (var k = 0; k < servicesButton.length; k++) {
				servicesButton[k].classList.remove("active-services-button");
				servicesSlide[k].classList.add("visually-hidden");
			}
			servicesButton[index].classList.add("active-services-button");
			servicesSlide[index].classList.remove("visually-hidden");
		}
	})(i));
}

//Главный слайдер

var mainButton = document.querySelectorAll(".main-slider-control");
var mainSlide = document.querySelectorAll(".main-slider-slide");

for (var i = 0; i < mainButton.length; i++) {
	mainButton[i].addEventListener("click", (function (index) {
		return function() {
			for (var k = 0; k < mainButton.length; k++) {
				mainButton[k].classList.remove("active-slide");
				mainSlide[k].classList.add("visually-hidden");
			}
			mainButton[index].classList.add("active-slide");
			mainSlide[index].classList.remove("visually-hidden");
		}
	})(i));
}
