import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
  }


  
  _getInpupValues() {

  };

  setEventListener() {

    super.setEventListener();
  }

close() {

  super.close();
}

}