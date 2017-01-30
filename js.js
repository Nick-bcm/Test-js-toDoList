var isFilter = false;
var toDoList = [];
var newJob = "";

document.addEventListener("DOMContentLoaded", function (event) {
    render();
});

function onFilter(e) {
    isFilter = e.checked;
    render();
}

function add() {
    toDoList[toDoList.length] = { toDo: newJob, isDone: false };
    newJob = "";
    document.querySelector("#addText").value = newJob;
    render();
}

function done(index) {
    toDoList[index].isDone = !toDoList[index].isDone;
    render();
    
}

function remove(index) {
    toDoList.splice(index, 1);
    render();
}

function text(inText) {
    newJob = inText.value;
}

function render() {

    var ul = document.querySelector("#toDoList");

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    var list;
    if (isFilter) {
        list = toDoList.filter(function (item) {
            return !item.isDone;
        });
    } else {
        list = toDoList;
    }
    for (var i = 0; i < list.length; i++) {
        var job = list[i];
        //var newLi = document.createElement('li');
        //newLi.innerHTML = job.toDo;
        //if (job.isDone) {
        //    newLi.classList.add("done");
        //}
        //newLi.id = i;
        ul.appendChild(createLi(job, i));
    }
}

function createLi(item, i) {
    var newLi = document.createElement('li');
    newLi.innerHTML = item.toDo;
    if (item.isDone) {
        newLi.className += "done";
    }
    newLi.id = 1;

    var doneBtn = document.createElement('a');
    doneBtn.className += " doneBtn";
    doneBtn.className += " jobBtns";
    //doneBtn.onclick += "done(" + i + ");";
    doneBtn.setAttribute("onclick", "done(" + i + ");");
    newLi.appendChild(doneBtn);

    var rem = document.createElement('a');
    rem.className += " removeBtn";
    rem.className += " jobBtns";
    rem.setAttribute("onclick", "remove(" + i + ");");
    newLi.appendChild(rem);

    return newLi;
}