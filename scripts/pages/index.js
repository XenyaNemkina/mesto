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
handleNewCardFormSubmit});
function handleNewCardFormSubmit(evt, formData) {
  evt.preventDefault();
  cardList.addItem(renderCard(formData))
  newCardFormPopup.close();
}

newCardFormPopup.setEventListeners();
newCardOpenButton.addEventListener('click', () => {
  newCardFormPopup.open();
})


//попап информация профиля
const userInfo = new UserInfo({ selectorName: '.popup__field_type_nickname', selectorProf: '.popup__field_type_prof'});

const userInfoFormPopup = new PopupWithForm({selectorPopup: profilePopup, 
  handleFormSubmit: (evt, formData) => {
    evt.preventDefault();
    userInfo.setUserInfo(formData.name, formData.prof);
    userInfoFormPopup.close();
  }})
  
  userInfoFormPopup.setEventListeners();

  profileOpenButton.addEventListener('click', () => {
    const {name, prof} = userInfo.getUserInfo();
    userInfoFormPopup.setFormValues({name, prof});
   // profileFormValidator.resetValidation();
    userInfoFormPopup.open();
  })

  //валидаторы
const newCardValidator = new FormValidator(newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(profileForm);
profileFormValidator.enableValidation();
