

// start Button click
let showUserprompt = false;
document.getElementById("myButton").addEventListener("click", function () {

    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display = "block";


});
// function for Exitbutton click
document.getElementById("myExit").addEventListener("click", function () {
    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display = "none";
});
document.getElementById("myContinue").addEventListener("click", function () {
    showUserprompt = true;
    var userName = document.getElementById("userName");
    if (userName.value.trim() === "") {
        userName.focus();
    } else {
        //continue with form submission
        var rulesBox = document.querySelector(".rules");
        rulesBox.style.display = "none";
        var quizbox = document.querySelector(".quiz-question-container");
        quizbox.style.display = "block";
        var myButton = document.getElementById("myButton");
        myButton.style.display = "none";
        renderQuestion();
        startTimer();
    }

});

function clearPlaceholder() {
    var userName = document.getElementById("userName");
    if (userName.value.trim() === "Field required") {
        userName.value = "";
    }
}
function setPlaceholder() {
    var userName = document.getElementById("userName");
    if (userName.value.trim() === "") {
        userName.value = "Field required";
    }
}

document.getElementById("userName").addEventListener("input",function(event){
    const namePattern = /^[A-Za-z]*$/;
    const userName = event.target;
    if(!namePattern.test(userName.value)){
        userName.value = userName.value.replace(/[^a-zA-Z]/g,'');
    }
    if(userName.value.length>0){
        userName.value = userName.value.charAt(0).toUpperCase() + userName.value.slice(1).toLowerCase();
    }
});

function closeOptionModal() {
    var closeOptionModal = document.querySelector(".quiz-options-container");
    closeOptionModal.style.display = "none";
    var nextQuestion = document.querySelector(".next-button-container");
    nextQuestion.style.display ="block";
    console.log("stopping timer");
    startTimer();
    console.log("timer is stopped");
    
    
    // startTimer();
    // var nextQuestion = document.getElementById("nextQuestion");
    // nextQuestion.style.display = "block"
}

//Define Array of quiz questions
const quizQuestion = [
    {
        question: "What is the primary hormone released during the body's fight or flight response to stress?",
        options: ["Insulin", "Dopamine", "Cortisol", "Serotonin"],
        answer: "Dopamine"
    },
    {
        question: "Which of the following is a healthy coping mechanism for stress?",
        options: ["Smoking", "Regular exercise", "Excessive alcohol consumption", "Avoiding social interactions"],
        answer: "Regular exercise"
    },
    {
        question: "What is mindfulness meditation primarily focused on?",
        options: ["Ignoring emotions", "Staying in the past", "Being present in the moment", "Multitasking"],
        answer: "Being present in the moment"

    },
    {
        question: "Which of the following strategies can help in time management and reduce stress?",
        options: ["Procrastination", "Multitasking", "Prioritizing tasks", "Avoiding planning"],
        answer: "Prioritizing tasks"
    },
    {
        question: "What is one way to promote a healthy work-life balance and reduce stress?",
        options: ["Working long hours without breaks", "Setting clear boundaries between work and personal time", "Checking emails and messages at all hours", "Avoiding vacations and time off"],
        answer: "Setting clear boundaries between work and personal time"
    },
    {
        question: "What is the role of a support system in managing stress?",
        options: ["Isolating individuals from social interactions", "Creating additional stress", "Providing emotional and practical support", "Ignoring personal challenges"],
        answer: "Providing emotional and practical support"
    },
    {
        question: "Chronic stress is linked to an increased risk of which health issues?",
        options: ["Improved immune function", "Weight loss", "Cardiovascular problems", "Better sleep"],
        answer: "Cardiovascular problems"
    },
    {
        question: "Which lifestyle factor is associated with chronic stress?",
        options: ["Healthy Diet", "Adequate Sleep", "Regular Exercise", "Poor Time Management"],
        answer: "Poor Time Management"
    },
    {
        question: "What is the recommended approach when facing a stressful situation that cannot be changed?",
        options: ["Ignoring the situation", "Denying the stress", "Acceptance and adapting", "Blaming others"],
        answer: "Acceptance and adapting"
    },
    {
        question: "What is 'eustress' and how does it differ from 'distress'?",
        options: ["Eustress: Positive experiences; Distress: Negative experiences", "Eustress: Exercise; Distress: Rest", "Eustress: Challenging situations; Distress: Smooth situations", "Eustress: Extreme stress; Distress: Mild stress"],
        answer: "Eustress: Positive experiences; Distress: Negative experiences"
    },


];
//function for random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

}
const shuffleQuestionArray = shuffleArray(quizQuestion);

