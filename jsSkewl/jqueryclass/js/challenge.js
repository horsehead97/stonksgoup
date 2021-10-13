(function(){
    'use strict';
    //Challenge 1 and 2
    //document.getElementById('paragraph').style.fontSize="24px";
    //$('#paragraph').css("font-size","24px");
    //Challenge 3 and 4
    // const myparas=document.querySelectorAll('#main p');
    // for(let i=0;i<myparas.length;i++){
    //     myparas[i].style.fontSize="24px";
    //     myparas[i].style.color='red';
    // }
   //$('#main p').css("font-size","24px").css("color","red");
   //Challenge 5 and 6
    // const mypara=document.querySelector("#main p:last-of-type");
    // mypara.style.fontSize="24px";
    // mypara.style.color='red';
    //    for(let i=0;i<myparas.length;i++){
    //        if(i==myparas.length-1){
    //            myparas[i].style.fontSize="24px";
    //            myparas[i].style.color='red';
    //         }
    //     }
    //$('#main p').last().css("font-size","24px").css("color","red");
//Challenge 7 and 8
    //const myparas=document.querySelectorAll("#main p");
    // mypara.style.fontSize="24px";
    // mypara.style.color='red';
    // const parasInMain = document.querySelectorAll("#main p:nth-child(even)");
    // for (let i = 0; i < parasInMain.length; i++) {
    //     parasInMain[i].style.color = "red";
    // }  
   //$('#main p').even().css("color","red");
   //Challenge 9 and 10
    // const myparas=document.querySelectorAll("#main p");
    // for (let i = 0; i < myparas.length; i++) {
    //     if(myparas[i].innerHTML=="Llamas and chickens!"){
    //         myparas[i].style.color = "red";
    //     }  
    // }    
  // $('#main p:contains("Llamas and chickens!")').css("color","red");
  //challenge 11 and 12
//   const myAnchors=document.querySelectorAll("nav ul li a");
//   for(let i=0;i<myAnchors.length;i++){
//     myAnchors[i].addEventListener('click', function(){alert('clicked!');});
//   }  
//$('nav ul li a').click(function(){alert('clicked!');});    
//challenge 13 and 14
// const myAnchors=document.querySelectorAll("nav ul li a");
// for(let i=0;i<myAnchors.length;i++){
//    myAnchors[i].addEventListener('click', function(){alert(this.innerHTML);});
//    }  
$('nav ul li a').click(function(){alert($(this).html());}); 



})();