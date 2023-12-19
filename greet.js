const cards = document.querySelector(".cards");
const card = cards.querySelectorAll(".card");
const ccard= document.querySelectorAll('.ccard');
const topp = document.querySelector('.top');
const footer = document.querySelector('footer');
const btn = document.querySelector('.btn')

const barmid = document.querySelector('.barmid');
const logo = document.querySelector('.logo');
const colors = document.querySelector('.colors');
const range = document.querySelector('.range');
const rbtn = document.querySelector('.rbtn');


const dinput = document.querySelector('.downinput');
const dajim = document.getElementById('dajim');
const nname = document.getElementById('nickname');
const cdajim = document.querySelector('.cdajim');
const cnname = document.querySelector('.cnname');

const cdajimc = document.querySelector('.cdajimc');
const cnnamec = document.querySelector('.cnnamec');

const back = document.querySelector('.back');

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const cclick = document.querySelector('.cardsclick');

const ccard1= document.getElementById('ccard1');
const ccard2= document.getElementById('ccard2');
const ccard3= document.getElementById('ccard3');
const ccard4= document.getElementById('ccard4');

const c1i= document.getElementById('c1img');
const c2i= document.getElementById('c2img');
const c3i= document.getElementById('c3img');
const c4i= document.getElementById('c4img');




//메인 애니메이션 로딩
window.addEventListener('load', function()
{

    card.forEach(car => {
        car.classList.remove('oh');
    });

    setTimeout(()=>{
        topp.classList.add('on');
    }, 300);

    setTimeout(()=>{
        footer.classList.add('on');
    }, 600);

    setTimeout(()=>{
        btn.classList.add('on');
    }, 3000);
}); 

//버튼클릭

btn.addEventListener('click', ()=>{
    clickphase();
});

function clickphase() {
    btn.classList.add('click');
    barmid.classList.add('click');
    logo.classList.add('click');
    footer.classList.add('click');

    rbtn.classList.add('on');
    colors.classList.add('click');

    setTimeout(()=>{
        btn.remove();
        barmid.remove();
    }, 1000);

    card.forEach(car => {
        car.classList.add('click');
        setTimeout(()=>{
            car.remove();      
        }, 1000);
    });

    ccard.forEach(ccar => {
        setTimeout(()=>{
            ccar.classList.add('click');   
        }, 1000);

    
    });

    setTimeout(()=>{
        range.classList.add('on');
    }, 1000);

};


//다운로드페이지 인풋
rbtn.addEventListener('click', ()=>{
    downphase();
 });

function dajim1() {
    cdajim.innerText = `${dajim.value}`;

    cdajimc.innerText = `${dajim.value}`;
};
function name1() {
    cnname.innerText = `- ${nname.value} -`;

    cnnamec.innerText = `- ${nname.value} -`;
};


const twoinput = ccard2.querySelector('.input');

back.addEventListener('click', ()=>{
    rbtn.classList.add('on');
    colors.classList.add('click');

    range.classList.remove('down');
    cclick.classList.remove('down');
    dinput.classList.remove('on');
    range.classList.add('on');

    val.value = 0;
    twoinput.classList.remove('on');
 
    cclick.style.transform =`rotateY(0deg)`
    cclick.style.top = `0%`
    ccard1.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0deg)`;
    ccard1.style.marginTop = `0px`;
    ccard1.style.marginLeft = `0px`;
    ccard2.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(180deg)`;
    ccard4.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0deg)`;
    ccard4.style.marginTop = `0px`;
    ccard4.style.marginLeft = `0px`;
    ccard1.style.zIndex =4;
    ccard2.style.zIndex =2;
    ccard3.style.zIndex =3;
    ccard4.style.zIndex =1;

    ccard1.style.backfaceVisibility = `hidden`;

  


});


function downphase() {
    range.classList.add('down');
    cclick.classList.add('down');
    dinput.classList.add('on');

    colors.classList.remove('click');
 
    twoinput.classList.add('on');
    cclick.style.transform =`rotateY(0deg)`
    cclick.style.top = `0%`
    ccard1.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0deg)`;
    ccard2.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(180deg)`;
    ccard4.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0deg)`;
    ccard1.style.zIndex =4;
    ccard2.style.zIndex =2;
    ccard3.style.zIndex =3;
    ccard4.style.zIndex =1;

    ccard1.style.backfaceVisibility = `hidden`;

    setTimeout(()=>{
        cclick.style.top = `11%`
        ccard1.style.zIndex =1;
        ccard1.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(18deg)`;
        ccard1.style.marginTop = `-226px`;
        ccard1.style.marginLeft = `33px`;
        
        ccard2.style.transform = `translate(-50%, -50%) rotateX(180deg) rotateY(180deg)`;
        ccard4.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(162deg)`;
        ccard4.style.marginTop = `194px`;
        ccard4.style.marginLeft = `8px`;
    },100)
};



color1.addEventListener('click', ()=>{
  
    color1.classList.add('on');

    color2.classList.remove('on');
    color3.classList.remove('on');
    color4.classList.remove('on');

    c1i.src =  `img/sky1.png`;
    c2i.src =  `img/sky2.png`;
    c3i.src =  `img/sky3.png`;
    c4i.src =  `img/sky4.png`;
    cdajim.style.color = `gray`;

    cnname.style.color = `gray`;

});

