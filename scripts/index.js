const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".info__button");
const popupSaveButtonElement = document.querySelector(".popup__save");
const elContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');
const newCardElement = document.querySelector(".new-card");
const newCardCloseButtonElement = newCardElement.querySelector(".new-card__close");
const newCardOpenButtonElement = document.querySelector(".profile__add-button");
const newCardSaveButtonElement = newCardElement.querySelector(".new-card__save");
const fullImgPopup = document.querySelector(".full-image");
const fullImgCloseButton = fullImgPopup.querySelector(".full-image__close");

let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__field_type_name");
let jobInput = formElement.querySelector(".popup__field_type_prof");
let infoName = document.querySelector(".info__name");
let infoProfession = document.querySelector(".info__profession");
let newCardForm = document.querySelector(".new-card__form");
let newCardNameInput = newCardForm.querySelector(".new-card__field_type_name");
let newCardSrcInput = newCardForm.querySelector(".new-card__field_type_src");

const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoProfession.textContent;
};
const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

function handleSubmitForm(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoProfession.textContent = jobInput.value;
  closePopup();
}



const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
}
const handleLikeCard = (evt) => {
  evt.target.closest('.element__like').classList.toggle('element__like_active');
}


const generateCard = (dataCard) => {
const newCard = cardTemplate.cloneNode(true);
const title =  newCard.querySelector('.element__text');
const imgCard = newCard.querySelector('.element__img');
title.textContent = dataCard.name;
imgCard.src = dataCard.link;

const deleteBtn = newCard.querySelector('.element__basket');
deleteBtn.addEventListener('click', handleDeleteCard);
const likeBtn = newCard.querySelector('.element__like');
likeBtn.addEventListener('click', handleLikeCard);

const fullImgPopup = document.querySelector(".full-image");
let fullImgElement = document.querySelector(".full-image__img");
let fullImgName = document.querySelector(".full-image__name");
imgCard.addEventListener('click', () => {
  fullImgPopup.classList.add("full-image_is-opened");
  fullImgElement.src = dataCard.link;
  fullImgName.textContent = dataCard.name;
})
return newCard;
}

const renderCard = (dataCard) => {
  elContainer.prepend(generateCard(dataCard));
}

initialCards.forEach((dataCard) => { 
  renderCard(dataCard);
})


const newCardOpen = function () {
  newCardElement.classList.add("new-card_is-opened");
};
const newCardClose = function () {
  newCardElement.classList.remove("new-card_is-opened");
};

const handleSubmitNewForm = (evt) => {
  evt.preventDefault();
const addElement = {
  name: newCardNameInput.value,
  link: newCardSrcInput.value
  };
  const newElement = generateCard(addElement);
  elContainer.prepend(newElement);
  newCardClose();
  evt.target.reset();
}

const fullImgClose = function () {
  fullImgPopup.classList.remove("full-image_is-opened");
};
  

fullImgCloseButton.addEventListener("click", fullImgClose);
formElement.addEventListener("submit", handleSubmitForm);
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
newCardForm.addEventListener("submit", handleSubmitNewForm);
newCardOpenButtonElement.addEventListener("click", newCardOpen);
newCardCloseButtonElement.addEventListener("click", newCardClose);




