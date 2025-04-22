let titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = "Bienvenidos a mi sitio web";
titulo.style.color = "blue";

let parrafos = document.getElementsByTagName("li");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red";
    parrafos[i].style.fontSize = "15px";
    parrafos[i].style.fontFamily = "Arial";
}

let parrafos2 = document.querySelectorAll("li");
parrafos2.forEach((parrafo) => {
    parrafo.insertAdjacentHTML("beforeend", "<strong> - Este es un elemento de la lista</strong>"); 
})


function agregarElemento() {
    let nuevoElemento = document.createElement("li");
    let inputTexto = document.getElementById("inputTexto").value;
    let lista = document.getElementById("lista");  
    lista.appendChild(nuevoElemento).innerText = inputTexto;
}

function eliminarElemento() {
    let lista = document.getElementById("lista");
    let ultimoElemento = lista.lastElementChild;
    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    } else {
        alert("No hay más elementos para eliminar.");
    }   
}


function resaltar(){
   let parrafos = document.getElementsByClassName("parrafo");
   for( p of parrafos){
       p.classList.add("resaltado");
   }

}   

function ocultar(){
    let parrafos = document.getElementsByClassName("parrafo");
    for(  p of parrafos){
        p.classList.toggle("oculto");
    }
}

//Ejercicio 4
document.getElementById("taskForm").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault(); // Previene la acción por defecto del formulario
    let inputTexto = document.getElementById("taskInput").value;
    if (inputTexto.trim() !== "") {
        addTaskToList(inputTexto);
        clearInputField();
    }
}

function addTaskToList(taskText) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = taskText;

    // Agrega un evento para marcar como completado al hacer clic
    nuevoElemento.addEventListener("click", toggleTaskCompletion);

    let lista = document.getElementById("taskList");
    lista.appendChild(nuevoElemento);
}

function toggleTaskCompletion() {
    this.classList.toggle("completado");
}

function clearInputField() {
    document.getElementById("taskInput").value = ""; // Limpia el campo de texto
}


//Ejercicio 5
document.getElementById("userForm").addEventListener("submit", validateUserForm);

function validateUserForm(event) {

    cleanErrors(); // Limpia los errores previos

    event.preventDefault(); // Previene el envío del formulario

    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let ageField = document.getElementById("age");

    let isValid = true;

    // Verifica que el campo de nombre no esté vacío
    if (nameField.value.trim() === "") {
        nameField.insertAdjacentHTML("afterend", "<div class='error'>El campo no debe estar vacio</div>");
        isValid = false;
    } 

    // Verifica que el email tenga un formato válido
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
        emailField.insertAdjacentHTML("afterend", "<div class='error'>El campo no debe estar vacio</div>");
        isValid = false;
    }else if (!emailRegex.test(emailField.value.trim())) {
        emailField.insertAdjacentHTML("afterend", "<div class='error'>El email no es válido</div>");
        isValid = false;
    } 
    // Verifica que la edad sea un número mayor a 18
    let age = parseInt(ageField.value.trim(), 10);
    if (isNaN(age) || age <= 18) {
        ageField.insertAdjacentHTML("afterend", "<div class='error'>La edad debe ser mayor o igual a 18</div>");
        isValid = false;
    }

    // Si todos los campos son válidos, muestra un mensaje o realiza alguna acción
    if (isValid) {
        alert("Formulario enviado correctamente.");
        event.target.submit(); // Envía el formulario si es válido
    }
}

// Agrega un evento para limpiar los errores al escribir en los campos
function cleanErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach((error) => {
        error.remove(); // Elimina los mensajes de error
    });
}
