

export class Card {
  constructor(item, templateSelector, handleCardClick) {
    (this._text = item.name),
    (this._image = item.link),
    (this._templateSelector = templateSelector),
    (this._handleCardClick = handleCardClick)
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _handleLikeCard() {
    this._element.querySelector(".element__like").classList.toggle("element__like_active");
  }

  _setEventListeners() {
    this._element.querySelector(".element__basket").addEventListener("click", () => {
      this._element.remove();
    });
    this._element.querySelector(".element__like").addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._element.querySelector(".element__img").addEventListener("click", () => {
      this._handleCardClick(this._image, this._text);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imgElement = this._element.querySelector(".element__img");
    this._element.querySelector(".element__text").textContent = this._text;
    this._imgElement.alt = this._text;
    this._imgElement.src = this._image;
    this._setEventListeners();
    return this._element;
  }
}
