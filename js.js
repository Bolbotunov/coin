let button = document.querySelector('.button')
let eagle = document.querySelector('.eagle')
let tails = document.querySelector('.tails')
let random
let result = document.querySelector('.result')
let iterationTails
let iterationEagle

button.addEventListener('click',clickBtn)

function clickBtn(){
    eagle.classList.toggle('spin_eagles')
    tails.classList.toggle('spin_tails')
    random = Math.random()
    console.log(random)
    result.innerHTML="";
    tails.style.display = "block"
    eagle.style.display = "block";
}



function removeClasses(){
    eagle.addEventListener('animationend', function(){
        eagle.classList.remove('spin_eagles')
    })
    tails.addEventListener('animationend', function(){
        tails.classList.remove('spin_tails')
        // hideSide()
        delayResult()
    })
    // setTimeout(delayResult,2000)
}
removeClasses()

// function hideSide(){
//     eagle.style.display = "none";
//     tails.style.display = "none";
// }


function delayResult(){
    if(random<0.5){
        result.innerHTML=`Орел`
        tails.style.display = "none";
    } else{
        result.innerHTML=`Решка`
        eagle.style.display = "none";
    }
}
