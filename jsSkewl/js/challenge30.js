(function(){
    "use strict";
    const mybody=document.querySelector('body');
    window.addEventListener('keydown',function(event){
        //console.log(`the ${event.key} key was pressed`);
        const mykey=event.key;
        switch(true){
        case mykey=='b':
            mybody.className="one";
            break;
        case mykey=='v':
            mybody.className="two";
            break; 
        case mykey=='c':
            mybody.className="three";
            break; 
        case mykey=='f':
            mybody.className="four";
            break; 
        case mykey=='g':
            mybody.className="five";
            break;  
        default:
            alert("You didn't enter a proper key, chucklehead")
            break;    
        }
     });
})();


