
const cards = document.querySelector(".cards");
const card = cards. querySelectorAll(".card");

const topp = document.querySelector('.top');
const footer = document.querySelector('footer');
const btn = document.querySelector('.btn')

window.addEventListener('load', function()
{




  
setTimeout(()=>{
    topp.classList.add('on');
    card.forEach(car => {
        car.classList.remove('oh');
            
        car.classList.add('oh');
    
    });
}, 2000);





}); 
