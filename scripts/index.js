const profilePopup = document.querySelector(".popup_profile"); /* переменная 1 */
const profileCloseButton = profilePopup.querySelector(".popup__close_profile"); /* кнопка закрытия 1 */
const profileOpenButton = document.querySelector(".info__button"); /* кнопка открытия 1 */
const profileSaveButton = document.querySelector(".popup__save_profile");
const elementsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content.querySelector(".element");
const newCardPopup = document.querySelector(".popup_new-card"); /* переменная 2 */
const newCardCloseButton = newCardPopup.querySelector(".popup__close_new-card"); /* кнопка закрытия 2 */
const newCardOpenButton = document.querySelector(".profile__add-button"); /* кнопка открытия 2 */
const newCardSaveButton = newCardPopup.querySelector(".popup__save_new-card");
const fullImgPopup = document.querySelector(".popup_full-image"); /* переменная 3 */
const fullImgCloseButton = fullImgPopup.querySelector(".popup__close_full-image"); /* кнопка закрытия 3 */
const profileForm = document.querySelector(".popup__form_profile");
const nameInput = profileForm.querySelector(".popup__field_type_nickname");
const jobInput = profileForm.querySelector(".popup__field_type_prof");
const infoName = document.querySelector(".info__name");
const infoProfession = document.querySelector(".info__profession");
const newCardForm = document.querySelector(".popup__form_new-card");
const newCardNameInput = newCardForm.querySelector(".popup__field_type_name");
const newCardSrcInput = newCardForm.querySelector(".popup__field_type_src");
const fullImgElement = document.querySelector(".popup__img_full-image");
const fullImgName = document.querySelector(".popup__name_full-image");

const handleKeyUp = (evt) => {
  const openItem = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    closePopup(openItem);
  }
};

const handleOverlay = (evt) => {
  if (!evt.target.closest(".popup__container")) {
    closePopup(evt.target.closest(".popup"));
  }
};

const openPopup = function (item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleKeyUp);
  document.addEventListener("click", handleOverlay);
};

const closePopup = function (item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleKeyUp);

  // item.querySelector('.popup__form').reset()
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

const handleSubmitNewForm = (evt) => {
  evt.preventDefault();

  const cardElement = {
    name: newCardNameInput.value,
    link: newCardSrcInput.value,
  };
  const newElement = generateCard(cardElement);
  elementsContainer.prepend(newElement);
  toggleButtonState();
  closePopup(newCardPopup);
  evt.target.reset();
};

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
  imgCard.alt = dataCard.name;
  const deleteBtn = newCard.querySelector(".element__basket");
  deleteBtn.addEventListener("click", handleDeleteCard);
  const likeBtn = newCard.querySelector(".element__like");
  likeBtn.addEventListener("click", handleLikeCard);

  imgCard.addEventListener("click", () => {
    fullImgElement.src = dataCard.link;
    fullImgElement.alt = dataCard.name;
    fullImgName.textContent = dataCard.name;
    openPopup(fullImgPopup);
  });
  return newCard;
};

const renderCard = (dataCard) => {
  elementsContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

profileOpenButton.addEventListener("click", () => {
  openProfilePopup(profilePopup);
});
profileCloseButton.addEventListener("click", () => {
  closePopup(profilePopup);
});
newCardOpenButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});
newCardCloseButton.addEventListener("click", () => {
  closePopup(newCardPopup);
});
fullImgCloseButton.addEventListener("click", () => {
  closePopup(fullImgPopup);
});
profileForm.addEventListener("submit", handleSubmitProfileForm);
newCardForm.addEventListener("submit", handleSubmitNewForm);
