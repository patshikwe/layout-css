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
// div
const row = document.querySelector("#row");
const rowReverse = document.querySelector("#rowReverse");
const column = document.querySelector("#column");
const columnReverse = document.querySelector("#columnReverse");
const nowrap = document.querySelector("#nowrap");
const wrap = document.querySelector("#wrap");
const wrapReverse = document.querySelector("#wrapReverse");
const block = document.querySelector(".block");

for (let index = 0; index < btnAll.length; index++) {
    const btnElement = btnAll[index];

    btnElement.addEventListener('click', () => {

        switch (btnElement.id) {
            case "rowBtn":
                console.log(btnElement.id);
                break;
            case "rowReverseBtn":
                console.log(btnElement.id);
                break;
            case "columnBtn":
                console.log(btnElement.id);
                break;
            case "columnReverseBtn":
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
