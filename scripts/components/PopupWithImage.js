import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImg = this._popup.querySelector(".popup__img_full-image");
    this._popupName = this._popup.querySelector(".popup__name_full-image");
  }

  open(link, name) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupName.textContent = name;
    super.open();
  }
}
