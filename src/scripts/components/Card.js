export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._templateSelector = templateSelector, 
    this._handleCardClick = handleCardClick    
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("element__like_active");
  }

  _setEventListeners() {
    this._element.querySelector(".element__basket").addEventListener("click", () => {
      this._element.remove();
    });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._imgElement.addEventListener("click", () => {
      this._handleCardClick(this._data.link, this._data.name);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__like");
    this._imgElement = this._element.querySelector(".element__img");
    this._element.querySelector(".element__text").textContent = this._data.name;
    this._imgElement.alt = this._data.name;
    this._imgElement.src = this._data.link;
    this._setEventListeners();
    return this._element;
  }
}
