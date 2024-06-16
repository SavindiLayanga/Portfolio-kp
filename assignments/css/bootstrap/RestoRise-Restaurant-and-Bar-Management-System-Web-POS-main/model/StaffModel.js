export default class StaffModel {
    constructor(staffID , staffName , staffNIC , staffDob , jobCategory ,staffContactNo) {
        this._staffID = staffID ;
        this._staffName = staffName ;
        this._staffNIC = staffNIC ;
        this._staffDob = staffDob ;
        this._jobCategory = jobCategory ;
        this._staffContactNo = staffContactNo ;
    }

    get staffID() {
        return this._staffID ;
    }
    get staffName () {
        return this._staffName ;
    }
    get staffNIC () {
        return this._staffNIC ;
    }
    get staffDob () {
        return this._staffDob ;
    }
    get jobCategory () {
        return this._jobCategory ;
    }
    get staffContactNo () {
        return this._staffContactNo ;
    }
    set staffID(staffID) {
        this._staffID = staffID;
    }
    set staffName (staffName) {
        this._staffName = staffName;
    }
    set staffNIC (staffNIC) {
        this._staffNIC = staffNIC;
    }
    set staffDob (staffDob) {
        this._staffDob = staffDob;
    }
    set jobCategory (jobCategory) {
        this._jobCategory = jobCategory;
    }
    set staffContactNo (staffContactNo) {
        this._staffContactNo = staffContactNo;
    }
}