export default class ItemModel {
    constructor(supplierId, supplierName, itemCategory, itemId, itemName, itemitemQTY, itemUnititemUnitPrice, suppliedDate) {
        this._supplierId = supplierId;
        this._supplierName = supplierName;
        this._itemCategory = itemCategory;
        this._itemId = itemId;
        this._itemName = itemName;
        this._itemitemQTY = itemitemQTY;
        this._itemUnititemUnitPrice = itemUnititemUnitPrice;
        this._suppliedDate = suppliedDate;
    }

    get supplierId() {
        return this._supplierId;
    }
    get supplierName() {
        return this._supplierName;
    }
    get itemCategory() {
        return this._itemCategory;
    }
    get itemId() {
        return this._itemId;
    }
    get itemName() {
        return this._itemName;
    }
    get itemitemQTY() {
        return this._itemitemQTY;
    }
    get itemUnititemUnitPrice() {
        return this._itemUnititemUnitPrice;
    }
    get suppliedDate() {
        return this._suppliedDate;
    }
    set supplierId(supplierId) {
        this._supplierId = supplierId;
    }
    set supplierName(supplierName) {
        this._supplierName = supplierName;
    }
    set itemCategory(itemCategory) {
        this._itemCategory = itemCategory;
    }
    set itemId(itemId) {
        this._itemId = itemId;
    }
    set itemName(itemName) {
        this._itemName = itemName;
    }
    set itemitemQTY(itemitemQTY) {
        this._itemitemQTY = itemitemQTY;
    }
    set itemUnititemUnitPrice(itemUnititemUnitPrice) {
        this._itemUnititemUnitPrice = itemUnititemUnitPrice;
    }
    set suppliedDate(suppliedDate) {
        this._suppliedDate = suppliedDate;
    }
}
