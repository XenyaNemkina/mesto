import './index.css';
import { Card } from "../scripts/components/Card.js";
import { selectors } from "../scripts/utils/constants.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { profilePopup, profileOpenButton, newCardPopup, newCardForm, elementsContainer, newCardOpenButton, fullImgPopup, profileForm, nameInput, jobInput, avaCreateButton, avaCreatePopup, confirmDelPopup, delButton, delCardForm, avaCreateForm } from "../scripts/utils/constants.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {Api} from "../scripts/components/Api.js";
import { PopupWithConfirmation } from '../scripts/components/PopupWithConfirmation.js';

// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
    'Content-Type': 'application/json'
  }
}); 

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, data]) => {
  userInfo.setUserInfo(userData);
  userId = userData._id;
  cardList.renderItems(data);
})
.catch((err) => {
  console.log(err); 
}); 

//карточка
function renderCard(data) {
  const cardElement = new Card({data, templateSelector: "#element-template", 
  userId, 
  handleCardClick: (name, link) => {
  fullImagePopup.open(name, link)},
  handleDeleteClick: (cardId) => {
    delCardPopup.open();
    delCardPopup.handleFormSubmitConfirm(() => {
      delCardPopup.setButtonText('Удаление...')
      api.deleteCard(cardId)
      .then(() => {
        cardElement.handleDeleteCard();
        delCardPopup.close()
      })
      .catch((err) => {
        console.log(err); 
      })
      .finally(() => {
        delCardPopup.setButtonText('Да')
      })})},
  handleSetLike: (cardId) => {
    api.setLike(cardId)
    .then((data) => {
      cardElement.handleLikeCard(data);
    })
    .catch((err) => {
      console.log(err); 
    })},
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
      .then((data) => {
        cardElement.handleLikeCard(data);
      })
      .catch((err) => {
        console.log(err); 
      })}})
  const newElement = cardElement.generateCard();
  cardList.addItem(newElement)
}

const cardList = new Section(renderCard, elementsContainer);

const userInfo = new UserInfo({ selectorName: ".info__name", selectorProf: ".info__profession", selectorAvatar: ".profile__avatar" });

//попап информация профиля
profileOpenButton.addEventListener("click", () => {
  userInfoFormPopup.open();
  const { name, prof } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = prof;
});

const userInfoFormPopup = new PopupWithForm({
  selectorPopup: profilePopup,
  handleFormSubmit: (formData) => {
    userInfoFormPopup.setButtonText("Сохранение...");
    api.editUserInfo(formData)
    .then((formData) => {
      userInfo.setUserInfo(formData);
      userInfoFormPopup.close();
    })
    .catch((err) => {
      console.log(err); 
    })
    .finally(() => userInfoFormPopup.setButtonText("Сохранить"))
  },
});
userInfoFormPopup.setEventListeners();


//попап аватар
const newAvaPopup = new PopupWithForm({selectorPopup: avaCreatePopup,
  handleFormSubmit: (formData) => {
  newAvaPopup.setButtonText("Сохранение...");
  api.editAvatar(formData)
      .then((formData) => {
      userInfo.setUserInfo(formData);
      newAvaPopup.close();
    })
    .catch((err) => {
      console.log(err); 
    })
    .finally(() => newAvaPopup.setButtonText("Сохранить"))
  },}
)
newAvaPopup.setEventListeners();
avaCreateButton.addEventListener("click", () => {
  newAvaPopup.open();
})


//попап большая картинка
const fullImagePopup = new PopupWithImage(fullImgPopup);
fullImagePopup.setEventListeners();



//попап новая карточка
const newCardFormPopup = new PopupWithForm({ selectorPopup: newCardPopup, handleFormSubmit: (data) => {
  newCardFormPopup.setButtonText("Сохранение...");
  api.addCard(data.name, data.link)
  .then(res => {
  renderCard(res)
  newCardValidator.resetValidation()
  newCardFormPopup.close();})
  .catch((err) => {
    console.log(err); 
  })
  .finally(() => newCardFormPopup.setButtonText("Сохранить"))
}});

newCardFormPopup.setEventListeners();
newCardOpenButton.addEventListener("click", () => {
  newCardFormPopup.open();
});


//попап удаления карточки
const delCardPopup = new PopupWithConfirmation({selectorPopup: confirmDelPopup});
delCardPopup.setEventListeners();




//валидаторы
const newCardValidator = new FormValidator(selectors, newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(selectors, profileForm);
profileFormValidator.enableValidation();
const avaCreateValidator = new FormValidator(selectors, avaCreateForm);
avaCreateValidator.enableValidation();
