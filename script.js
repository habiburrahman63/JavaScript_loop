
const counter = document.querySelectorAll(".counter");


const arr = Array.from(counter)

arr.map((item)=>{
let cout = 0;

function grethings(){

cout++
console.log("Habibur Rahman",cout)

if(item.dataset.number == cout){
    clearInterval(tham)
}

item.innerHTML = cout;

}


const tham = setInterval(grethings, (item.dataset.speed))
})




