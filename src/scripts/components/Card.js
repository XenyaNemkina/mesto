export class Card {
  constructor({data, templateSelector, userId, handleCardClick, handleDeleteClick, handleSetLike, handleDeleteLike}) {
    this._data = data;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector; 
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;   
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  handleDeleteCard() {
    this._element.remove();
    this._element = null
  }

  _setEventListeners() {

    this._imgElement.addEventListener("click", () => {
    this._handleCardClick(this._data.link, this._data.name);
  });
  this._deleteButton.addEventListener("click", () => { this._handleDeleteClick(this._cardId)});
  this._likeButton.addEventListener("click", () => {
    if (this._likeButton.classList.contains('element__like_active')) {
      this._handleDeleteLike(this._cardId);
    } else {
      this._handleSetLike(this._cardId);
    }
  });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__like");
    this._likeCounter = this._element.querySelector(".element__counter");
    this._deleteButton = this._element.querySelector(".element__basket");
    this._imgElement = this._element.querySelector(".element__img");
    this._element.querySelector(".element__text").textContent = this._data.name;
    this._imgElement.alt = this._data.name;
    this._imgElement.src = this._data.link;
    this._isMyLike();
    this._likeCounter.textContent = this._likes.length;
    this._hasBasket();
    this._setEventListeners();
    return this._element;
  }

  _hasBasket() {
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }
  }

  _isMyLike() {
    if (this._likes.some((user) => {
      return this._userId === user._id})) {
      this._likeButton.classList.add('element__like_active');
    }};

  handleLikeCard(data) {
    this._likes = data.likes;
    this._likeCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like_active')
  }
}
