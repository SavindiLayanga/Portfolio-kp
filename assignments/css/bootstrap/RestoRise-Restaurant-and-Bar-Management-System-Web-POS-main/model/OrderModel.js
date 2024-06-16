export class OrderModel{
    constructor(order_date,order_id,customerID,total,discount,cash) {
        this.order_date=order_date;
        this.order_id=order_id;
        this.customerID=customerID;
        this.total=total;
        this.discount=discount;
        this.cash=cash;
    }

}