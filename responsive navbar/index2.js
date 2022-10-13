document.querySelector(".closebtn").addEventListener("click",func1);
function func1()
{
     document.querySelector(".div-link").style.display="none";
     document.querySelector(".openbtn").style.display="block";
    //  k.classList.toggle('active');
    alert("closing sidebar");
};
document.querySelector(".openbtn").addEventListener("click",func);
function func()
{
    document.querySelector(".div-link").style.display="block";
    document.querySelector(".openbtn").style.display="none";
    //  k.classList.toggle('active');
    alert("opening sidebar");
};