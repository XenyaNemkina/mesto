const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupElement = document.querySelector(".popup"); /* переменная 1 */
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); /* кнопка закрытия 1 */
const popupOpenButtonElement = document.querySelector(".info__button"); /* кнопка открытия 1 */
const popupSaveButtonElement = document.querySelector(".popup__save");
const elContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content.querySelector(".element");
const newCardElement = document.querySelector(".new-card"); /* переменная 2 */
const newCardCloseButtonElement = newCardElement.querySelector(".new-card__close"); /* кнопка закрытия 2 */
const newCardOpenButtonElement = document.querySelector(".profile__add-button"); /* кнопка открытия 2 */
const newCardSaveButtonElement = newCardElement.querySelector(".new-card__save");
const fullImgPopup = document.querySelector(".full-image"); /* переменная 3 */
const fullImgCloseButton = fullImgPopup.querySelector(".full-image__close"); /* кнопка закрытия 3 */

let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__field_type_name");
let jobInput = formElement.querySelector(".popup__field_type_prof");
let infoName = document.querySelector(".info__name");
let infoProfession = document.querySelector(".info__profession");
let newCardForm = document.querySelector(".new-card__form");
let newCardNameInput = newCardForm.querySelector(".new-card__field_type_name");
let newCardSrcInput = newCardForm.querySelector(".new-card__field_type_src");

const openPopup = function (item) {
  item.classList.add("popup_is-opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoProfession.textContent;
};

const closePopup = function (item) {
  item.classList.remove("popup_is-opened");
};

function handleSubmitForm(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoProfession.textContent = jobInput.value;
  closePopup();
}

const handleDeleteCard = (evt) => {
  evt.target.closest(".element").remove();
};
const handleLikeCard = (evt) => {
  evt.target.closest(".element__like").classList.toggle("element__like_active");
};

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);
  const title = newCard.querySelector(".element__text");
  const imgCard = newCard.querySelector(".element__img"); /* кнопка открытия 3 */
  title.textContent = dataCard.name;
  imgCard.src = dataCard.link;
  const deleteBtn = newCard.querySelector(".element__basket");
  deleteBtn.addEventListener("click", handleDeleteCard);
  const likeBtn = newCard.querySelector(".element__like");
  likeBtn.addEventListener("click", handleLikeCard);
  let fullImgElement = document.querySelector(".full-image__img");
  let fullImgName = document.querySelector(".full-image__name");
  imgCard.addEventListener("click", () => {
    openPopup(fullImgPopup);
    fullImgElement.src = dataCard.link;
    fullImgName.textContent = dataCard.name;
  });
  return newCard;
};

const renderCard = (dataCard) => {
  elContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

const handleSubmitNewForm = (evt) => {
  evt.preventDefault();
  const addElement = {
    name: newCardNameInput.value,
    link: newCardSrcInput.value,
  };
  const newElement = generateCard(addElement);
  elContainer.prepend(newElement);
  newCardClose();
  evt.target.reset();
};

popupOpenButtonElement.addEventListener("click", () => {
  openPopup(popupElement);
});
newCardOpenButtonElement.addEventListener("click", () => {
  openPopup(newCardElement);
});
popupCloseButtonElement.addEventListener("click", () => {
  closePopup(popupElement);
});
newCardCloseButtonElement.addEventListener("click", () => {
  closePopup(newCardElement);
});
fullImgCloseButton.addEventListener("click", () => {
  closePopup(fullImgPopup);
});
formElement.addEventListener("submit", handleSubmitForm);
newCardForm.addEventListener("submit", handleSubmitNewForm);
