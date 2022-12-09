const form = document.querySelector('.add-form');
const taskList = document.querySelector('.tasks');
const searchInput = document.querySelector('.search');

createTemplate = (task) => {
    let html = "<li class='list-group-item d-flex justify-content-between align-items-center'><span>" + task + "</span><button class='btn delete btn-danger'>Delete</button></li>";
    taskList.innerHTML += html
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const task = form.add.value.trim();
    if (task.length){
        createTemplate(task);
        form.reset()
    }
});

taskList.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

const filterTasks = (text) => {
    Array.from(taskList.children).filter((task) => {
        console.log('Görevdeki yazı: ', task.textContent.toLowerCase(), 'Arama: ', text)
        console.log()
        console.log(task.textContent.toLowerCase().includes(text))
        taskText = task.textContent.toLowerCase();
        return !taskText.includes(text);
    }).forEach((task) => {
        task.classList.add('filtered');
    });
    Array.from(taskList.children).filter((task) => {
        console.log('Görevdeki yazı: ', task.textContent.toLowerCase(), 'Arama: ', text)
        console.log()
        console.log(task.textContent.toLowerCase().includes(text))
        taskText = task.textContent.toLowerCase();
        return taskText.includes(text);
    }).forEach((task) => {
        task.classList.remove('filtered');
    });
};

searchInput.addEventListener('keyup', e => {
    const text = e.target.value.trim().toLowerCase();
    filterTasks(text)
    console.log(text)
});