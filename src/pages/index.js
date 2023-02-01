import './index.css';
import { Card } from "../scripts/components/Card.js";
import { initialCards, selectors } from "../scripts/utils/constants.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { newCardNameInput, newCardSrcInput, profilePopup, profileOpenButton, newCardPopup, newCardForm, elementsContainer, newCardOpenButton, fullImgPopup, profileForm, nameInput, jobInput } from "../scripts/utils/constants.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
//карточка
function renderCard(data) {
  const cardElement = new Card(data, "#element-template", handleCardClick);

  const newElement = cardElement.generateCard();
  return newElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardList.addItem(renderCard(data));
    },
  },
  elementsContainer
);

cardList.renderItems();

//попап большая картинка
const fullImagePopup = new PopupWithImage(fullImgPopup);
fullImagePopup.setEventListeners();

function handleCardClick(name, link) {
  fullImagePopup.open(name, link);
}

//попап новая карточка
const newCardFormPopup = new PopupWithForm({ selectorPopup: newCardPopup, handleFormSubmit: (data) => {
  cardList.addItem(renderCard(data));
  newCardFormPopup.close();
}});

newCardFormPopup.setEventListeners();
newCardOpenButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  newCardFormPopup.open();
});

//попап информация профиля
profileOpenButton.addEventListener("click", () => {
  userInfoFormPopup.open();
  const { name, prof } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = prof;
});

const userInfo = new UserInfo({ selectorName: ".info__name", selectorProf: ".info__profession" });

const userInfoFormPopup = new PopupWithForm({
  selectorPopup: profilePopup,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.prof);

    userInfoFormPopup.close();
  },
});

userInfoFormPopup.setEventListeners();

//валидаторы
const newCardValidator = new FormValidator(selectors, newCardForm);
newCardValidator.enableValidation();
const profileFormValidator = new FormValidator(selectors, profileForm);
profileFormValidator.enableValidation();
