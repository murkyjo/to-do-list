const formElement = document.querySelector('#form-box')
const input = document.querySelector('#add-todo');
const list = document.querySelector('#todo-list');


formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.textContent = input.value;
    input.value = '';
    newTodo.classList = 'todo';
    list.append(newTodo);

});

list.addEventListener('click', function(e) {
    const completed = e.target.style.textDecoration = "line-through";
    });

list.addEventListener('dblclick', function(e) {
    e.target.remove();
});













