import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__field");
  }

  _getInputValues() {
    const values = {};

    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
