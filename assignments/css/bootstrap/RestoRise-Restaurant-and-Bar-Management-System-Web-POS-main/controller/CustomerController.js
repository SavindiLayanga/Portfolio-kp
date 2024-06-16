import CustomerModel from "../model/CustomerModel.js";
import { customers } from "../db/db.js";

var recordIndex;

function loadTable() {
    $("#customer-tbl-tbody").empty();
    customers.map((customer, index) => {
        console.log(customer);
        let record = `<tr>
            <td class="customer-id-value">${customer.customerID}</td>
            <td class="customer-customerName-value">${customer.customerName}</td>
            <td class="customer-customerNIC-value">${customer.customerNIC}</td>
            <td class="customer-customerContactNo-value">${customer.customerContactNo}</td>
        </tr>`;
        $("#customer-tbl-tbody").append(record);
    });
}

$("#customer-submit").on('click', () => {
    var customerId = $('#customerId').val();
    var customerName = $('#customerName').val();
    var customerNIC = $('#customerNIC').val();
    var customerContactNo = $('#customerContactNo').val();

    // Regex patterns
    var customerIdPattern = /^C\d{3}$/; // Pattern to match 'C' followed by 3 digits
    var contactNoPattern = /^\d{10}$/;  // Pattern to match exactly 10 digits
    var customerNICPattern = /^(\d{12}|\d{9}[vV])$/; // Pattern to match 12 digits or 9 digits followed by 'v' or 'V'

    if (customerId === "" || customerName === "" || customerNIC === "" || customerContactNo === "") {
        alert("All fields are required!");
        return;
    }
    if (!customerIdPattern.test(customerId)) {
        alert("Customer ID must follow the format 'C001'!");
        return;
    }
    if (!contactNoPattern.test(customerContactNo)) {
        alert("Contact number must be exactly 10 digits!");
        return;
    }
    if (!customerNICPattern.test(customerNIC)) {
        alert("NIC must be either 12 digits or 9 digits followed by 'v' or 'V'!");
        return;
    }

    // create an object - Class Syntax
    let customer = new CustomerModel(
        customerId, customerName, customerNIC, customerContactNo
    );

    // push to the array
    customers.push(customer);

    loadTable();
    $("#customer-reset").click();
    alert("Customer has been successfully saved!");
});

$("#customer-update").on('click', () => {
    var customerId = $('#customerId').val();
    var customerName = $('#customerName').val();
    var customerNIC = $('#customerNIC').val();
    var customerContactNo = $('#customerContactNo').val();

    // Regex patterns
    var customerIdPattern = /^C\d{3}$/; // Pattern to match 'C' followed by 3 digits
    var contactNoPattern = /^\d{10}$/;  // Pattern to match exactly 10 digits
    var customerNICPattern = /^(\d{12}|\d{9}[vV])$/; // Pattern to match 12 digits or 9 digits followed by 'v' or 'V'

    if (customerId === "" || customerName === "" || customerNIC === "" || customerContactNo === "") {
        alert("All fields are required!");
        return;
    }
    if (!customerIdPattern.test(customerId)) {
        alert("Customer ID must follow the format 'C001'!");
        return;
    }
    if (!contactNoPattern.test(customerContactNo)) {
        alert("Contact number must be exactly 10 digits!");
        return;
    }
    if (!customerNICPattern.test(customerNIC)) {
        alert("NIC must be either 12 digits or 9 digits followed by 'v' or 'V'!");
        return;
    }

    let customerObj = customers[recordIndex];

    customerObj.customerID = customerId;
    customerObj.customerName = customerName;
    customerObj.customerNIC = customerNIC;
    customerObj.customerContactNo = customerContactNo;

    loadTable();
    $("#customer-reset").click();
    alert("Customer record has been successfully updated!");
});

$("#customer-delete").on('click', () => {
    customers.splice(recordIndex, 1);
    loadTable();
    $("#customer-reset").click();
});

$("#customer-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".customer-id-value").text();
    let cusName = $(this).find(".customer-customerName-value").text();
    let cusNIC = $(this).find(".customer-customerNIC-value").text();
    let cusContactNo = $(this).find(".customer-customerContactNo-value").text();

    $("#customerId").val(id);
    $("#customerName").val(cusName);
    $("#customerNIC").val(cusNIC);
    $("#customerContactNo").val(cusContactNo);
});
$(document).ready(() => {
    loadTable();
});