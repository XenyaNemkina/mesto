export class UserInfo {
  constructor({ selectorName, selectorProf, selectorAvatar }) {
    this._userName = document.querySelector(selectorName);
    this._userProf = document.querySelector(selectorProf);
    this._userAvatar = document.querySelector(selectorAvatar);
  }
  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      prof: this._userProf.textContent,
      avatar: this._userAvatar.src
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name, 
    this._userProf.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }
}
