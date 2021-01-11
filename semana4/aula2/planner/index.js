
function addTask(){
const input = document.getElementById('tarefa')
const inputValue = input.value
//console.log('Valor input', inputValue)

const select = document.getElementById('dias-semana')
const selectValue = select.value
//console.log('Valor select', selectValue)

const div = document.getElementById(selectValue)
div.innerHTML += `<p class='task-item'>${inputValue}</p>`
}

const taskContainer = document.getElementById("task-container")
taskContainer.addEventListener('click', riskItem)

function riskItem(e){
    console.log(e.target)
    if(e.target.classList.contains('task-item')){
        e.target.classList.toggle('risked-item')
    }
}

// (Em progresso) function clearTask(){
//     const div = document.getElementById(task-container)
//     if(confirm('Você realmente quer limpar as tarefas?')){
//         limpo.value = ` `
//     }
// })