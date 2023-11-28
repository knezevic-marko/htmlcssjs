function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Model"] = document.getElementById("Model").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["Year"] = document.getElementById("Year").value;
    formData["Fuel"] = document.getElementById("Fuel").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Search").getElementsByTagName('tbody') [0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Brand;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Year;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Fuel;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit  </a>
                        <a>Delete</a>`;
}

function resetForm(){
    document.getElementById("Brand").value = "";
    document.getElementById("Model").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Year").value = "";
    document.getElementById("Fuel").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Brand").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Year").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Fuel").value = selectedRow.cells[4].innerHTML;
}