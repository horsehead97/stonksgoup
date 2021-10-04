(function(){
    "use strict";
    const mybuttons=document.querySelectorAll('button');
     let mytag=document.createElement('p');
     let mytext=document.createTextNode("Here is my new paragraph");
     mytag.appendChild(mytext);
    // console.log(mytag,mytext);
    const mydiv=document.querySelector('div');
    mybuttons[0].addEventListener('click',function(){
        mydiv.appendChild(mytag); 
    });  
     mybuttons[1].addEventListener('click',function(){
         const myparas=document.querySelectorAll('p');
         console.log(myparas,myparas.length,myparas.length-1,myparas.length-2);
         console.log(mydiv.children);
         mydiv.removeChild(mydiv.children[myparas.length-1]);//myparas[myparas.length-1]]); 
     });  
     
})();


