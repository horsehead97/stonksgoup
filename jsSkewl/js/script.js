window.addEventListener('resize',function(){
    console.log(`the window width is ${window.innerWidth}`);
    console.log(`the window height is ${window.innerHeight}`);
});
window.addEventListener('keydown',function(){
    console.log(`the ${event.which} key was pressed`);
    
});
var pagetop;
var heading=document.querySelector('h1');
var box=document.querySelector('div');
window.addEventListener('scroll',function(){
   pagetop=window.pageYOffset;
   console.log(pagetop);
});
box.addEventListener('mouseover',function(){
    heading.innerHTML='the mouse is over the box!';
});
box.addEventListener('mouseout',function(){
    heading.innerHTML='the mouse has left the box!';
});
heading.addEventListener('mouseover',function(){
    heading.innerHTML='Roll your mouse over the red box';
});
// var mytag=document.createElement('p');
// var mytext=document.createTextNode("Here is my new paragraph");
// mytag.appendChild(mytext);
// console.log(mytag,mytext);
// mydiv=document.querySelector('div');
// mydiv.removeChild(mydiv.children[1]);
// mydiv.appendChild(mytag);
var mybutton=document.querySelector('button');
var myachor=document.querySelector('a');
var myform=document.querySelector('form');
// var myCheckbox=document.querySelector('input');
// myCheckbox.setAttribute('checked','checked');
//function green(){
//    alert("you Pressed me");
//}
// var apar=document.querySelector('p');
// console.log(apar);
// apar.className='blue';

var mypars=document.getElementsByTagName('p');
// var mycls=document.getElementsByClassName('special');
// var myText=document.querySelectorAll('#special .someclass')
// console.log(myText);
// for(var i=0;i<myText.length;i++){
//      myText[i].style.fontWeight="bold";
     
// }
// var myDiv=document.querySelector('#special');
// myDiv.innerHTML="<p>Completely new piece of content</p>";
 mybutton.addEventListener('click',function(event){
    event.target.style.backgroundColor="red";
 });
 myachor.addEventListener('click',function(event){
    event.preventDefault();
    alert("Don't go to google");
 });
 myform.addEventListener('submit',function(e){
     e.preventDefault();
    var formdata=document.querySelector('input').value;
    alert(formdata);
 });

