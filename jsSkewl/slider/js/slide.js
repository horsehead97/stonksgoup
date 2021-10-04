(function(){
    "use strict";
    const myImages=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    let current_image=0;
    const next=document.getElementById('next');
    const prev=document.getElementById('previous');
    const myimage=document.getElementById('myimage');
    next.addEventListener('click',function(){
        current_image++;
        if(current_image>myImages.length-1){current_image=0;}
        myimage.src='img/'+myImages[current_image];
    }); 
    prev.addEventListener('click',function(){
        current_image--;
        if(current_image<0){current_image=myImages.length-1;}
        myimage.src='img/'+myImages[current_image];
    });  
})();