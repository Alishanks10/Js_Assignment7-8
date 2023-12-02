let totalRows = 0;
let totalCols = 0;



const btnGenerateTable = document.querySelector("#b1");

const btnAddCol = document.querySelector("#b2");
btnAddCol.style.marginBottom = "10px";
btnAddCol.style.marginLeft = "10px";
const btnAddRow = document.querySelector("#b3");
btnAddRow.style.marginBottom = "10px";

const inputRows = document.querySelector("#t1");
const inputCols = document.querySelector("#t2");



const createTable = function () {
  if (inputRows.value && inputCols.value) {
    let body = document.querySelector("body");
    body.innerHTML = "";
    body.append(btnAddRow);
    body.append(btnAddCol);
    const table = document.createElement("table");
    table.id = "rowColTable";
    table.innerHTML = createNewTableRow(inputRows.value, inputCols.value);
    body.append(table);
    totalRows = inputRows.value;
    totalCols = inputCols.value;
  }
}


const createNewTableRow = function (rowsCount, colsCount) {
  let tableRowContent = "";
  for (let index = 0; index < rowsCount; index++) {
    let tableDataContent = "";
    for (let index = 0; index < colsCount; index++) {
      tableDataContent = tableDataContent + "<td></td>";
    }
    tableRowContent = tableRowContent + "<tr>" + tableDataContent + "</tr>";
  }
  return tableRowContent;
}

function addNewRow() {
  if (totalRows > 0) {
    const table = document.getElementById("rowColTable");
    const newRow = table.insertRow(0);
    for (let index = 0; index < totalCols; index++) {
      newRow.insertCell(index);
    }
    totalRows++;
  }
}

function addColumn() {
  if (totalRows > 0) {
    const table = document.getElementById("rowColTable");
    let rows = table.children[0].rows;
    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      element.insertCell(0);
    }
    totalCols++;
  }
}