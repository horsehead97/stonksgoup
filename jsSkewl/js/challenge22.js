(function(){
    "use strict";
    const mybutton=document.querySelector('button');
    const myPar=document.querySelector('p');
    mybutton.addEventListener('click',function(){
        myPar.style.color='green';
    });    
})();


