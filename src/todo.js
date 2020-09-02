addButtonImage.onclick = () => {
  if (taskInput.value) {
    const doc = document
    const task = doc.createElement('li')
    const inputTrash = doc.createElement('input')
    const inputCheckbox = doc.createElement('input')
    const taskTitle = doc.createElement('p')
  
    inputTrash.type = 'image'
    inputTrash.src = '../assets/images/delete btn.png'
    inputTrash.onclick = () => taskList.removeChild(task)
    
    inputCheckbox.type = 'checkbox'
    inputCheckbox.onclick = () => inputCheckbox.checked ? taskTitle.innerHTML = taskTitle.textContent.strike() : taskTitle.textContent = taskTitle.textContent
    taskTitle.textContent = taskInput.value
  
    // arrange in these order
    task.appendChild(inputTrash)
    task.appendChild(taskTitle)
    task.appendChild(inputCheckbox)
    
    taskList.appendChild(task)
    taskInput.value = ''
  }
  
}