
let taskArrayList = [];
loadData();

function addTask(){
    let task= document.getElementById("txtTask").value;
    taskArrayList.push(task);
    loadData();
}

function loadData() {
    let body="";
    taskArrayList.forEach(element => {
        body+=
        `<li class="list-group-item list-group-item-light">
            <input class="form-check-input me-1" type="checkbox" value="" id="myCheck">
            <label class="form-check-label" for="firstCheckbox">${element}</label>
        </li>`
    });
    document.getElementById("unorderList").innerHTML=body;
}