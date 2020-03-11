let userscore = 0;
let computerscore =0;
const userscorespan = document.getElementById("user-score");
const computerscorespan = document.getElementById("computer-score");
const scoreboarddiv = document.querySelector(".score-board");
const resultp=document.querySelector(".result>p");
const stonediv=document.getElementById("s");
const paperdiv=document.getElementById("p");
const scissordiv=document.getElementById("sc");

function getcomputerchoice(){
  const choices =['s','p','sc'];
  const randomnumber = Math.floor(Math.random()*3);
  return choices[randomnumber];
}
function converttoword(letter){
  if(letter=="s")return "Stone";
  if(letter=="sc")return "Scissor";
  return "Paper";
}

function win(userchoice,computerchoice){
  userscore++;
  userscorespan.innerHTML=userscore;
  computerscorespan.innerHTML=computerscore;
  const smalluserword ="user".fontsize(3).sub();
  const smallcomputerword ="computer".fontsize(3).sub();
  resultp.innerHTML=`${converttoword(userchoice)}${smalluserword} beats ${converttoword(computerchoice)}${smallcomputerword}.You win!`;
}
function lose(userchoice,computerchoice){
  computerscore++;
  userscorespan.innerHTML=userscore;
  computerscorespan.innerHTML=computerscore;
  const smalluserword ="user".fontsize(3).sub();
  const smallcomputerword ="computer".fontsize(3).sub();
  resultp.innerHTML=`${converttoword(userchoice)}${smalluserword} loses to ${converttoword(computerchoice)}${smallcomputerword}.You lost..`;
}
function draw(userchoice,computerchoice){
  const smalluserword ="user".fontsize(3).sub();
  const smallcomputerword ="computer".fontsize(3).sub();
  resultp.innerHTML=`${converttoword(userchoice)}${smalluserword} equals ${converttoword(computerchoice)}${smallcomputerword}.It's a draw!`;
}

function game(userchoice){
  const computerchoice=getcomputerchoice();
  switch(userchoice+computerchoice){
    case"ssc":
    case"ps":
    case"scp":
    win(userchoice,computerchoice);
    break;
    case"sp":
    case"psc":
    case"scs":
  lose(userchoice,computerchoice);
    break;
    case"ss":
   case"scsc":
   case"pp":
   draw(userchoice,computerchoice);
   break;   }


}

function main(){
stonediv.addEventListener("click",function(){
  game("s");

});
paperdiv.addEventListener("click",function(){
  game("p");

});
scissordiv.addEventListener("click",function(){
  game("sc");

});
}
main();
