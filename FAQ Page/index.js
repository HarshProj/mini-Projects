var ques=document.querySelectorAll(".FAQ_Question");
var ans=document.querySelectorAll(".FAQ_Answer");
var submitbtn=document.querySelectorAll(".card_submitbtn");
// var languagedropdown=document.querySelectorAll(".dropdown");
// console.log(languagedropdown);
// console.log(submitbtn);
for(var i=0;i<ques.length;i++)
{
    ques[i].addEventListener('click',function ()
    {
        var openans=this.childNodes[3];
        var body = this.nextElementSibling;
        body.classList.toggle('hidden');
        openans.classList.toggle('rotate');
    })
}
function gotopage(selval){
    var value = selval.options[selval.selectedIndex].value;
    window.location.href=value;
    }
// for(var i=0;i<submitbtn.length;i++)
// {
//     submitbtn[i].addEventListener('click',function ()
//     {
//         alert("pressed");
//         window.location.replace="/index2.html";
//         // var openans=this.childNodes[3];
//         // var body = this.nextElementSibling;
//         // body.classList.toggle('hidden');
//         // openans.classList.toggle('rotate');
//     })
// }