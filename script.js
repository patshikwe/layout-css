/* =========== JS file ====================== */
// buttons
const btnAll = document.querySelectorAll(".btn");
const rowBtn = document.querySelector("#rowBtn");
const rowReverseBtn = document.querySelector("#rowReverseBtn");
const columnBtn = document.querySelector("#columnBtn");
const columnReverseBtn = document.querySelector("#columnReverseBtn");
const nowrapBtn = document.querySelector("#nowrapBtn");
const wrapBtn = document.querySelector("#wrapBtn");
const wrapReverseBtn = document.querySelector("#wrapReverseBtn");
// span
const rowText = document.querySelector("#rowText");
const rowReverseText = document.querySelector("#rowReverseText");
const columnText = document.querySelector("#columnText");
const columnReverseText = document.querySelector("#columnReverseText");
const nowrapText = document.querySelector("#nowrapText");
const wrapText = document.querySelector("#wrapText");
const wrapReverseText = document.querySelector("#wrapReverseText");
// div
const row = document.querySelector("#row");
const rowReverse = document.querySelector("#rowReverse");
const column = document.querySelector("#column");
const columnReverse = document.querySelector("#columnReverse");
const nowrap = document.querySelector("#nowrap");
const wrap = document.querySelector("#wrap");
const wrapReverse = document.querySelector("#wrapReverse");
const block = document.querySelector(".block");

// fonctions
const blockToRow = () => {
    if (row.classList.contains("block") === true) {
        row.classList.add("row");
        row.classList.remove("block");
        rowBtn.innerHTML = "row";
        rowText.innerHTML = `display : flex; <br> 
        flex-direction : row;`;
    } else {
        row.classList.add("block");
        row.classList.remove("row");
        rowBtn.innerHTML = "block";
        rowText.innerHTML = " Display : block;";
    }
    console.log("in blockToRow");
}

const blockToRowReverse = () => {
    if (rowReverse.classList.contains("block") === true) {
        rowReverse.classList.add("row-reverse");
        rowReverse.classList.remove("block");
        rowReverseBtn.innerHTML = "row-reverse";
        rowReverseText.innerHTML = `display : flex; <br> 
        flex-direction : row-reverse;`;
    } else {
        rowReverse.classList.add("block");
        rowReverse.classList.remove("row-reverse");
        rowReverseBtn.innerHTML = "block";
        rowReverseText.innerHTML = " Display : block;";
    }
    console.log("in blockToRowReverse");
}

const blockToColumn = () => {
    if (column.classList.contains("block") === true) {
        column.classList.add("column");
        column.classList.remove("block");
        columnBtn.innerHTML = "column";
        columnText.innerHTML = `display : flex; <br> 
        flex-direction : column;`;
    } else {
        column.classList.add("block");
        column.classList.remove("column");
        columnBtn.innerHTML = "block";
        columnText.innerHTML = " Display : block;";
    }
    console.log("in blockToColumn");
}

const blockToColumnReverse = () => {
    if (columnReverse.classList.contains("block") === true) {
        columnReverse.classList.add("column-reverse");
        columnReverse.classList.remove("block");
        columnReverseBtn.innerHTML = "column-reverse";
        columnReverseText.innerHTML = `display : flex; <br> 
        flex-direction : column-reverse;`;
    } else {
        columnReverse.classList.add("block");
        columnReverse.classList.remove("column-reverse");
        columnReverseBtn.innerHTML = "block";
        columnReverseText.innerHTML = " Display : block;";
    }
    console.log("in blockToColumnReverse");
}

for (let index = 0; index < btnAll.length; index++) {
    const btnElement = btnAll[index];

    btnElement.addEventListener('click', () => {

        switch (btnElement.id) {
            case "rowBtn":
                blockToRow();
                console.log(btnElement.id);
                break;
            case "rowReverseBtn":
                blockToRowReverse();
                console.log(btnElement.id);
                break;
            case "columnBtn":
                blockToColumn();
                console.log(btnElement.id);
                break;
            case "columnReverseBtn":
                blockToColumnReverse();
                console.log(btnElement.id);
                break;
            case "nowrapBtn":
                console.log(btnElement.id);
                break;
            case "wrapBtn":
                console.log(btnElement.id);
                break;
            case "wrapReverseBtn":
                console.log(btnElement.id);
                break;
            default:
                break;
        }
    });
}
