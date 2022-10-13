const quizdata = [
    {
        question: "Which of the following is client side language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTMl stands for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Machine Language",
        c: "Hyper Markup Language",
        d: "Cascading Style Sheet",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the Above",
        correct: "b",
    },
    {
        question: "Which is the frontend language?",
        a: "Java",
        b: "css",
        c: "JavaScript",
        d: "Python",
        correct: "c",
    },
];
let index = 0,
    correct = 0,
    incorrect = 0,
    username = "",
    total=quizdata.length;

const question = document.querySelector(".question");
const questionnumber = document.querySelector(".questionnumber");
const quizapp = document.querySelector(".quizapp");
const quizheading = document.querySelector(".quizheading");
const result = document.querySelector(".result");
const resultstatus = document.querySelector(".result-status");
const score = document.querySelector(".score");
// const allinput = document.querySelectorAll("input[type='radio']");
// // console.log(allinput);
// const totalquestions = document.querySelector(".totalquestions");
// const attemptedquestions = document.querySelector(".attemptedquestions");
// const submitbn = document.querySelector(".submitbtn");
// const exitbtn = document.querySelector(".exitbtn");

const options=document.querySelectorAll(".option");

window.addEventListener("DOMContentLoaded", function () {
    loadquestions();
});

options.forEach(function(submitbtn)
{
    submitbtn.addEventListener("click", function (e) {
        const data = quizdata[index];
        if (data.correct === e.currentTarget.dataset.id) {
            correct++;
        }
        else {
            incorrect++;
        }
        index++;
        loadquestions();
    });
});

// exitbtn.addEventListener("click", function () {
//     let exitopt = confirm("Do you want to exit?")
//     if (exitopt === true)
//         exit();
// });

function loadquestions()
 {
    if (index === total)
       exit();
    // updatescore();
    console.log(index);
    const data = quizdata[index];
    questionnumber.innerHTML = `Question ${index+1}/${total}`
    question.innerHTML = `${data.question}`
    options[0].innerHTML = data.a;
    options[1].innerHTML = data.b;
    options[2].innerHTML = data.c;
    options[3].innerHTML = data.d;
}

// function updatescore() {
//     totalquestions.innerHTML = `TotalQuestions: ${total}`;
//     attemptedquestions.innerText = `Questions Attempted: ${index}`;
// }

function exit() {
    // alert("hii");
    quizapp.style.display = "none";
    quizheading.innerHTML= "QUIZ ENDED";
    result.style.display = "block";
    score.innerHTML = `Score: ${correct} / ${total} `;
    if (correct > incorrect)
        resultstatus.innerHTML = "YOU WON";
    else
        resultstatus.innerHTML = "YOU LOOSE";

};

// function authorisation()
// {
//     username=prompt("Enter your name to continue?")
//     if(username.length==0)
//     {
//         let options=confirm("Do you want to exit?")
//         if(options==true)
//         exit();
//         else
//         authorisation();
//     }
// }