let currentQuestionIndex = 0;
const totalQuestions = quizQuestion.length;
const displayQuestion = document.getElementById("display-question");
const optionOneLabel = document.getElementById("option-one-label");
const optionTwoLabel = document.getElementById("option-two-label");
const optionThreeLabel = document.getElementById("option-three-label");
const optionFourLabel = document.getElementById("option-four-label");
// "Add functionality to dynamically display question number during quiz progression"
function displayQuestionNumber(){
    const questionNumberDisplay = document.getElementById("question-number");
    questionNumberDisplay.textContent = `${currentQuestionIndex + 1} of ${totalQuestions}`;
}


function renderQuestion() {
    const currentQuestion = shuffleQuestionArray[currentQuestionIndex];
    displayQuestion.textContent = currentQuestion.question;
    optionOneLabel.textContent = currentQuestion.options[0];
    optionTwoLabel.textContent = currentQuestion.options[1];
    optionThreeLabel.textContent = currentQuestion.options[2];
    optionFourLabel.textContent = currentQuestion.options[3];
    clearOptionSelection();
    enableRadioButtons();
    displayQuestionNumber();
    

}


//clear selection from all options
function clearOptionSelection() {
    const allOption = document.querySelectorAll('input[name=option]');
    allOption.forEach(option => {
        option.checked = false;

    });
}
function enableRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="option"]');
    radioButtons.forEach(radioButton => {
        radioButton.disabled = false;
    });

}
// const optionAll = document.querySelectorAll('.option');
// optionAll.forEach(option => {
//     option.style.backgroundColor = "";
// });



document.getElementById("nextQuestion").addEventListener("click", () => {

    // Add logic to handle unselected options in quiz
    const selectOption = document.querySelector('input[name="option"]:checked');
    

    if (!selectOption) {
        var option = document.querySelector(".quiz-options-container");
        option.style.display = "flex";
        var nextQuestion = document.querySelector(".next-button-container");
        nextQuestion.style.display ="none";
        stopTimer(); 
        return;
    }
    stopTimer();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestion.length) {
        renderQuestion();
        startTimer();
        if(currentQuestionIndex===quizQuestion.length-1){
            document.getElementById("nextQuestion").textContent="Result";
        }
    } else {
        var nextQuestion = document.querySelector(".next-button-container");
        nextQuestion.style.display ="none";
        stopTimer();
        displayResults();
        

    }

}

);
let correctAnswerCount=0;
const radioButtons = document.querySelectorAll('input[name="option"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", checkAnswer);
    
});
function checkAnswer() {
       
    const selectOption = document.querySelector('input[name="option"]:checked');
     const selectedOptionId = selectOption.id;
    const selectedOption = selectOption.value;
    const labelElement = selectOption.parentElement;
    const selectedOptionIndex = selectOption.value.charCodeAt(6) - 65; // Mapping 'A', 'B', 'C', 'D' to 0, 1, 2, 3
    const currentQuestion = shuffleQuestionArray[currentQuestionIndex];
    const currentAnswer = currentQuestion.answer;
    const options = currentQuestion.options;
    ansSelected = true;
    stopTimer();
   

    // Check if selected option matches the current answer
    if (options[selectedOptionIndex] === currentAnswer) {
        correctAnswerCount++;
       
        // console.log("Correct Answer");
        // Apply green color to the selected option
        labelElement.classList.add("correct");
        
    } else {
        // console.log("Wrong Answer");
        // Apply red color to the selected option
        labelElement.classList.add("wrong");
       
    }
 
    // Disable all options after user selects one
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });
    displayCorrectAnswerCount();
   
    
}
function displayCorrectAnswerCount(){
    const CorrectAnswerCount = document.getElementById("player-score");
    CorrectAnswerCount.textContent = `${correctAnswerCount}of ${totalQuestions}`;
}
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", checkAnswer);
});
//Timer
let timeStarted = false;
let timer = 15;
let timeInterval;
let ansSelected = false;

