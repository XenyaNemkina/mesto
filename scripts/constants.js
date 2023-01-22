export const initialCards = [
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

export const popupElement = document.querySelector(".popup");
export const profilePopup = document.querySelector(".popup_profile"); /* переменная 1 */
export const profileOpenButton = document.querySelector(".info__button"); /* кнопка открытия 1 */
export const elementsContainer = document.querySelector('elements');
export const newCardPopup = document.querySelector(".popup_new-card"); /* переменная 2 */
export const newCardOpenButton = document.querySelector(".profile__add-button"); /* кнопка открытия 2 */
export const fullImgPopup = document.querySelector(".popup_full-image"); /* переменная 3 */
export const fullImgElement = fullImgPopup.querySelector(".popup__img_full-image");
export const fullImgName = fullImgPopup.querySelector(".popup__name_full-image");
export const profileForm = document.querySelector(".popup__form_profile");
export const nameInput = profileForm.querySelector(".popup__field_type_nickname");
export const jobInput = profileForm.querySelector(".popup__field_type_prof");
export const infoName = document.querySelector(".info__name");
export const infoProfession = document.querySelector(".info__profession");
export const newCardForm = document.querySelector(".popup__form_new-card");
export const newCardNameInput = newCardForm.querySelector(".popup__field_type_name");
export const newCardSrcInput = newCardForm.querySelector(".popup__field_type_src");
export const popupCloseButton = document.querySelector(".popup__close");
export const templateSelector = document.querySelector("#element-template");