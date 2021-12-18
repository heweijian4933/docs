// a.js
const PASSWORD = Symbol()

class Login {
    constructor(username, password) {
        this.username = username
        this[PASSWORD] = password
    }

    checkPassword(pwd) {
        return this[PASSWORD] === pwd
    }

    showLoginNative() {
        console.log("showLoginNative", this.username, this[PASSWORD], this);
    }
}

module.exports = Login