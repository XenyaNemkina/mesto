import { Card } from "../components/Card.js";
import { initialCards } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import {newCardSaveButton, profilePopup, profileOpenButton, newCardPopup, newCardForm, elementsContainer, newCardOpenButton, fullImgPopup, profileForm, nameInput, jobInput, infoName, infoProfession} from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";


//карточка
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

//попап большая картинка
const fullImagePopup = new PopupWithImage(fullImgPopup);
fullImagePopup.setEventListeners();

function handleCardClick(name, link) {
  fullImagePopup.open(name, link);
}

//попап новая карточка
const newCardFormPopup = new PopupWithForm({selectorPopup: newCardPopup, 
handleFormSubmit});

function handleFormSubmit(formData) {
  const data = {
    name: formData.name,
    link: formData.link
  }
  cardList.addItem(renderCard(data))
  newCardFormPopup.close();
}

newCardFormPopup.setEventListeners();
newCardOpenButton.addEventListener('click', () => {
  newCardFormPopup.open();
})


//попап информация профиля
const userInfo = new UserInfo({ selectorName: ".info__name", selectorProf: ".info__profession"});

const userInfoFormPopup = new PopupWithForm({selectorPopup: profilePopup, 
  handleFormSubmit: (formData) => {
    console.log(userInfo);
    userInfo.setUserInfo(formData.name, formData.prof);
    console.log(formData.name);
    userInfoFormPopup.close();
  }})
  
  userInfoFormPopup.setEventListeners();

  profileOpenButton.addEventListener('click', () => {
    userInfoFormPopup.open();
    const {name, prof} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = prof;
  })

  //валидаторы
const newCardValidator = new FormValidator(newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(profileForm);
profileFormValidator.enableValidation();
