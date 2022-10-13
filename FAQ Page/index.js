var btn=document.querySelectorAll(".ansgen");
var x=document.querySelectorAll(".ansdiv");

console.log(x);
console.log(btn);
var i;
var k;
for(i=0;i<btn.length;i++)
{
   btn[i].addEventListener("click",function()
   {
      
    this.classList.toggle('active');
       var body = this.nextElementSibling;
    //    var b=this.previousSibling;
    //    console.log(b);
       this.style.transform="rotate(45deg)";
    //    alert("pressed");
       console.log(body);
       if(body.style.display==="block")
       body.style.display="none";
       else
       body.style.display="block";
       
    })
};

// var j;
// var btn2=document.querySelectorAll(".cutgen");
// for( j=0;j<btn2.length;j++)
// {
//     btn2[j].addEventListener("click",function()
//     {
//         var body2 = this.nextElementSibling;
//         alert(" cut pressed");
//        console.log(body2);
//        body2.style.display="none";
//    })
// };
