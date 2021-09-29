//       EXERCICIO 4
// to de list, lista de tarefas

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

const lists = []

newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName  = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render() 
})

function createList(name) {
    return {id: Date.now().toString(), name: name}
   }

function render() {
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()


//       EXERCICIO 3
// converter  celsius em fahrenheit 

//function convertToFahrenheit (value) {
//    return value * 1.8 + 32
//}

//let result = convertToFahrenheit(40)
//console.log(`O valor em fahrenheit é: ${result}`)



//       EXERCICIO 2
// reverse a string

//let newStr = '';

//function reverseAString(str) {
//    for (let i = str.length -1; i >= 0; i--) {
//        newStr += str [i];
//        console.log(newStr);
//    }
//}

//let resultado = reverseAString('hello')




//        EXERCICIO 1
// Divisivel por 3 = 'fizz'
// Divisivel por 5 = 'Buzz'
// Divisivel por 3 e 5 = 'FizzBuzz'
// Se nao for um numero  = 'nao é um numero'
// Se nao for divisivel nem por 3 e nem por 5  = entrada

//let resultado = fizzBuzz("maria");
//console.log(resultado);

//function fizzBuzz(entrada) {
//    if(typeof entrada !== "number") 
//        return "Nao é um numero";
//    if ((entrada % 3 === 0) && (entrada % 5 === 0))
//        return "FizzBuzz";
//    if (entrada % 3 === 0)
//        return "Fizz"
//    if (entrada % 5 === 0)
//        return "Buzz";

//    return entrada;
//}

