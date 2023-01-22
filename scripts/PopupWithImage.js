import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImg = this._popupImg.querySelector('.popup__img');
    this._popupName = this._popupImg.querySelector('.popup__name');
  };

  open(name, link) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupName.textContent = name;
    super.open();
  }
}