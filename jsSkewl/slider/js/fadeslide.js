(function(){
    "use strict";
    const myImages=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    let current_image=0;
    const mycontainer=document.getElementById('content');
    const next=document.getElementById('next');
    const prev=document.getElementById('previous');
    const myimage=document.getElementById('myimage');
    //const newSlide=document.createElement('img');
    
    next.addEventListener('click',function(event){
        event.preventDefault();
        changePic(true);
    }); 
    prev.addEventListener('click',function(event){
        event.preventDefault();
        changePic(false);
    });  
    function changePic(isNext){
        if(isNext){
            current_image++;
            if(current_image>myImages.length-1){current_image=0;}
        }
        else {
            current_image--;
            if(current_image<0){current_image=myImages.length-1;}
        }
        const newSlide=document.createElement('img');
        newSlide.src=`img/${myImages[current_image]}`;
        newSlide.className="fadeinimg";
        mycontainer.appendChild(newSlide);
        if(mycontainer.children.length>2){
            mycontainer.removeChild(mycontainer.children[0]);
        }
    }
})();