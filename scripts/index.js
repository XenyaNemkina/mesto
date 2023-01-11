import { Card } from "./Card.js";
import { initialCards } from "./InitialCards.js";
import { FormValidator } from "./FormValidator.js";


const profilePopup = document.querySelector(".popup_profile"); /* переменная 1 */
const profileOpenButton = document.querySelector(".info__button"); /* кнопка открытия 1 */
const elementsContainer = document.querySelector(".elements");
const newCardPopup = document.querySelector(".popup_new-card"); /* переменная 2 */
const newCardOpenButton = document.querySelector(".profile__add-button"); /* кнопка открытия 2 */
const fullImgPopup = document.querySelector(".popup_full-image"); /* переменная 3 */
const fullImgElement = fullImgPopup.querySelector(".popup__img_full-image");
const fullImgName = fullImgPopup.querySelector(".popup__name_full-image");
const profileForm = document.querySelector(".popup__form_profile");
const nameInput = profileForm.querySelector(".popup__field_type_nickname");
const jobInput = profileForm.querySelector(".popup__field_type_prof");
const infoName = document.querySelector(".info__name");
const infoProfession = document.querySelector(".info__profession");
const newCardForm = document.querySelector(".popup__form_new-card");
const newCardNameInput = newCardForm.querySelector(".popup__field_type_name");
const newCardSrcInput = newCardForm.querySelector(".popup__field_type_src");
const buttonCloseList = document.querySelectorAll(".popup__close");

const handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    const openItem = document.querySelector(".popup_is-opened");
    closePopup(openItem);
  }
};

const handleOverlay = (evt) => {
  if (!evt.target.closest(".popup__container")) {
    closePopup(evt.target);
  }
};

const openPopup = function (item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleKeyDown);
};

const closePopup = function (item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleKeyDown);
};

function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = infoName.textContent;
  jobInput.value = infoProfession.textContent;
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoProfession.textContent = jobInput.value;
  closePopup(profilePopup);
}

export function handleOpenPopup(link, text) {
  fullImgElement.src = link;
  fullImgElement.alt = text;
  fullImgName.textContent = text;
  openPopup(fullImgPopup);
}

function renderCard(link, text) {
  const cardElement = new Card(link, text, "#element-template", handleOpenPopup);
  const newElement = cardElement.generateCard();
  return newElement;
}

const handleSubmitNewForm = (evt) => {
  evt.preventDefault();
  elementsContainer.prepend(renderCard(newCardNameInput.value, newCardSrcInput.value, handleOpenPopup));
  evt.submitter.classList.add("popup__save_disabled");
  evt.submitter.disabled = true;
  closePopup(newCardPopup);
  evt.target.reset();
};

initialCards.forEach((item) => {
  elementsContainer.prepend(renderCard(item.name, item.link, handleOpenPopup));
});

profileOpenButton.addEventListener("click", () => {
  openProfilePopup(profilePopup);
});
newCardOpenButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

const newCardValidator = new FormValidator(newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(profileForm);
profileFormValidator.enableValidation();

profileForm.addEventListener("submit", handleSubmitProfileForm);
newCardForm.addEventListener("submit", handleSubmitNewForm);
profilePopup.addEventListener("click", handleOverlay);
newCardPopup.addEventListener("click", handleOverlay);
fullImgPopup.addEventListener("click", handleOverlay);
