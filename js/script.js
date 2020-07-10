var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".popup-feedback");
var close = document.querySelector(".modal-feedback-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-feedback-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-feedback-show");
});
