 let field = document.getElementById("field").value;
  let taskList = document.getElementById("taskList");
  let list = document.createElement("div");
  let inpvalue = document.getElementsByTagName("input")
function myFunction() {
  
  list.innerHTML = `<span class="lists">${field}</span>` + `<input type="checkbox">`;
  taskList.appendChild(list);
}
function done() {
    if
}