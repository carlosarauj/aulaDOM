/* const letra = document.querySelector('#oi')

letra.innerHTML = 'oi'
letra.style.background = 'blue'

let num1 = prompt('Digite um número')
let num2 = prompt('Digite outro')

num1 = parseFloat(num1)
num2 = parseFloat(num2)

let soma = num1 + num2
window.alert(`o resultado é: ${soma}`)

let nome = prompt('Qual seu nome?')
let sobrenome = prompt('Qual seu sobrenome')

alert(`Seu nome é ${nome} ${sobrenome}`)
 */
function confirmar(){
    let conf = confirm('Quer excluir?')
    if(conf){
        alert('item excluido')
    } else {
        alert('Item mantido')
    }
}

let li1 = document.querySelector('#li1')
li1.style.color = 'red'
li1.style.background = 'yellow'
let li2 = document.querySelector('#li2')
li2.style.color = 'blue'
li2.style.background = 'red'
let l3 = document.querySelector('#li3')
li3.style.color = 'yellow'
li3.style.background = 'blue'

let p2 = document.querySelector('#p2')
p2.innerText = 'Agora foi substituído'
p2.style.color = 'green'
p2.style.background = 'black'

let p3 = document.getElementsByClassName('p3')[0]
p3.innerHTML = '<strong>Usando HTML em JS</strong>'

//usando . pq estou puxando class
let nov = document.querySelector('.nov')
nov.style.color = 'purple'