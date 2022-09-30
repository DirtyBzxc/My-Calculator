firstNumber = document.getElementById("firstNumber");
secondNumber = document.getElementById("secondNumber");
operPlus = document.getElementById("plus");
operMinus = document.getElementById("minus");
operMultiply = document.getElementById("multiply");
operDivide = document.getElementById("divide");
const endResult = document.getElementById("showresult");
const submitBtn = document.getElementById("btn");
clickBtns = document.getElementById("buttons"); 
let theResult;
plusIsClicked = false;
minusIsClicked = false;
multiplyIsClicked = false;
divideIsClicked = false;

function myFunction()
{
    firstNumber = document.getElementById("firstNumber").value;
    parseFirst = parseInt(firstNumber);
    secondNumber = document.getElementById("secondNumber").value;
    parseSecond = parseInt(secondNumber);
}   

function plusNumbers()
{
myFunction();
let resultPlus = parseFirst+parseSecond;
return(resultPlus);
}   
  
function minusNumbers()
{
 myFunction();
let resultMinus = parseFirst-parseSecond;
 return(resultMinus);
}
function multiplyNumbers()
{
 myFunction();
let resultMultiply = parseFirst*parseSecond;
return(resultMultiply);
}
function divideNumbers()
{
myFunction();
let resultDivide = parseFirst/parseSecond;
return(resultDivide);
}
function button(elem)
{
document.getElementById("buttons"); 
if(elem.id=="plus")
{
    plusIsClicked = true;
    plusNumbers();
}
else if(elem.id=="minus")
{
    minusIsClicked = true;
    minusNumbers();
}

else if(elem.id=="multiply")
{
    multiplyIsClicked = true;
    multiplyNumbers();
}

else if(elem.id=="divide")
{
    divideIsClicked = true;
    divideNumbers();
}
else
{
    alert("your programm not workink!");
}
return[plusIsClicked,minusIsClicked,multiplyIsClicked,divideIsClicked];
}

endResult.addEventListener("click", function hello()
{
   
   if(plusIsClicked == true)
   {
    theResult = plusNumbers();
   }
   else if(minusIsClicked == true)
   {
    theResult = minusNumbers();
   }
   else if(multiplyIsClicked == true)
   {
    theResult = multiplyNumbers();
   }
   else if(divideIsClicked == true)
   {
    theResult = divideNumbers();
   }

   submitBtn.setAttribute('value',"Результат равен: " + theResult);
})



