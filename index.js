var randomNumber1= Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
//alert(randomNumber1);

var randomNumber2= Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;


var i = "images/dice" + randomNumber1 + ".png";
var i2= "images/dice" + randomNumber2 + ".png";




if(randomNumber1===1)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}
else if(randomNumber1===2)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}
else if(randomNumber1===3)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}
else if(randomNumber1===4)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}
else if(randomNumber1===5)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}
else if(randomNumber1===6)
{
  document.querySelectorAll("img")[0].setAttribute("src",i);
}







if(randomNumber2===1)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}
else if(randomNumber2===2)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}
else if(randomNumber2===3)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}
else if(randomNumber2===4)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}
else if(randomNumber2===5)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}
else if(randomNumber2===6)
{
  document.querySelectorAll("img")[1].setAttribute("src",i2);
}



if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = " ✌🏻Player 1 wins";
  document.querySelector("h2").style.visibility="hidden";

}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = " Player 2 wins ✌🏻";
    document.querySelector("h2").style.visibility="hidden";

}
 else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = " DRAW 🤝 ";
}
