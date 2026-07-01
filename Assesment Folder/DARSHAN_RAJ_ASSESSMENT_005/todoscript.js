let inputField = document.getElementById("input");
let para = document.getElementById("para");


function action() {
    let text = inputField.value;
    if(text === "") {
        alert("Text cannot be null");
    }
    else{
        let li = document.createElement("li");
        li.textContent = text;
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function() {
            li.remove();
        };

        li.appendChild(btn);
        para.appendChild(li);
        inputField.value = "";
    }
}
