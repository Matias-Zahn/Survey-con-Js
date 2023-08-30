const touchBottom= document.querySelector('.btn');

const boxHidden= document.querySelector('.box');

const result= document.querySelector('.result');

//Aqui estamos seleccionando todos los numero dentro de scale


const items= document.querySelectorAll('.scale .number');
const numberResponse= document.querySelector('#numberResponse');

let response= null

touchBottom.addEventListener('click', function(){
    if(!response) return alert('Please answer the survey')
    result.classList.add('result--show');
    boxHidden.classList.add('box--hidden');  
})

//Recorremos todo el objeto traido a la variable ITEMS

for (const item of items) {
    item.addEventListener('click', (e) => {

        for (const itemRemove of items) {
            itemRemove.classList.remove('number--active')
        }

        e.currentTarget.classList.add('number--active');
        let value= e.currentTarget.textContent;
        response = value;
        numberResponse.textContent= value
    })

}