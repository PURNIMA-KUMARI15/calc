let display = document.querySelector(".up");
let expression = "";

function addval(value) {
    expression += value;
    //expression=eval(expression);
    display.innerText = expression;
}
function calculate() {
    expression = eval(expression);
    display.innerText = expression;

}

function cleardisplay() {
    expression = "";
    display.innerText = "0";
}
function backspace(){
    expression = expression.slice(0, -1);

    if(expression === ""){
        display.innerText = "0";
    } else {
        display.innerText = expression;
    }
}
