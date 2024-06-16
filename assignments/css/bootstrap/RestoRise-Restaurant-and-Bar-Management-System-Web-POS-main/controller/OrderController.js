import {items} from "../db/db.js";
import ItemModel from "../model/ItemModel.js";

import {customers} from "../db/db.js";
import CustomerModel from "../model/CustomerModel.js";

import {order_db} from "../db/db.js";
import {OrderModel} from "../model/OrderModel.js";

import {order_details_db} from "../db/db.js";
import {orderModel} from "../model/OrderDetailsModel.js";

let customerIdCB = $('#customer_id1');
let itemIdCB = $('#item_code1');
let orderId=$('#order_id');
let itemName=$('#item_name1');
let itemUnititemUnitPrice=$('#price1');
let qtyOnHand=$('#qty_on_hand');
let itemitemQTY=$('#getQty');
let customerName=$('#customer_name1');
let total=$('#total');
let discountInput = $('#discount');
let subTotalInput = $('#sub_total');
let cashInput=$('#Cash');
let balanceInput=$('#balance');


let add = $('#addBtn');
let resetItemDetails=$('#resetItemDetailsBtn');
let submitBtn=$('#submitBtn2');
let updateBtn=$('#updateBtn2');
let deleteBtn=$('#deleteBtn2');
let resetBtn=$('#resetBtn2');
let updateBtn2=$('#UpdateBtn3');
let removeBtn=$('#removeBtn');

let itemsss = [];

let searchBtn=$('#search');
let searchField=$('#searchField');

let search_order=true;
/*generate current date*/
function generateCurrentDate(){
    $("#order_date").val(getCurrentDate());
}

function getCurrentDate() {
    // Get the current date
    var currentDate = new Date();

    // Format the date as desired
    var formattedDate = currentDate.toLocaleDateString();

    // Display the date (you can modify this based on how you want to use it)
    console.log("Current Date: " + formattedDate);
    return formattedDate;
}


$('#order_page').on('click', function() {
    resetBtn.click();
    updateBtn.prop("disabled", true);
    deleteBtn.prop("disabled", true);
    removeBtn.prop("disabled",true);
    updateBtn2.prop("disabled",true);
    searchField.attr("placeholder", "Search Order Id Here");

});

/*Function to populate the CustomerId Combo Box*/
function populateCustomerIDs() {

    // Clear existing options except the default one
    customerIdCB.find("option:not(:first-child)").remove();

    // Iterate through the customerArray and add options to the select element
    for (let i = 0; i < customers.length; i++) {
        customerIdCB.append($("<option>", {
            value: customers[i].customerID,
            text: customers[i].customerID
        }));
    }
}

/*Function to populate the ItemId Combo Box*/
function populateItemIDs() {

    // Clear existing options except the default one
    itemIdCB.find("option:not(:first-child)").remove();

    // Iterate through the customerArray and add options to the select element
    for (let i = 0; i < items.length; i++) {
        itemIdCB.append($("<option>", {
            value: items[i].itemId,
            text: items[i].itemId
        }));
    }
}

function generateOrderId() {
    let highestOrderId = 0;

    for (let i = 0; i < order_db.length; i++) {
        // Extract the numeric part of the item code
        const numericPart = parseInt(order_db[i].order_id.split('-')[1]);

        // Check if the numeric part is greater than the current highest
        if (!isNaN(numericPart) && numericPart > highestOrderId) {

            highestOrderId = numericPart;


        }
    }
    // Increment the highest numeric part and format as "item-XXX"
    return `order-${String(highestOrderId + 1).padStart(3, '0')}`;
}

itemIdCB.on("change", function() {
    // Capture the selected value in a variable
    let selectedValue = $(this).val();

    let itemObj = $.grep(items, function(item) {
        return item.itemId === selectedValue;
    });

    if (itemObj.length > 0) {
        // Access the first element in the filtered array
        itemName.val(itemObj[0].itemName); // Assuming there is an 'item_name' property
        itemUnititemUnitPrice.val(itemObj[0].itemUnititemUnitPrice);
        qtyOnHand.val(itemObj[0].itemitemQTY);
    }

    // Check if the item is already in the itemsss array
    let existingItem = itemsss.find(item => item.itemId === selectedValue);

    if (existingItem) {
        updateBtn2.prop("disabled", false);
        removeBtn.prop("disabled",false);
        add.prop("disabled", true);
        itemitemQTY.val(existingItem.qtyValue);
    }
});

customerIdCB.on("change", function() {
    // Capture the selected value in a variable
    let selectedValue = $(this).val();

    let customerObj = $.grep(customers, function(customer) {
        return customer.customerID === selectedValue;
    });

    if (customerObj.length > 0) {
        // Access the first element in the filtered array
        customerName.val(customerObj[0].customerName);
    }
});

/* Function to populate the table with itemsss*/
function populateItemTable() {
    $('tbody').eq(2).empty();
    itemsss.map((item) => {
        $('tbody').eq(2).append(
            `<tr>
                <th scope="row">${item.itemId}</th>
                <td>${item.itemName}</td>
                <td>${item.priceValue}</td>
                <td>${item.qtyOnHand}</td>
                <td>${item.qtyValue}</td>
            </tr>`
        );
    });
}

