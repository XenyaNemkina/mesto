
export class UserInfo {
  constructor(selectorName, selectorProf) {
    this._userName = document.querySelector(".info__name");
    this._userProf = document.querySelector(".info__profession");
  }
    getUserInfo() {
const userInfo = {
  name: this._userName.textContent,
  prof: this._userProf.textContent,
}
return userInfo;
    }

    setUserInfo(name, prof) {
      this._userName.textContent = name;
      this._userProf.textContent = prof;
    }
  }
