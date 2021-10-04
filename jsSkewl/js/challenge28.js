(function(){
    "use strict";
    //const myform=document.querySelector('form');
    const mydiv=document.querySelector('div');
    mydiv.addEventListener('mouseover',function(){
            mydiv.className='big';
    });
    addEventListener('mouseout',function(){
        mydiv.classList.remove('big');
    });
})();


