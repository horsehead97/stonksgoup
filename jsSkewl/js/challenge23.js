(function(){
    "use strict";
    const mybutton=document.querySelector('button');
    const myPars=document.querySelectorAll('p');
    mybutton.addEventListener('click',function(){
        for(let i=0;i<myPars.length;i++){
            myPars[i].style.color='green';
        }
    });    
})();


