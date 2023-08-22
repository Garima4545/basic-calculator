var look = document.getElementById("display");

var phla = document.getElementById("one");
phla.addEventListener('click',function ek(){
                       console.log('1');
                       look.innerText += '1';
                       })
var phla = document.getElementById("two");
phla.addEventListener('click',function dono(){
                       console.log('2');
                       look.innerText += '2';
                       })
var phla = document.getElementById("three");
phla.addEventListener('click',function teen(){
                       console.log('3');
                       look.innerText += '3';
                       })
var phla = document.getElementById("four");
phla.addEventListener('click',function chaar(){
                      console.log('4');
                      look.innerText += '4';
                       })

var phla = document.getElementById("five");
phla.addEventListener('click',function panch(){
                      console.log('5');
                      look.innerText += '5';
                       })
var phla = document.getElementById("six");
phla.addEventListener('click',function chhah(){
                      console.log('6');
                      look.innerText += '6';
                       })

var phla = document.getElementById("seven");
phla.addEventListener('click',function saat(){
                      console.log('7');
                      look.innerText += '7';
                       })

var phla = document.getElementById("eight");
phla.addEventListener('click',function aath(){
                      console.log('8');
                      look.innerText += '8';
                       })

var phla = document.getElementById("nine");
phla.addEventListener('click',function nau(){
                      console.log('9');
                      look.innerText += '9';
                       })

var phla = document.getElementById("zero");
phla.addEventListener('click',function shoony(){
                      console.log('0');
                      look.innerText += '0';
                       })

var phla = document.getElementById("decimal");
phla.addEventListener('click',function bindu(){
                       console.log('.');
                       look.innerText += '.';
                       })

var phla = document.getElementById("plus");
var look = document.getElementById("display");
phla.addEventListener('click',function jod(){
                       console.log('+');
                       look.innerText += '+';
                       })
var phla = document.getElementById("minus");
phla.addEventListener('click',function khda(){
                       console.log('-');
                       look.innerText += '-';
                       })

var phla = document.getElementById("multiply");
phla.addEventListener('click',function kuna(){
                       console.log('*');
                       look.innerText += '*';
                       })

var phla = document.getElementById("divide");
phla.addEventListener('click',function bhag(){
                       console.log('/');
                       look.innerText += '/';
                       })
var phla = document.getElementById("equal");
phla.addEventListener('click',function barabar(){
                       console.log('=');
                       look.innerText = eval(look.innerText);
                       
                       })

var phla = document.getElementById("cancel");
phla.addEventListener('click',function hada(){
                       console.log('C');
                       look.innerText = look.innerText.slice(0,-1);
                       })

var phla = document.getElementById("delete");
phla.addEventListener('click',function khtam(){
                       console.log('AC');
                       look.innerText = '';
                       })