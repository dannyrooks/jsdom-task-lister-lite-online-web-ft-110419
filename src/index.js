//How to start on a JavaScript lab

//1. Build out the HTML template that shows a user the basic layout that doesn't require server-loaded information 

//2. If you have information that you need loaded from the server, or JS logic that needs to be implemented immediately, look at your website and determine which elements are going to be affected by this. Select those elements. Make the fetch request and/or complete the logic to append it to the DOM. 

//3. Look at your website and determine which other elements are going to be changed or interacted with by the user. Select those elements. 

//4. Determine which of your selected elements will, when interacted with, be responsible for making changes on the DOM and put event listeners on them
//HINT: 90% of the time it's something the user clicks on

//5. Define the event listener callbacks to complete the logic

const form = document.getElementById("create-task-form")
const description = document.getElementById("new-task-description");
const newTaskPriority = document.getElementById("new-task-priority");
const taskList = document.getElementById("tasks")

form.addEventListener('submit', handleSubmit)
  
function handleSubmit(event){
  event.preventDefault() 
  //We expect the value of the description element to end up in the taskList ul as an li tag 
  let newTask = description.value
  //let li = document.createElement('li')
  //li.innerText = newTask 
  //taskList.appendChild(li)
  taskList.innerHTML += `
    <li>${newTask}</li>
  `
  
  description.value = ""
}
