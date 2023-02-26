let input = document.querySelector('.entered-list');
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
let list = document.querySelector(".list");
let completed = document.querySelector(".completed-list");

// //add btn disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
})

//add new item to list
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>&nbsp&nbsp${input.value}</p>
            <div class="item-btn">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-trash-can"></i>
            </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert ('Please enter a task');
    }
})

//remove from list and completed
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
      e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('fa-circle-check')) {
        let comp_list =e.target.parentElement.parentElement.children[0].innerHTML;

        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
        <p>${comp_list}</p>
            <div class="item-btn">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        `;
        e.target.parentElement.parentElement.remove();
        completed.appendChild(newItem);
    }
})


