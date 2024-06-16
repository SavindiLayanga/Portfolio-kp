import { items, staffs, customers } from '/db/DB.js';

// Extract names
const itemNames = items.map(item => item.itemName);
const staffNames = staffs.map(staff => staff.staffName);
const customerNames = customers.map(customer => customer.customerName);

// Function to create a list item element
function createListItem(name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    return listItem;
}

// Populate list items
const itemList = document.getElementById('item-names-list');
itemNames.forEach(name => itemList.appendChild(createListItem(name)));

const staffList = document.getElementById('staff-names-list');
staffNames.forEach(name => staffList.appendChild(createListItem(name)));

const customerList = document.getElementById('customer-names-list');
customerNames.forEach(name => customerList.appendChild(createListItem(name)));
