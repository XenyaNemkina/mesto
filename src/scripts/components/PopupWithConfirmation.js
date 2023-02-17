import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ selectorPopup }) {
    super( selectorPopup);
    this._form = this._popup.querySelector('.popup__form')
  }

  handleFormSubmitConfirm(submit) {
    this._handleFormSubmitConfirm = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmitConfirm()
    })
  }

}