import StaffModel from "../model/StaffModel.js";
import { staffs } from "../db/db.js";

var recordIndex;

function loadTable() {
    $("#staff-tbl-tbody").empty();
    staffs.map((staff, index) => {
        console.log(staff);
        let record = `<tr>
            <td class="staff-id-value">${staff.staffId}</td>
            <td class="staff-name-value">${staff.staffName}</td>
            <td class="staff-nic-value">${staff.staffNIC}</td>
            <td class="staff-dob-value">${staff.staffDob}</td>
            <td class="staff-jobCategory-value">${staff.jobCategory}</td>
            <td class="staff-contactNo-value">${staff.staffContactNo}</td>
        </tr>`;
        $("#staff-tbl-tbody").append(record);
    });
}

$("#staff-submit").on('click', () => {
    var staffId = $('#staffId').val();
    var staffName = $('#staffName').val();
    var staffNIC = $('#staffNIC').val();
    var staffDob = $('#staffDob').val();
    var jobCategory = $('#jobCategory').val();
    var staffContactNo = $('#staffContactNo').val();

    // Regex patterns
    var staffIdPattern = /^S\d{3}$/; // Pattern to match 'S' followed by 3 digits
    var contactNoPattern = /^\d{10}$/;  // Pattern to match exactly 10 digits
    var staffNICPattern = /^(\d{12}|\d{9}[vV])$/; // Pattern to match 12 digits or 9 digits followed by 'v' or 'V'

    if (staffId === "" || staffName === "" || staffNIC === "" || staffDob === "" || jobCategory === "" || staffContactNo === "") {
        alert("All fields are required!");
        return;
    }
    if (!staffIdPattern.test(staffId)) {
        alert("Staff ID must follow the format 'S001'!");
        return;
    }
    if (!contactNoPattern.test(staffContactNo)) {
        alert("Contact number must be exactly 10 digits!");
        return;
    }
    if (!staffNICPattern.test(staffNIC)) {
        alert("NIC must be either 12 digits or 9 digits followed by 'v' or 'V'!");
        return;
    }

    let staff = new StaffModel(
        staffId, staffName, staffNIC, staffDob, jobCategory, staffContactNo
    );

    staffs.push(staff);

    loadTable();
    $("#staff-reset").click();
    alert("Staff has been successfully saved!");
});

$("#staff-update").on('click', () => {
    var staffId = $('#staffId').val();
    var staffName = $('#staffName').val();
    var staffNIC = $('#staffNIC').val();
    var staffDob = $('#staffDob').val();
    var jobCategory = $('#jobCategory').val();
    var staffContactNo = $('#staffContactNo').val();

    if (staffId === "" || staffName === "" || staffNIC === "" || staffDob === "" || jobCategory === "" || staffContactNo === "") {
        alert("All fields are required!");
        return;
    }
    if (!staffIdPattern.test(staffId)) {
        alert("Staff ID must follow the format 'S001'!");
        return;
    }
    if (!contactNoPattern.test(staffContactNo)) {
        alert("Contact number must be exactly 10 digits!");
        return;
    }
    if (!staffNICPattern.test(staffNIC)) {
        alert("NIC must be either 12 digits or 9 digits followed by 'v' or 'V'!");
        return;
    }

    let staffObj = staffs[recordIndex];

    staffObj.staffID = staffId;
    staffObj.staffName = staffName;
    staffObj.staffNIC = staffNIC;
    staffObj.staffDob = staffDob;
    staffObj.jobCategory = jobCategory;
    staffObj.staffContactNo = staffContactNo;

    loadTable();
    $("#staff-reset").click();
    alert("Staff record has been successfully updated!");
});

$("#staff-delete").on('click', () => {
    if (recordIndex !== undefined) {
        staffs.splice(recordIndex, 1);
        loadTable();
        $("#staff-reset").click();
        alert("Staff record has been successfully deleted!");
    } else {
        alert("Please select a record to delete.");
    }
});

$("#staff-reset").on('click', () => {
    $('#staff-form')[0].reset();
    recordIndex = undefined;
});

$("#staff-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".staff-id-value").text();
    let name = $(this).find(".staff-name-value").text();
    let nic = $(this).find(".staff-nic-value").text();
    let dob = $(this).find(".staff-dob-value").text();
    let jobCategory = $(this).find(".staff-jobCategory-value").text();
    let contactNo = $(this).find(".staff-contactNo-value").text();

    $("#staffId").val(id);
    $("#staffName").val(name);
    $("#staffNIC").val(nic);
    $("#staffDob").val(dob);
    $("#jobCategory").val(jobCategory);
    $("#staffContactNo").val(contactNo);
});

$(document).ready(() => {
    loadTable();
});
