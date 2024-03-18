// const screen = document.querySelector(".screen");

// const zeroo = document.querySelector(".zeroo")


// zeroo.addEventListener('click', function(){

//     screen.append(zeroo.innerText)
// })
// numbers.addEventListener('click', function(){

//     screen.append(numbers.innerText);
// })


const affiche = document.querySelector(".screen");

const numbers = document.querySelectorAll("div[type]");

const operators = document.querySelectorAll("div[value]")

const clear = document.querySelector('.clear')

const suprimer = document.querySelector('.delete')

const egale = document.querySelector('.equal')

let val1 = ""
let op = ""
let val2 = ""


for (let number of numbers){
    number.addEventListener('click', function(){
        affiche.append(number.innerText)
        val1 = affiche.innerText
      
    })
}
for (let operator of operators){
    operator.addEventListener('click', function(){
        affiche.innerText = ""
        affiche.append(operator.innerText)
        op = affiche.innerText
        affiche.innerText=""
    })
}

clear.addEventListener('click', function() {
    affiche.innerText = "";
});
suprimer.addEventListener('click', function(){

affiche.innerText = affiche.innerText.slice(0,-1)  
})

function calculate (val1, val2,op){
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    if(op =="+"){
        return val1 + val2
    }else if(op =="-"){
        return val1 - val2
    }else if(op =="*"){
        return val1 * val2
    }else if(op =="/"){
        return val1 / val2
    }
}

egale.addEventListener('click', function(){
    val2 = affiche.innerText
    let result = calculate(val1, val2, op);
    affiche.innerText = result;
})

wx