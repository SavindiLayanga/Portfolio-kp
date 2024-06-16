export default class LoginModel {
    constructor(email, name, address, mobileNo, password, confirmPassword) {
        this._email = email;
        this._name = name;A
        this._address = address;
        this._mobileNo = mobileNo;
        this._password = password;
        this._confirmPassword = confirmPassword;
    }

    get email() {
        return this._email;
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    }

    get mobileNo() {
        return this._mobileNo;
    }

    get password() {
        return this._password;
    }

    get confirmPassword() {
        return this._confirmPassword;
    }

    set email(email) {
        this._email = email;
    }

    set name(name) {
        this._name = name;
    }

    set address(address) {
        this._address = address;
    }

    set mobileNo(mobileNo) {
        this._mobileNo = mobileNo;
    }

    set password(password) {
        this._password = password;
    }

    set confirmPassword(confirmPassword) {
        this._confirmPassword = confirmPassword;
    }
}
