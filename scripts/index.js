const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".info__button");
const popupSaveButtonElement = document.querySelector(".popup__save");

let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__field_type_name");
let jobInput = formElement.querySelector(".popup__field_type_prof");
let infoName = document.querySelector(".info__name");
let infoProfession = document.querySelector(".info__profession");

const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  infoName.textContent = nameInput.value;
  infoProfession.textContent = jobInput.value;
};
const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoProfession.textContent = jobInput.value;
}
formElement.addEventListener("submit", formSubmitHandler);

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

