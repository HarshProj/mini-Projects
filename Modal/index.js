var a=document.querySelector(".press").addEventListener("click",func1);
var a=document.querySelector(".cut").addEventListener("click",func2);
function func1()
{
    console.log("pressed");
    // alert("pressed");
    // document.getElementById(".div1").style.transition = " 2s";
    document.querySelector('.div1').style.display="none";
    // document.querySelector('#div2').classList.add("block");
    document.querySelector('.div2').style.display="block";
}
function func2()
{
    console.log("pressed");
    // alert(" cut pressed");
    document.querySelector('.div1').style.display="block";
    // document.querySelector('#div2').classList.add("block");
    document.querySelector('.div2').style.display="none";
}