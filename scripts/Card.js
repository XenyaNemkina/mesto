export class Card {
  constructor(name, link, openPopup) {
    (this._text = name), (this._image = link);
  }
  _getTemplate() {
    const cardElement = document.querySelector("#element-template").content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _handleOpenPopup() {
    const fullImgPopup = document.querySelector(".popup_full-image");
    const fullImgElement = document.querySelector(".popup__img_full-image");
    const fullImgName = document.querySelector(".popup__name_full-image");
    fullImgElement.src = this._image;
    fullImgElement.alt = this._text;
    fullImgName.textContent = this._text;
    fullImgPopup.classList.add("popup_is-opened");
  }

  _handleLikeCard() {
    this._element.querySelector(".element__like").classList.toggle("element__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__text").textContent = this._text;
    this._element.querySelector(".element__img").alt = this._text;
    this._element.querySelector(".element__img").src = this._image;
    this._element.querySelector(".element__basket").addEventListener("click", () => {
      this._element.remove();
    });
    this._element.querySelector(".element__like").addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._element.querySelector(".element__img").addEventListener("click", () => {
      this._handleOpenPopup();
    });
    return this._element;
  }
}
