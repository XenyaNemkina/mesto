import { Card } from "../components/Card.js";
import { initialCards } from "../constants.js";
import { FormValidator } from "../FormValidator.js";
import { Section } from "../components/Section.js";
import {templateSelector, profilePopup, profileOpenButton, elementsContainer, newCardPopup, newCardOpenButton, fullImgPopup, fullImgElement, fullImgName, profileForm, nameInput, jobInput, infoName, infoProfession, newCardForm, newCardNameInput, newCardSrcInput} from "../constants.js";
//import {Popup} from "../Popup.js";
/*
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
}*/

 function renderCard(data) {
  const cardElement = new Card(data, '#element-template');
  const newElement = cardElement.generateCard();
  return newElement;
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
   cardList.addItem(renderCard(item));    
  }
}, elementsContainer);

cardList.renderItems();




/*
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
/*
profileOpenButton.addEventListener("click", () => {
  openProfilePopup(profilePopup);
});
newCardOpenButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});*/

const newCardValidator = new FormValidator(newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(profileForm);
profileFormValidator.enableValidation();
/*
profileForm.addEventListener("submit", handleSubmitProfileForm);
newCardForm.addEventListener("submit", handleSubmitNewForm);
profilePopup.addEventListener("click", handleOverlay);
newCardPopup.addEventListener("click", handleOverlay);
fullImgPopup.addEventListener("click", handleOverlay);*/
