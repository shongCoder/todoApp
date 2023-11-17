const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const comDoList = document.querySelector("#complete_list");

const TODOS_KEY = "todos"
const COMDOS_KEY = "comdos"

let toDos = [];
let comDos = [];

function saveTodos() { // 스토리지 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    localStorage.setItem(COMDOS_KEY, JSON.stringify(comDos)); // array로 저장!
}

function deleteComDo(event) {
    const delLi = event.target.parentElement;
    delLi.remove();
    console.log(delLi);
    comDos = comDos.filter((toDo) => parseInt(toDo.id) !== parseInt(delLi.id));
    saveTodos();
}

function paintComdo(delTodo) {
        const comDoLi = document.createElement("li");
        comDoLi.id = delTodo.id;
        const comDospan = document.createElement("span");
        comDospan.innerText = delTodo.text;
        const delBtn = document.createElement("button");
        delBtn.innerText = '';
        comDoLi.appendChild(comDospan);
        function saveTime(){
            const date = new Date();
            const dateYear = String(date.getFullYear()).padStart(2, "0");
            const dateMonth = String(date.getMonth()).padStart(2, "0");
            const dateDay = String(date.getDay()).padStart(2, "0");
            const toDoDate = document.createElement("div");
            toDoDate.innerText = `${dateYear}.${dateMonth}.${dateDay}`
            comDoLi.appendChild(toDoDate);
        }
        saveTime();
        comDoLi.appendChild(delBtn);
        comDoList.appendChild(comDoLi);
        delBtn.addEventListener("click", deleteComDo);
}

function deleteTodo(event) { // 삭제 버튼 함수
    const delLi = event.target.parentElement;
    const delText = event.target.parentElement.firstChild.textContent;
    delLi.remove();
    console.log(typeof delLi.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
    const newComDoObj = {
        text: delText,
        id: delLi.id,
    }
    comDos.push(newComDoObj);
    saveTodos();
    paintComdo(newComDoObj);
}

function paintTodo(newTodo) { // 리스트 노출
    const toDoLi = document.createElement("li");
    toDoLi.id = newTodo.id;
    const toDospan = document.createElement("span");
    toDospan.innerText = newTodo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = '';
    toDoLi.appendChild(toDospan);
    function saveTime(){
        const date = new Date();
        const dateYear = String(date.getFullYear()).padStart(2, "0");
        const dateMonth = String(date.getMonth()).padStart(2, "0");
        const dateDay = String(date.getDay()).padStart(2, "0");
        const toDoDate = document.createElement("div");
        toDoDate.innerText = `${dateYear}.${dateMonth}.${dateDay}`
        toDoLi.appendChild(toDoDate);
    }
    saveTime();
    toDoLi.appendChild(delBtn);
    toDoList.appendChild(toDoLi);
    delBtn.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) { // 입력값 저장
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) { // 새로고침해도 리스트 노출
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

const completedTodos = localStorage.getItem(COMDOS_KEY);

if(completedTodos !== null) { // 새로고침해도 리스트 노출
    const parsedTodos = JSON.parse(completedTodos);
    comDos = parsedTodos;
    parsedTodos.forEach(paintComdo);
}
