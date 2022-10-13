function displaytime()
{
    let date=new Date();
    let hrs=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    
     if(hrs>12)
    {
        let a=hrs-12;
         document.getElementById("section").innerHTML="PM";
         document.getElementById("hours").innerHTML=a;
     }
     else
     {
        document.getElementById("section").innerHTML="AM";
     }

  
    if(hrs==0)
    {
        hrs=12;
        document.getElementById("hours").innerHTML=hrs;
    }
     if(hrs<12)
     {

         document.getElementById("hours").innerHTML=hrs;
     }
    document.getElementById("minutes").innerHTML=minute;
    document.getElementById("seconds").innerHTML=second;
}

setInterval(displaytime,10);


