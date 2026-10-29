const divContainer = document.getElementById("auth");
const codeInput = document.getElementById("authCode");
const submitBtn = document.getElementById("submitAuth");
const body = document.querySelector("body");

submitBtn.addEventListener("click", authenticate);

function authenticate() {
    if (codeInput.value === "567234") {
        console.log("ok! true");
        divContainer.classList.add("inactive");
    } else {
        alert("retry again");
    }
    console.log("auth:", divContainer);
console.log("authCode:", codeInput);
console.log("submitAuth:", submitBtn);
console.log("body:", body);
}
