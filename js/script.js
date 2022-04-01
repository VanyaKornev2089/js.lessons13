const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')


const todoData = []



const render = function() {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    todoData.forEach(function(item) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' +
        '</div>'

        if (item.completed) {
            todoComplited.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function() {
            item.completed = !item.completed
            render()
        })
        const todoItems = document.querySelectorAll('.todo-item')
        todoItems.forEach((items, index) => {
            const todoRemove = items.querySelector('.todo-remove')
            todoRemove.addEventListener('click', () => {
                items.remove()
                todoData.splice(index, 1)
            })
        })
    })
    
}


todoControl.addEventListener('submit', function(event) {
    event.preventDefault()
if (headerInput.value !=='') {
const newTodo = {
    text: headerInput.value,
    completed: false
}

todoData.push(newTodo)
headerInput.value = ''
}
render()
})