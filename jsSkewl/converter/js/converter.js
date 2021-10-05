(function(){
    "use strict";
    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        const distance=parseFloat(document.getElementById('distance').value);
        let myMess="Please provide a number!";
        if(distance){
             let conversion=(distance*1.609344).toFixed(3);
             myMess=`${distance} miles converts to ${(distance*1.609344).toFixed(3)} kilometers`;
        }
        document.getElementById('answer').innerHTML=`<h2>${myMess}</h2>`;
    }); 
})();