// start Button click
document.getElementById("myButton").addEventListener("click",function(){

    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display="block"

});
// function for Exitbutton click
document.getElementById("myExit").addEventListener("click",function(){
    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display="none"
});
// Add form validation and placeholder handling for userName field
document.getElementById("myContinue").addEventListener("click",function(){
    var userName=document.getElementById("userName")
    if(userName.value.trim()===""){
        userName.focus();
    }else{
        //continue with form submission
        var quizbox = document.querySelector(".quiz-question-container")
        quizbox.style.display="block"
        var rulesBox = document.querySelector(".rules");
        rulesBox.style.display="none"
        var myButton = document.getElementById("myButton")
        myButton.style.display="none"
    }

})

function clearPlaceholder(){
    var userName = document.getElementById("userName");
    if(userName.value.trim()==="Field required"){
        userName.value="";
    }
}
function setPlaceholder(){
    var userName = document.getElementById("userName");
    if(userName.value.trim()===""){
        userName.value="Field required"
    }
}


// document.getElementById("nextQuestion").addEventListener("click",function(){
//     var option = document.querySelector(".quiz-options-container")
//     option.style.display="flex"
    // var nextQuestion = document.getElementById("nextQuestion");
    // nextQuestion.style.display = "none"

// })
function closeOptionModal(){
    var closeOptionModal = document.querySelector(".quiz-options-container")
    closeOptionModal.style.display="none"
    // var nextQuestion = document.getElementById("nextQuestion");
    // nextQuestion.style.display = "block"
}

//Define Array of quiz questions
const quizQuestion = [
    {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
    },
    {
    question: "what is the largest planet in our solar system?",
    options: ["Earth","Jupitar","Mars","Saturn"],
    answer: "Jupitar"
    },
];

let currentQuestionIndex = 0;
const displayQuestion = document.getElementById("display-question");
const optionOneLabel = document.getElementById("option-one-label");
const optionTwoLabel = document.getElementById("option-two-label");
const optionThreeLabel = document.getElementById("option-three-label");
const optionFourLabel = document.getElementById("option-four-label");

function renderQuestion(){
    const currentQuestion = quizQuestion[currentQuestionIndex];
    displayQuestion.textContent = currentQuestion.question;
    optionOneLabel.textContent = currentQuestion.options[0];
    optionTwoLabel.textContent = currentQuestion.options[1];
    optionThreeLabel.textContent = currentQuestion.options[2];
    optionFourLabel.textContent = currentQuestion.options[3];
}
nextQuestion.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<quizQuestion.length){
        renderQuestion();
    }else{
        console.log("End  the quiz")
    }
})
renderQuestion()