/*Event handler for the "Add" button*/
add.on("click", function () {
    let itemCodeValue = itemIdCB.val();
    let qtyValue = parseInt(itemitemQTY.val());

    if (qtyOnHand.val() >= qtyValue) {
        let itemNameValue = itemName.val();
        let priceValue = itemUnititemUnitPrice.val();
        let qtyOnHandValue = qtyOnHand.val();

        /*Add a new item to the itemsss array*/
        itemsss.push({
            itemId: itemCodeValue,
            itemName: itemNameValue,
            priceValue: priceValue,
            qtyOnHand: qtyOnHandValue,
            qtyValue: qtyValue
        });

        /*Populate the Item table*/
        populateItemTable();

        /*Reset the item details*/
        resetItemDetails.click();
        alert("Product Successful Add to !!!");
    } else {
        alert("Something went wrong! Check Stock or Inputs");
    }

    total.val(calculateTotal());

});

updateBtn2.on("click",function () {

    let itemCodeValue = itemIdCB.val();
    let qtyValue = parseInt(itemitemQTY.val());

    /*Check if the item is already in the itemsss array*/
    let existingItem = itemsss.find(item => item.itemId === itemCodeValue);

    if (existingItem) {
        if (qtyOnHand.val() >= qtyValue) {
            /*Update the quantity of the existing item*/
            existingItem.qtyValue = qtyValue;

            /*Populate the Item table*/
            populateItemTable();

            /*Reset the item details*/
            resetItemDetails.click();
        } else {
            alert("Out of Stock !");
        }
    }

    total.val(calculateTotal());

});


resetItemDetails.on("click", function () {
    itemIdCB.val('Select Item Code');
    itemitemQTY.val('');
    itemName.val('');
    itemUnititemUnitPrice.val('');
    qtyOnHand.val('');
    updateBtn2.prop("disabled", true);
    removeBtn.prop("disabled",true);
    add.prop("disabled", false);
});

function calculateTotal() {
    let total = 0;
    itemsss.forEach((item) => {
        total += item.priceValue * item.qtyValue;
    });
    return total;
}

discountInput.on("input", function() {
    const discountValue = parseFloat(discountInput.val()) || 0; // Get the discount value as a float
    const totalValue = calculateTotal(); // Calculate the total based on your logic
    const subtotalValue = totalValue - (totalValue * (discountValue / 100)); // Calculate the subtotal

    // Update the sub-total input field
    subTotalInput.val(subtotalValue);
});

cashInput.on("input", function() {
    const cashValue = parseFloat(cashInput.val()) || 0; // Get the cash value as a float
    const totalValue = parseFloat(subTotalInput.val())||0; // Calculate the total based on your logic
    const balanceValue = cashValue - totalValue; // Calculate the balance

    // Update the balance input field
    balanceInput.val(balanceValue);
});

submitBtn.on("click", function (e) {

    e.preventDefault();

    // Get the data needed for the order
    const orderDate = $("#order_date").val();
    const orderId = $("#order_id").val();
    const customerId = $("#customer_id1").val();
    const total = $("#total").val();
    const discount = $("#discount").val();
    const cash = $("#Cash").val();

    // Validate order data
    if (!orderDate) {
        alert("Please select a valid date!");
        return;
    }

    if (!orderId) {
        alert("Please select a valid OrderID!");
        return;
    }

    if (customerId === "Select Customer Id") {
        alert("Please select a valid Customer ID!");
        return;
    }

    if (!total || parseFloat(total) <= 0) {
        alert("Total must be a positive number!");
        return;
    }

    if (!cash || parseFloat(cash) < 0) {
        alert("Cash amount must be a positive number");
        return;
    }

    const discountValue = parseFloat(discount);
    if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
        alert("Discount must be a number between 0 and 100");
        return;
    }

    // Create an order instance
    const order = new OrderModel(orderDate, orderId, customerId, total, discount, cash);

    // Add the order to the order_db array
    order_db.push(order);

    // Loop through the itemsss in your order details
    itemsss.forEach(item => {
        const orderDetail = new orderModel(orderId, item.itemId, item.priceValue, item.qtyValue);
        order_details_db.push(orderDetail);

        items.forEach((itemObj) => {
            if (itemObj.itemId === item.itemId) {
                itemObj.itemitemQTY -= item.qtyValue;
            }
        });
    });


    // Display a success message

    alert("Purchase Successful!!!");

    resetBtn.click();
});

resetBtn.on("click", function () {
    // Reset the form fields to their initial state
    generateCurrentDate();
    populateCustomerIDs();
    populateItemIDs();
    orderId.val(generateOrderId());
    $("#total").val('');       // Reset the total
    $("#discount").val('');    // Reset the discount
    $("#Cash").val('');        // Reset the cash input
    customerName.val('');
    itemName.val('');
    itemUnititemUnitPrice.val('');
    qtyOnHand.val('');
    total.val('');
    discountInput.val('');
    cashInput.val('');
    subTotalInput.val('');
    balanceInput.val('');

    /*Clear the itemsss array*/
    itemsss = [];

    /*Clear the item order table*/
    $("#item-order-table tbody").empty();

    updateBtn.prop("disabled", true);
    deleteBtn.prop("disabled", true);
    submitBtn.prop("disabled",false);

});

