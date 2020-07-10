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

  if (storageLogin) {
  feedbackLogin.value = storageLogin;
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("popup-feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("popup-feedback-show");
      feedbackPopup.classList.remove("popup-error");
    }
  }
});
