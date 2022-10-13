let counta=0;
let countb=0;
document.getElementById("a").addEventListener("click",()=>{
    counta++;
    document.getElementById("dispa").innerHTML=counta;
})
document.getElementById("b").addEventListener("click",()=>{
    countb++;
    document.getElementById("dispb").innerHTML=countb;
})
document.getElementById("reset").addEventListener("click",()=>{
    counta=0;
    countb=0;
    document.getElementById("dispa").innerHTML="00";
    document.getElementById("dispb").innerHTML="00";
})