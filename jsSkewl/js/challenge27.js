(function(){
    "use strict";
    const myform=document.querySelector('form');
    const myheader=document.querySelector('h1');
    myform.addEventListener('submit',function(e){
        e.preventDefault();
        const mynumber=document.querySelector('input').value;
        myheader.style.fontSize=`${mynumber}px`;
        //alert(myheader);
    });
})();