deleteBtn.on("click", function () {
    /*Assuming you have an orderId that you want to delete*/
    const orderIdToDelete = orderId.val();

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
    }).then((result) => {
        if (result.isConfirmed) {
            /* Find and remove the order with the matching orderId from the order_db array*/
            const indexToDelete = order_db.findIndex(order => order.order_id === orderIdToDelete);
            if (indexToDelete !== -1) {
                order_db.splice(indexToDelete, 1);
            }

            /*Remove the corresponding order details from order_details_db (if needed)*/
            for (let i = 0; i < order_details_db.length; i++) {
                if(order_details_db[i].order_id===orderIdToDelete){
                    order_details_db.splice(i, 1);
                }

            }

            itemsss.forEach(item => {
                items.forEach((itemObj) => {
                    if (itemObj.itemId === item.itemId) {
                        itemObj.itemitemQTY += item.qtyValue;
                    }
                });
            });

            resetBtn.click();

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )

        }
    });

});

removeBtn.on("click", function () {
    let index = itemsss.findIndex(item => item.itemId === itemIdCB.val());
    itemsss.splice(index, 1);
    populateItemTable();
    resetItemDetails.click();
    total.val(calculateTotal());
});

$('#item-order-table').on('click', 'tbody tr', function() {

    let itemCodeValue = $(this).find('th').text();
    let itemNameValue = $(this).find('td:eq(0)').text();
    let priceValue = $(this).find('td:eq(1)').text();
    let qtyOnHandValue = $(this).find('td:eq(2)').text();
    let qtyValue=$(this).find('td:eq(3)').text();

    itemIdCB.val(itemCodeValue);
    itemName.val(itemNameValue);
    itemUnititemUnitPrice.val(priceValue);
    qtyOnHand.val(qtyOnHandValue);
    itemitemQTY.val(qtyValue);

    updateBtn2.prop("disabled", false);
    removeBtn.prop("disabled",false);
    add.prop("disabled", true);


});

/*Modify the event handler for clicking on a row in the order details table*/
function populateFields(orderIdValue){

    /*Find the corresponding order in the order_db array*/
    let order = order_db.find(order => order.order_id === orderIdValue);

    /*Check if the order is found*/
    if (order) {
        /*Populate the order details on the order page*/
        orderId.val(order.order_id);
        $("#order_date").val(order.order_date);
        customerIdCB.val(order.customerID);
        total.val(order.total);
        discountInput.val(order.discount);

        /*Calculate the subtotal and update the input*/
        const discountValue = parseFloat(discountInput.val()) || 0;
        const totalValue = parseFloat(total.val()) || 0;

        const subtotalValue = totalValue - (totalValue * (discountValue / 100));
        subTotalInput.val(subtotalValue.toFixed(2)); // Use toFixed to round to two decimal places

        cashInput.val(order.cash);

        /*Calculate the balance and update the input*/
        const cashValue = parseFloat(cashInput.val()) || 0;
        const balanceValue = cashValue - subtotalValue;
        balanceInput.val(balanceValue.toFixed(2)); // Use toFixed to round to two decimal places

        /*Populate the customer name based on the selected customer ID*/
        let customerObj = $.grep(customers, function(customer) {
            return customer.customerID === order.customerID;
        });

        if (customerObj.length > 0) {
            /*Access the first element in the filtered array*/
            customerName.val(customerObj[0].name);
        }

        /*Populate the itemsss table on the order page*/
        itemsss = order_details_db
            .filter(orderDetail => orderDetail.order_id === orderIdValue)
            .map(orderDetail => {
                /*Find the corresponding item in the items array*/
                let item = items.find(item => item && item.itemId === orderDetail.item_id);

                if (item) {
                    return {
                        itemId: item.itemId,
                        itemName: item.itemName,
                        priceValue: item.itemUnititemUnitPrice,
                        qtyOnHand: item.itemitemQTY,
                        qtyValue: orderDetail.itemitemQTY
                    };
                } else {
                    /*Handle the case where the item is not found*/
                    console.error(`Item not found for item code: ${orderDetail.item_code}`);
                    return null; /*or handle it accordingly*/
                }
            });

        /*Filter out itemsss that are null (not found)*/
        itemsss = itemsss.filter(item => item !== null);

        populateItemTable();

        updateBtn.prop("disabled", false);
        deleteBtn.prop("disabled", false);
        submitBtn.prop("disabled",true);

    } else {
        /*Show an error message if the order is not found*/
        alert("Order Not Found ! , The selected order details could not be found.");
    }
}

searchBtn.on("click",function (){
    if(search_order){
        populateFields(searchField.val());
        searchField.val('');
    }
});
