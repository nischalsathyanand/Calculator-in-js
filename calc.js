var number1=document.getElementById("inp1");
var number2=document.getElementById("inp2");
var scr=document.getElementById("screen");


function finalResult()
{

    if((opr).value=="add")
    {
     findAdd();
    }
    else if((opr).value=="sub")
    {
     findSub();
    }
    else if((opr).value=="mul")
    {
     findMul();
    }
    else if((opr).value=="div")
    {
     findDiv();
    }

}
function findSub()
{
   var sub=number1.value - number2.value;
scr.value=sub;
}
function findMul()
{
   var mul=number1.value * number2.value;
   scr.value=mul;

}
function findDiv()
{
   var div=number1.value / number2.value;
   scr.value=div;

}
function findAdd()
{
  var sum=+number1.value+ +number2.value;
   scr.value=sum;

}