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
const quizapp = document.querySelector(".quizapp");
const result = document.querySelector(".result");
const resultstatus = document.querySelector(".result-status");
const score = document.querySelector(".score");
const allinput = document.querySelectorAll("input[type='radio']");
// console.log(allinput);
const totalquestions = document.querySelector(".totalquestions");
const attemptedquestions = document.querySelector(".attemptedquestions");
const submitbn = document.querySelector(".submitbtn");
const exitbtn = document.querySelector(".exitbtn");

window.addEventListener("DOMContentLoaded", function () {
    loadquestions();
    // start();
    // authorisation();
});

submitbn.addEventListener("click", function () {
    const data = quizdata[index];
    const ans = getanswer();
    if (ans === data.correct) {
        correct++;
    }
    else {
        incorrect++;
    }
    index++;
    loadquestions();
});

exitbtn.addEventListener("click", function () {
    let exitopt = confirm("Do you want to exit?")
    if (exitopt === true)
        exit();
});

function getanswer() {
    let ans;
    allinput.forEach(function (inputbtn) {
        if (inputbtn.checked == true) {
            ans = inputbtn.value;
        }
    })
    return ans;
}

function loadquestions() {
    if (index === total)
        exit();
    updatescore();
    const data = quizdata[index];
    question.innerHTML = `${index + 1}:- ${data.question}`
    allinput[0].nextElementSibling.innerText = data.a;
    allinput[1].nextElementSibling.innerText = data.b;
    allinput[2].nextElementSibling.innerText = data.c;
    allinput[3].nextElementSibling.innerText = data.d;
}

function updatescore() {
    totalquestions.innerHTML = `TotalQuestions: ${total}`;
    attemptedquestions.innerText = `Questions Attempted: ${index}`;
}

function exit() {
    quizapp.style.display = "none";
    result.style.display = "block";
    score.innerHTML = `Score: ${correct} `;
    if (correct > incorrect)
        resultstatus.innerHTML = "YOU WON";
    else
        resultstatus.innerHTML = "YOU LOOSE";

};

function authorisation()
{
    username=prompt("Enter your name to continue?")
    if(username.length==0)
    {
        let options=confirm("Do you want to exit?")
        if(options==true)
        exit();
        else
        authorisation();
    }
}