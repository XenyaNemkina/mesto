import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__field');
  }


  
  _getInpupValues() {
this._formValues = {};
this_inputList.forEach(input => {
  this._formValues[input.name] = input.value;
  });
  return this._formValues;
  };

  setEventListener() {
    super.setEventListener();
this._form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  this._handleFormSubmit(this._getInpupValues());
  this.close();
})
};

close() {
  super.close();
this._form.reset();
};


setFormValues(values) {
  this_inputList.forEach(input =>{
  const name = input.name;
  if(values[name]) {
    input.value = values[name];
  }
});

}}