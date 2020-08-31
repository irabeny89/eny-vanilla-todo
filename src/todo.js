createHTMLTask = (listItem, input) => {
  listItem.innerHTML = `<input type="image" src="../assets/images/delete btn.png" alt="trash-icon">${input}<input id="checkbox" type="checkbox">`
  listItem
}

addTask = () => {
  const listItem = document.createElement('li')
  if (task.value) {
    createHTMLTask(listItem, task.value)
    document.querySelector('#taskList').appendChild(listItem)
  }
}

addButtonImage.addEventListener('click', addTask)