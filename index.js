'use strict'
const grid1 = document.getElementById('pic1');
const grid2 = document.getElementById('pic2');
const grid3 = document.getElementById('pic3');
const grid4 = document.getElementById('pic4');
const grid5 = document.getElementById('pic5');
const grid6 = document.getElementById('pic6');
const resetButton = document.querySelector('#reset');
const imagSuffle =["/images/elephant.jpg","/images/lion.jpg","/images/monkey.jpg","/images/bear.jpg","/images/goat.jpg"];

    function shuffleImageArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (array.length));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleImageArray(imagSuffle);
        // return array;
        const suffle = () =>{
    
let imageArr = [
{
    id1 :1
    ,path: "/images/elephant.jpg"
},
{
    id1: 2,
    path: "/images/lion.jpg"
}
,
{
    id1: 3,
    path: "/images/monkey.jpg"
}
,
{
    id1: 4,
    path: "/images/bear.jpg"
}
,
{
    id1: 5,
    path: "/images/goat.jpg"
},
{
    id1: 5,
    path: [imagSuffle[0]]
}
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

 imageArr = shuffleArray(imageArr);
// console.log(imageArr);
grid1.style.backgroundImage=`url(${imageArr[0].path})`;
grid2.style.backgroundImage=`url(${imageArr[1].path})`;
grid3.style.backgroundImage=`url(${imageArr[2].path})`;
grid4.style.backgroundImage=`url(${imageArr[3].path})`;
grid5.style.backgroundImage=`url(${imageArr[4].path})`;
grid6.style.backgroundImage=`url(${imageArr[5].path})`;

// getting the random index
// const indexRandom = Math.floor(Math.random() * imageArr.length);
// console.log(indexRandom);
// grid6.style.backgroundImage=`url(${imageArr[indexRandom].path})`;


}
let picIdStorage =[];

resetButton.addEventListener('click',() =>{
    resetButton.classList.add('hidden');
    shuffleImageArray(imagSuffle);
    suffle();

   
    picIdStorage =[];
    document.getElementById('text').innerHTML = "select the 2same image";
    //console.log(picIdStorage.length);



});

//  this will be called every time the page loads
suffle();

document.addEventListener("click", function(evt){

    
   if(evt.target.id != 'reset')
     resetButton.classList.remove('hidden');
     
   
//console.log(document.getElementById(`${evt.target.id}`).style.backgroundImage) 
if(evt.target.id != 'reset' && evt.target.id != 'text'){
    
picIdStorage.push(document.getElementById(`${evt.target.id}`).style.backgroundImage);
}
//console.log(picIdStorage.length);
if(picIdStorage.length == 2)
{
    if(picIdStorage[0] == picIdStorage[1])
    document.getElementById('text').innerHTML = "u r human";
    else
    document.getElementById('text').innerHTML =" u r robot";

}



  });
  resetButton.classList.add('hidden');


  