color2.addEventListener('click', ()=>{
 
    
    color2.classList.add('on');

    color1.classList.remove('on');
    color3.classList.remove('on');
    color4.classList.remove('on');

    c1i.src =  `img/gray1.png`;
    c2i.src =  `img/gray2.png`;
    c3i.src =  `img/gray3.png`;
    c4i.src =  `img/gray4.png`;
    cdajim.style.color = `gray`;

    cnname.style.color = `gray`;
 });

 color3.addEventListener('click', ()=>{
   
  
    color3.classList.add('on');

    color1.classList.remove('on');
    color2.classList.remove('on');
    color4.classList.remove('on');

    c1i.src =  `img/royal1.png`;
    c2i.src =  `img/royal2.png`;
    c3i.src =  `img/royal3.png`;
    c4i.src =  `img/royal4.png`;
    cdajim.style.color = `gray`;

    cnname.style.color = `gray`;
 });

 color4.addEventListener('click', ()=>{

    color4.classList.add('on');

    color1.classList.remove('on');
    color2.classList.remove('on');
    color3.classList.remove('on');

    cdajim.style.color = `whitesmoke`;

    cnname.style.color = `whitesmoke`;

   

    c1i.src =  `img/exc1.png`;
    c2i.src =  `img/exc2.png`;
    c3i.src =  `img/exc3.png`;
    c4i.src =  `img/exc4.png`;
 });


 const rbar = document.querySelector('.rbar');
 const rdr = document.querySelector('.rdrag');
 let wid = rbar.innerWidth;
 console.log(wid);

 let val = document.getElementById('ranran');

 val.oninput = function(){

    let lav = val.value;

    if (lav>-1 && lav<90) {
        cclick.style.top = `${(11/90)*lav}%`;

        cclick.style.transform =`rotateY(0deg)`
        ccard1.style.transform = `translate(-50%, -50%) rotateX(${2*lav}deg)`;
        ccard2.style.transform = `translate(-50%, -50%) rotateX(${2*lav}deg) rotateY(180deg)`;
      
    
        ccard4.style.transform = `translate(-50%, -50%) rotateY(0deg)`;

        ccard1.style.zIndex =4;
        ccard2.style.zIndex =2;
        ccard3.style.zIndex =3;
        ccard4.style.zIndex =1;


        ccard1.style.backfaceVisibility = `hidden`;
    }


    if (lav ==90){
        cclick.style.top = `11%`
        ccard4.style.transform = `translate(-50%, -50%) rotateY(-180deg)`;
        ccard1.style.zIndex =4;
        ccard2.style.zIndex =2;
        ccard3.style.zIndex =3;
        ccard4.style.zIndex =1;


        ccard1.style.backfaceVisibility = `hidden`;
    }

    else if(lav>90 && lav<181){

        cclick.style.transform =`rotateY(0deg)`
        cclick.style.top = `${14-((11/90)*(lav-90)) }%`;
        cclick.style.transform =`rotateY(180deg)`
     
       ccard1.style.backfaceVisibility = `visible`;


        ccard3.style.zIndex =1;
        ccard2.style.zIndex =1;
        ccard1.style.zIndex =3;
        ccard4.style.zIndex =4;

        ccard2.style.transform = `translate(-50%, -50%) rotateX(${180-(2*(lav-90))}deg) rotateY(180deg)`;

        ccard1.style.transform = `translate(-50%, -50%) rotateX(${180-(2*(lav-90))}deg)`;

        ccard4.style.transform = `translate(-50%, -50%) rotateY(180deg)`;
    }



console.log(lav);
console.log(cclick.style.top);
};
 


const main = document.querySelector('.main');
const dbtn = document.querySelector('.dbtn');
const cimg = document.getElementById('captimg');


function dd(){
    
    const dinput = document.querySelector('.downinput');
    
    const bd = document.querySelector('.capt');

    cdajimc.style.fontSize = `10px`;
    cnnamec.style.fontSize = `8px`;
cdajimc.style.marginBottom = `1px`;

if (color1.classList.contains('on')){
    

   
    cdajimc.style.color = `gray`;
    cnnamec.style.color = `gray`;
    cimg.src =  `img/1sky.png`;

}else if(color2.classList.contains('on')){
 
    cdajimc.style.color = `gray`;
    cnnamec.style.color = `gray`;
    cimg.src =  `img/2gray.png`;

}else if(color3.classList.contains('on')){
   
    cdajimc.style.color = `gray`;
    cnnamec.style.color = `gray`;
    cimg.src =  `img/3royal.png`;

}else if(color4.classList.contains('on')){
    

    cdajimc.style.color = `whitesmoke`;
    cnnamec.style.color = `whitesmoke`;

    cimg.src =  `img/4exc.png`;
    
}

    setTimeout(()=>{
        html2canvas(bd)
    .then(
        function(canvas) {
            canvas.toDataURL('image/png');
            saveAs(canvas.toDataURL(),'greet.png');
        }
    );

    
     function saveAs(uri, filename) {    
                var link = document.createElement('a');    
                if (typeof link.download === 'string') {        
                    link.href = uri;        
                    link.download = filename;        
                    document.body.appendChild(link);        
                    link.click();        
                    document.body.removeChild(link);    
                } else {        
                    window.open(uri);    
                }
            }
    }, 1);
}
    
const endd = document.querySelector('.end');
const rep = document.getElementById('replay');
const app= document.getElementById('applyl');
dbtn.addEventListener('click',()=>{
endd.classList.add('on');
})

rep.addEventListener('click', ()=>{
    location.reload()
})