//greife Inputfeld mittels DOM-Manipulator ab

let inputTodo = document.querySelector(".todo-input");

//greife auf den Button mittels Dom-Manipulator zu und speichere
let buttonTodo = document.querySelector(".todo-button");


//greife auf popover element zu und erstelle mit einem Constructor eine Instanz
let trigger = document.querySelector('[data-bs-toggle="popover"]');
const popover = new bootstrap.Popover(trigger);
trigger.addEventListener("click",function() {
    console.log("I am alive"); //check if it works
    let buttonControls = document.querySelector(".App");
    let deleteInput = document.createElement("input");
    deleteInput.setAttribute('type','text');
    deleteInput.setAttribute('class','delete-input');
    deleteInput.setAttribute('placeholder',"delete to-do");
    if (!document.querySelector(".delete-input")) {
        buttonControls.appendChild(deleteInput);
    }

    deleteInput.addEventListener("keydown",function(e){
        if(e.code === "Enter") {
           let todoList = document.querySelectorAll(".list-group-item");
           console.log(todoList);
           todoList.forEach(element=> {
            if(element.innerText === deleteInput.value) {
                const ulList = document.querySelector(".list-group");
                ulList.removeChild(element);
                deleteInput.classList.add('blur')
                setTimeout(() => {
                    buttonControls.removeChild(deleteInput);
                }, 2000);
            }
           })
          
        } else {
            console.log(`Wrong key ${e.code}!`);
        }
    })

})


//Schreibe einen Eventlistener, der auf den oben abgegriffenen Button hört, und schreibe
//dazu eine Funktion
buttonTodo.addEventListener("click",function(){
    //lasse zuerst mittels Konsolenausgabe des Wert des Inputfelds ausgeben
    let inputVal = inputTodo.value;
    console.log(inputVal);
    //schreibe if-else: Wenn der Inputwert leer ist soll eine Warnmeldung erscheinen
    if (inputVal === "") {
        alert("Please Type in something!");
    } else {
        //Erstelle eines der Listenelemente z.B <li class="list-group-item">And a fifth one</li>
        todoLiElement = document.createElement("li");
        //füge class = "list-group-item hinzu"
        todoLiElement.classList.add("list-group-item");
        //füge Todo Text hinzu
        todoLiElement.innerText = inputVal;
        console.log(todoLiElement);
        //greife übergeordnet UL Element ab
        const ulList = document.querySelector(".list-group");
        //füge todo Listenelement dem abgegriffenen ul list container hinzu
        ulList.appendChild(todoLiElement);
    }
})

