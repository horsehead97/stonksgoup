(function(){
    "use strict";
    const mybody=document.querySelector('body');
    window.addEventListener('scroll',function(){
        const pagetop=window.pageYOffset;
        console.log(pagetop);
        switch(true){
        case pagetop<500:
            mybody.className="one";
            break;
        case pagetop<1000:
            mybody.className="two";
            break; 
        case pagetop<1500:
            mybody.className="three";
            break; 
        case pagetop<2000:
            mybody.className="four";
            break; 
        case pagetop<2500:
            mybody.className="five";
            break;  
        case pagetop<3000:
            mybody.className="six";
            break;                            

        }
     });
})();


