let inputs = document.getElementById('text-Input');
let text = document.querySelector('.tasks');
var addIcon = document.getElementById('image-icon')
addIcon = addIcon.addEventListener('click', function()
 {
    if(inputs.value == ""){
        alert("Todo can't be empty!");
    }else{
        let newElement = document.createElement("li");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        console.log(newElement);
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("i").addEventListener("click", remove);
        newElement.onclick = function(){
            newElement.classList.toggle('completd')
        }
        function remove(){
            newElement.remove();
        }
    }
 });
// console.log(text);
