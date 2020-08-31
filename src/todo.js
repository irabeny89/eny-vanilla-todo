addTask = () => {
  const listItem = document.createElement('li')
  createHTMLTask(listItem, task.value)
  document.querySelector('#taskList').appendChild(listItem)
}

createHTMLTask = (listItem, input) => {
  listItem.innerHTML = `<input type="image" src="../assets/images/delete btn.png" alt="trash-icon">${input}<input id="checkbox" type="checkbox">`
  listItem
}

addButtonImage.addEventListener('click', addTask)