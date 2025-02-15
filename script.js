const btnAll = document.querySelectorAll(".btn");
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

        switch (btnElement.innerHTML) {
            case "row":
                console.log("row");
                break;
            case "row-reverse":
                console.log("row-reverse");
                break;
            case "column":
                console.log("column");
                break;
            case "column-reverse":
                console.log("column-reverse");
                break;
            case "nowrap":
                console.log("nowrap");
                break;
            case "wrap":
                console.log("wrap");
                break;
            case "wrap-reverse":
                console.log("wrap-reverse");
                break;
            default:
                break;
        }
    });
}
