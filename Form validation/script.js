const username=document.getElementById("username");
const phone=document.getElementById("phone");
const mail=document.getElementById("mail");
const password=document.getElementById("pass");
const cpassword=document.getElementById("confirmpass");
const form=document.getElementById("form");
const formcontents=document.querySelectorAll(".formcontents");
var count=0;

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    Validate();
    // console.log("submit triggered");
})

function seterrormsg(input, message) {
    const formcontainer = input.parentElement;   //accesssing the present input box div
    // console.log(formcontainer);
    const errorsmall=formcontainer.querySelector("small");   //small inside that input form
    errorsmall.innerText=message;   //setting  HTML of current small tag
    formcontainer.classList.add("error");
    const icon=formcontainer.querySelector(".wrong");; 
    icon.classList.add("sucess"); 
    errorsmall.classList.add("sucess"); 
    errorsmall.classList.remove("initialerrormsg"); 
} 

function setsucessmsg(input)
{
    count++;
    // console.log("Sucess tri");
    const formcontainer=input.parentElement;
    // console.log(formcontainer);
    formcontainer.classList.add("sucess");
    const icon=formcontainer.querySelector(".right");; 
    icon.classList.add("sucess"); 
}
 
function ismailval(maildata)
{
   var atrate=maildata.indexOf("@");
   if(atrate<1) return false;

   var dot=maildata.lastIndexOf(".");
   if(dot<=atrate+2)
   return false;
   if(dot===maildata.length-1)
   return false

   return true;
}

function submissionmsg(count,usernamedata)
{
    if(count===5)
    {
        alert("thanks for submission");
        swal("Welcome!"+usernamedata ,"Thanks for submission", "success");
        // alert("thanks for submission");
        // location.href="index.html";
        location.href=`demo.html?username=${usernamedata}`;
    }
}

function sucessatend()
{
    const formcontents=document.querySelectorAll(".formcontents");
    var count=0;
    console.log(formcontents);
    for(i=0;i<formcontents.length;i++)
    {
        if(formcontents[i].className === "formcontents sucess");
        {
            count+=1;
            console.log(formcontents[i].className);
        }
    }
    console.log(count);
}

//   Validate function

function Validate() {
    const usernamedata = username.value.trim();
    const phonedata = phone.value.trim();
    const maildata = mail.value.trim();
    const passworddata = password.value.trim();
    const cpassworddata = cpassword.value.trim();

    console.log(usernamedata);
    console.log(phonedata);
    console.log(maildata);
    console.log(passworddata);
    console.log(cpassworddata);

    // Validating username 

    if(usernamedata==="")
    {
        seterrormsg(username,"Username cannot be blank");
    }
    else if(usernamedata.length<=2)
    {
        seterrormsg(username,"Username too short");
    }
    else{
        setsucessmsg(username);
    }


    // Validating phone no
    if( phonedata==='')
    {
        seterrormsg(phone,"Cannot have blank");
    }
    else if(phonedata.length!=10)
    {
        seterrormsg(phone," wrong phone number");
    }
    else
    {
        setsucessmsg(phone);
    }

    // Validating Mail 
    if(maildata==='')
    {
        seterrormsg(mail,"Cannot have blankMail");
    }
    else if( ismailval(maildata)==false)
    {
        seterrormsg(mail,"Wrong Mail");
    }
    else
    {
        setsucessmsg(mail);
    }

    // Validating password
    if(passworddata.length<=5)
    {
        seterrormsg(password,"Too short password");
    }
    else if(passworddata==='')
    {
        seterrormsg(password,"Cannot have blank");
    }
    else
    {
        setsucessmsg(password);
    }

    // confirmpassword Validate

    if(cpassworddata==='')
    {
        seterrormsg(cpassword,"Cannot have blank");
    }
    else if(cpassworddata !==passworddata)
    {
        seterrormsg(cpassword,"Wrong Password");
    }
    else
    {
        setsucessmsg(cpassword);
    }

    console.log(count);
    // checking all fields
    
    submissionmsg(count,usernamedata);

    // if(count ==5)
    // alert("Thnak you for submission");
    
}

