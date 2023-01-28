
export class UserInfo {
  constructor({selectorName, selectorProf}) {
    this._userName = document.querySelector(selectorName);
    this._userProf = document.querySelector(selectorProf);
  console.log(this._userName)
  }
    getUserInfo() {
const userInfo = {
  name: this._userName.textContent,
  prof: this._userProf.textContent,
}
console.log(userInfo)
return userInfo;
    }

    setUserInfo(name, prof) {
      this._userName.textContent = name,
      this._userProf.textContent = prof
      console.log(this._userName)
    }
  }
