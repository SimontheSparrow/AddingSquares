let num = 1;

function addElement() {
    const div = document.createElement("div")
    document.body.appendChild(div);
    div.textContent = num;

    if (num % 5 == 0) {
        div.classList.add("circle")
    }
    num++;
}



document.getElementById("btnAddElement").addEventListener("click", addElement)