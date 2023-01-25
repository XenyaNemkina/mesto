import {popupCloseButton} from "../utils/constants.js";

export class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup),
    this._closeButton = this._popup.querySelector(".popup__close")
  };


  open() {
    this._popup.classList.add('popup_is-opened');
document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)})
  };
  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', (evt) => {this._handleEscClose(evt)});
  };

  _handleEscClose(evt) {
if (evt.key === 'Escape') {
 this.close();
}
  };
  setEventListeners() {
this._popup.addEventListener('click', () => {
  this.close();
})

this._closeButton.addEventListener('click', () => {
      this.close();
}
  );

}
}