function updatetime(){
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timer;
    if(!ansSelected){
        if(timer===0){
            stopTimer();
    
            promptUserOption();
        
        }else{
            timer--;
        }  
    }  
}
        

function startTimer(){

    timer=15;
    ansSelected = false;
    updatetime();
    if(timeInterval){
        clearInterval(timeInterval);

    }
    timeInterval = setInterval(updatetime,1000);

}
function stopTimer(){
    // console.log("timer is stopping")
    clearInterval(timeInterval);
    // console.log("timer is stopped");
      timeStarted=false;
}
function promptUserOption(){
    if(showUserprompt){
        // console.log(showUserprompt)
    
    stopTimer();    
    // console.log("timer is stopped")
     var prompt = document.querySelector(".modal-user-prompt");
     prompt.style.display="block";
     var nextQuestion = document.querySelector(".next-button-container");
     nextQuestion.style.display ="none";
     var options = document.querySelectorAll(`input[type="radio"]`);
     options.forEach(option=>{
        option.disabled=true;
     });
     
}
}


function renderFirstQuestion(){
    renderQuestion();
    // if(!timeStarted){
    //     startTimer();
       timeStarted=true;
    // }
}

renderFirstQuestion();
function ok(){
    startTimer();
    var prompt = document.querySelector(".modal-user-prompt");
     prompt.style.display="none";
     var nextQuestion = document.querySelector(".next-button-container");
     nextQuestion.style.display ="block";
     
     var options = document.querySelectorAll(`input[type="radio"]`);
     options.forEach(option=>{
      option.disabled=false;
     });
    
     
}


function displayResults(){
    var userName = document.getElementById("userName").value;
    var playerName = document.getElementById("playerName");
    playerName.textContent = userName;
    
    const qwrightanswers = document.getElementById("qright");
    qwrightanswers.textContent= `Correct Answers: ${correctAnswerCount}`;
    const attempts = document.getElementById("attempt");
    attempts.textContent = `Attempts:${currentQuestionIndex}`;
    const qwronganswers = document.getElementById("qwrong");
    qwronganswers.textContent = `Wrong Answers: ${currentQuestionIndex-correctAnswerCount}`;
    const grade = document.getElementById("grade");
    const percentage = (correctAnswerCount/totalQuestions)*100;
    grade.textContent =`Grdae : ${percentage.toFixed(2)}%`;
    const congrat = document.getElementById("congrat");
    congrat.textContent =percentage>=50 ? "congratulations" : "Keep Practicing";
    const results = document.querySelector(".modal-user-results");
    results.style.display = "block";



}

// Result Exit function
document.getElementById("exit").addEventListener("click",exit);

function exit(){
    var exitResults = document.querySelector(".modal-user-results");
    exitResults.style.display = "none";
   var userThanks= document.querySelector(".thanks-user-prompt");
   userThanks.style.display="block";
    
}

document.getElementById("restart").addEventListener("click",restart);
function restart(){
    currentQuestionIndex =0;
    correctAnswerCount =0;
    clearOptionSelection();
    enableRadioButtons();
    var thankPrompt = document.querySelector(".thanks-user-prompt");
    thankPrompt.style.display="none";
    var quiz = document.querySelector(".quiz-question-container");
    quiz.style.display="none";
    var myButton = document.getElementById("myButton");
    myButton.style.display ="block";
    var nextQuestion = document.querySelector(".next-button-container");
    nextQuestion.style.display ="block";
    renderQuestion();
    // startTimer();
    displayCorrectAnswerCount();
    document.getElementById("nextQuestion").textContent="NextQuestion";

}