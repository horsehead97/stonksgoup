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
//$('nav ul li a').click(function(){alert($(this).html());}); 
 //challenge 15 and 16
  // const myAnchors=document.querySelectorAll("nav ul li a");
  // for(let i=0;i<myAnchors.length;i++){
  //   myAnchors[i].addEventListener('click', function(){this.style.color="red";});
  // }  
  //$('nav ul li a').click(function(){$(this).css("color","red");})
  //challenge 17 and 18
  // const myAnchors=document.querySelectorAll("nav ul li a");
  // const mypara=document.querySelector("#paragraph");
  // for(let i=0;i<myAnchors.length;i++){
  //   myAnchors[i].addEventListener('click', function(){mypara.innerHTML=`you clicked ${this.innerHTML}`;});
  // } 
  //$('nav ul li a').click(function(){$('#paragraph').text(`You clicked ${$(this).html()}`);})
 //challenge 19 and 20
  //  const myAnchors=document.querySelectorAll("nav ul li a");
  //  for(let i=0;i<myAnchors.length;i++){
  //      myAnchors[i].addEventListener('click', function(){
  //       for(let j=0;j<myAnchors.length;j++){
  //           if(i==j){document.querySelector(`#paralink${j+1}`).style.color="red";}
  //           else{document.querySelector(`#paralink${j+1}`).style.color="black";}
  //       }   
  //     });
  //   } 
  $("nav ul li a").click(function () {
    const paraNumber = "#para" + $(this).attr("id"); // constructs #paralink3 for example
    $("p").css("color", "black");
    $(paraNumber).css("color", "red");
    });
   
  // $('nav ul li a').click(function(){
  //     $("p").css("color", "black");
  //     //let paranumber=`para${$(this).attr("id")}`;
  //     const paranumber = "#para" + $(this).attr("id"); 
  //     alert(paranumber);
  //    $(`para${$(this).attr("id")}`).css("color","red");
  //   })   
    
    // for(let i=0;i<myAnchors.length;i++){ myAnchors[i].addEventListener('click',function()){
    //    for(let j=0;j<myAnchors.length;j++){
    //       let myID=`paralink${j+1}`;
    //       console.log(myID);
    //       //const mypara=document.querySelector("#main p:last-of-type");
    //   }
    // });
    //}  
      //mypara.innerHTML=`you clicked ${this.innerHTML}`;
   



})();