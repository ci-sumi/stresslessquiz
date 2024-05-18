

// start Button click
let showUserprompt = false;
document.getElementById("myButton").addEventListener("click", function () {

    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display = "block";


});
// function for Exitbutton click
document.getElementById("myExit").addEventListener("click", function () {
    var rulesBox = document.querySelector(".rules");
    rulesBox.style.display = "none"
});
// Add form validation and placeholder handling for userName field
document.getElementById("myContinue").addEventListener("click", function () {
    showUserprompt=true;
    var userName = document.getElementById("userName")
    if (userName.value.trim() === "") {
        userName.focus();
    } else {
        //continue with form submission
        var quizbox = document.querySelector(".quiz-question-container")
        quizbox.style.display = "block"
        startTimer();
        var rulesBox = document.querySelector(".rules");
        rulesBox.style.display = "none"
        var myButton = document.getElementById("myButton")
        myButton.style.display = "none"
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
        userName.value = "Field required"
    }
}


// document.getElementById("nextQuestion").addEventListener("click",function(){
//     var option = document.querySelector(".quiz-options-container")
//     option.style.display="flex"
// var nextQuestion = document.getElementById("nextQuestion");
// nextQuestion.style.display = "none"

// })
function closeOptionModal() {
    var closeOptionModal = document.querySelector(".quiz-options-container")
    closeOptionModal.style.display = "none"
    var nextQuestion = document.querySelector(".next-button-container");
    nextQuestion.style.display ="block";
    console.log("stopping timer")
    stopTimer();
    console.log("timer is stopped")
    
    
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


];
//function for random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;

}
const shuffleQuestionArray = shuffleArray(quizQuestion)

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
    questionNumberDisplay.textContent = `${currentQuestionIndex+1} of ${totalQuestions}`
}


function renderQuestion() {
    const currentQuestion = shuffleQuestionArray[currentQuestionIndex];
    displayQuestion.textContent = currentQuestion.question;
    optionOneLabel.textContent = currentQuestion.options[0];
    optionTwoLabel.textContent = currentQuestion.options[1];
    optionThreeLabel.textContent = currentQuestion.options[2];
    optionFourLabel.textContent = currentQuestion.options[3];
    clearOptionSelection();
    enableRadioButtons()
    displayQuestionNumber();

}
renderQuestion()

//clear selection from all options
function clearOptionSelection() {
    const allOption = document.querySelectorAll('input[name=option]')
    allOption.forEach(option => {
        option.checked = false;

    });
}
function enableRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="option"]')
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
    const selectOption = document.querySelector('input[name="option"]:checked')
    

    if (!selectOption) {
        var option = document.querySelector(".quiz-options-container")
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
    } else {
        var nextQuestion = document.querySelector(".next-button-container");
        nextQuestion.style.display ="none";
        stopTimer();
        displayResults();
        

    }

}

);

// const radioButtons = document.querySelectorAll('input[name="option"]');
// radioButtons.forEach(radioButton => {
//     radioButton.addEventListener("change", checkAnswer);
// });

// function checkAnswer() {
//     const selectOption = document.querySelector('input[name="option"]:checked');
//     console.log(selectOption);
//     const selectedOptionValue = selectOption.value;
//     const correctAnswer = shuffleQuestionArray[currentQuestionIndex].answer;
//     console.log(correctAnswer);

//     // Accessing the parent element of the label associated with the selected option
//     const parentElement = selectOption.parentElement;

//     // Comparing the selected option value with the correct answer
//     if (selectedOptionValue === correctAnswer) {
//         parentElement.style.color = "green";
//     } else {
//         parentElement.style.color = "red";
//     }

//     // Disable all radio buttons after an option is selected
//     const radioButtons = document.querySelectorAll('input[name="option"]');
//     radioButtons.forEach(radio => {
//         radio.disabled = true;
//     });
// }
let correctAnswerCount=0;
const radioButtons = document.querySelectorAll('input[name="option"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", checkAnswer);
    
});
function checkAnswer() {
       
    const selectOption = document.querySelector('input[name="option"]:checked');
    const selectedOption = selectOption.value;
    const labelElement = selectOption.parentElement;
    const selectedOptionIndex = selectOption.value.charCodeAt(6) - 65; // Mapping 'A', 'B', 'C', 'D' to 0, 1, 2, 3
    const currentQuestion = shuffleQuestionArray[currentQuestionIndex];
    const currentAnswer = currentQuestion.answer;
    const options = currentQuestion.options;
    stopTimer();
    // timer = document.getElementById("timer")
    // timer.style.display="none"
  

    // Log selected option and current question for debugging
    // console.log("Selected Option:", selectedOption);
    // console.log("Current Question:", currentQuestion);
    
    

    // Check if selected option matches the current answer
    if (options[selectedOptionIndex] === currentAnswer) {
        correctAnswerCount++;
       
        // console.log("Correct Answer");
        // Apply green color to the selected option
        labelElement.classList.add("correct")
    } else {
        // console.log("Wrong Answer");
        // Apply red color to the selected option
        labelElement.classList.add("wrong")
    }
 
    // Disable all options after user selects one
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });
    displayCorrectAnswerCount();
   
    
}
function displayCorrectAnswerCount(){
    const CorrectAnswerCount = document.getElementById("player-score");
    CorrectAnswerCount.textContent = `${correctAnswerCount}of ${totalQuestions}`
}
//Timer
let timeStarted = false;
let timer = 15;
let timeInterval;
function updatetime(){
    document.getElementById("timer").textContent = timer;
    if(timer===0){
        stopTimer();
        promptUserOption();
    
    }else{
        timer--;
    }  
    
    }
        

function startTimer(){

    timer=15;
    updatetime();
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
     var prompt = document.querySelector(".modal-user-prompt") 
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
    if(!timeStarted){
        startTimer();
        timeStarted=true;
    }
}

renderFirstQuestion();
function ok(){
    var prompt = document.querySelector(".modal-user-prompt") 
     prompt.style.display="none";
     var nextQuestion = document.querySelector(".next-button-container");
     nextQuestion.style.display ="block";
     startTimer();
     var options = document.querySelectorAll(`input[type="radio"]`)
     options.forEach(option=>{
      option.disabled=false;
     });
    //  document.getElementById("nextQuestion").click();
     
}
//To restart quiz

// function restart(){
    
//     var quizbox = document.querySelector(".modal-user-results")
//     quizbox.style.display = "block";
//     // var rulesBox = document.querySelector(".rules");
//     // rulesBox.style.display = "block";
//     // var quizbox = document.querySelector(".quiz-question-container")
//     // quizbox.style.display = "none"

// }

function displayResults(){
    const results = document.querySelector(".modal-user-results");
    results.displayed=true;
    const qwrightanswers = document.getElementById("qright");
    qwrightanswers.textContent= `Correct Answers: ${correctAnswerCount}`;
    const attempts = document.getElementById("attempt")
    attempts.textContent = `Attempts:${currentQuestionIndex}`
    const qwronganswers = document.getElementById("qwrong");
    qwronganswers.textContent = `Wrong Answers: ${currentQuestionIndex-correctAnswerCount}`;
    const grade = document.getElementById("grade");
    const percentage = (correctAnswerCount/totalQuestions)*100;
    grade.textContent =`Grdae : ${percentage.toFixed(2)}%`;
    const congrat = document.getElementById("congrat")
    congrat.textContent =percentage>=50 ? "congratulations" : "Keep Practicing"



}