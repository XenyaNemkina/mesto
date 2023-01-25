import { Card } from "../components/Card.js";
import { initialCards } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import {templateSelector, profilePopup, profileOpenButton, newCardPopup, newCardForm, elementsContainer, newCardOpenButton, fullImgPopup, profileForm, nameInput, jobInput, infoName, infoProfession, newCardNameInput, newCardSrcInput} from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

 function renderCard(data) {
  const cardElement = new Card(data, '#element-template', handleCardClick);
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

const fullImagePopup = new PopupWithImage(fullImgPopup);
fullImagePopup.setEventListeners();

function handleCardClick(name, link) {
  fullImagePopup.open(name, link);
}


const newCardFormPopup = new PopupWithForm({selectorPopup: newCardPopup, 
handleFormSubmit: (formData) => {
  cardList.addItem(renderCard(formData));
}})

newCardFormPopup.setEventListeners();
newCardOpenButton.addEventListener('click', () => {
  newCardFormPopup.open();
})


const userInfo = new UserInfo({
  infoName: ".info__name",
  infoProf: ".info__profession",
});

const userInfoFormPopup = new PopupWithForm({selectorPopup: profilePopup, 
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.prof);
    userInfoFormPopup.close();
  }})
  
  userInfoFormPopup.setEventListeners();
  profileOpenButton.addEventListener('click', () => {
    const {name, prof} = userInfo.getUserInfo();
    userInfoFormPopup.open();
  })

const newCardValidator = new FormValidator(newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(profileForm);
profileFormValidator.enableValidation();
