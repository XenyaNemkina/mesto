import {popupElement, popupCloseButton} from "./constants.js";

class Popup {
  constructor(selectorPopup) {
    this._selector = selectorPopup
  };


  open() {
popupElement.classList.add('popup_is-opened');
document.addEventListener('keydown', this._handleEscClose);
  };
  close() {
    popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose() {
if (evt.key === 'Escape') {
  this.close();
}
  };
  setEventListeners() {
this._element.addEventListener('click', () => {
  this.open();
})

popupCloseButton.addEventListener('click', () => {
  this.close();
})
  };

}