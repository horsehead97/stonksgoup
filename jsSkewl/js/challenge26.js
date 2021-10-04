(function(){
    "use strict";
    const mybuttons=document.querySelectorAll('button');
    
    // console.log(mytag,mytext);
    const mydiv=document.querySelector('div');
    mybuttons[0].addEventListener('click',function(){
        const mytag=document.createElement('p');
        const myparas=document.querySelectorAll('p');
        console.log(myparas.length);
        const mynum=myparas.length+1;
        const mytext=document.createTextNode(`Here is my new paragraph ${mynum}`);
        mytag.appendChild(mytext);
        mydiv.appendChild(mytag); 
    });  
     mybuttons[1].addEventListener('click',function(){
         const myparas=document.querySelectorAll('p');
         if(myparas.length==1){
             alert("You Can't delete the last paragraph!")
         }
         else{
            console.log(myparas,myparas.length,myparas.length-1,myparas.length-2);
            console.log(mydiv.children);
            mydiv.removeChild(mydiv.children[myparas.length-1]);//myparas[myparas.length-1]]); 
         }    
    });  
     
})();


