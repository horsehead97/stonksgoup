(function(){
    "use strict";
    const mybutton=document.querySelector('button');
     const mytag=document.createElement('p');
     const mytext=document.createTextNode("Here is my new paragraph");
     mytag.appendChild(mytext);
    // console.log(mytag,mytext);
    const mydiv=document.querySelector('div');
    mybutton.addEventListener('click',function(){
        mydiv.appendChild(mytag); 
    });  
     
})();


