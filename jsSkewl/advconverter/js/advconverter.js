(function(){
    "use strict";
    let convertType="miles";
    let heading=document.querySelector('h1');
    let intro=document.querySelector('p');
    const answerDiv=document.getElementById('answer');
    const convert=document.getElementById('convert');
    document.addEventListener('keydown',function(event){
        let myKey=event.code;
        //alert(myKey);
        if(myKey=="KeyK"){
            convertType='kilometers';
            heading.innerHTML=('Kilometers to Miles Converter');
            intro.innerHTML=("Type in a number of kilometers and click the button to convert the distance to miles.");

        }
        else if (myKey=="KeyM"){
            convertType='miles';
            heading.innerHTML=('Miles to Kilometers Converter');
            intro.innerHTML=("Type in a number of miles and click the button to convert the distance to kilometers.");

        }
    });
    document.getElementById('convert').addEventListener('submit',function(event){
          event.preventDefault();
          const distance=parseFloat(document.getElementById('distance').value);
          let myMess="Please provide a number!";
          if(distance){
             let conversion=(distance*1.609344).toFixed(3);
             if(convertType=="kilometers"){myMess=`${distance} kilometers converts to ${(distance*0.621381192).toFixed(3)} miles`;}
             else if(convertType=="miles"){myMess=`${distance} miles converts to ${(distance*1.609344).toFixed(3)} kilometers`;}
         }
         document.getElementById('answer').innerHTML=`<h2>${myMess}</h2>`;
    }); 
})();