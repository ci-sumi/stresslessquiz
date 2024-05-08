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
    question: "What is the primary hormone released during the body's fight or flight response to stress?",
    options: ["Insulin","Dopamine","Cortisol","Serotonin"],
    answer: "Dopamine"
    },
    {
    question: "Which of the following is a healthy coping mechanism for stress?",
    options: ["Smoking","Regular exercise","Excessive alcohol consumption","Avoiding social interactions"],
    answer: "Regular exercise"
    },
    {
    question: "What is mindfulness meditation primarily focused on?",
    options:["Ignoring emotions","Staying in the past","Being present in the moment","Multitasking"],
    answer: "Being present in the moment"
    
    },
    {
    question:"Which of the following strategies can help in time management and reduce stress?",
    options:["Procrastination","Multitasking","Prioritizing tasks","Avoiding planning"],
    answer:"Prioritizing tasks"
    },
    {
    question:"What is one way to promote a healthy work-life balance and reduce stress?",
    options:["Working long hours without breaks","Setting clear boundaries between work and personal time","Checking emails and messages at all hours","Avoiding vacations and time off"],
    answer:"Setting clear boundaries between work and personal time"
    },
    {
      question:"What is the role of a support system in managing stress?",
      options:["Isolating individuals from social interactions","Creating additional stress","Providing emotional and practical support","Ignoring personal challenges"],
      answer:"Providing emotional and practical support"
    },
    {
        question:"Chronic stress is linked to an increased risk of which health issues?",
        options:["Improved immune function","Weight loss","Cardiovascular problems","Better sleep"],
        answer:"Cardiovascular problems"
      },
    {
        question:"Which lifestyle factor is associated with chronic stress?",
        options:["Healthy Diet","Adequate Sleep","Regular Exercise","Poor Time Management"],
        answer:"Poor Time Management"
    },
    {
        question:"What is the recommended approach when facing a stressful situation that cannot be changed?",
        options:["Ignoring the situation","Denying the stress","Acceptance and adapting","Blaming others"],
        answer:"Acceptance and adapting"
    },
    
    
];
//function for random questions
function shuffleArray(array){
    for(let i = array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]]
    }
    return array;

}
const shuffleQuestionArray = shuffleArray(quizQuestion)

let currentQuestionIndex = 0;
const displayQuestion = document.getElementById("display-question");
const optionOneLabel = document.getElementById("option-one-label");
const optionTwoLabel = document.getElementById("option-two-label");
const optionThreeLabel = document.getElementById("option-three-label");
const optionFourLabel = document.getElementById("option-four-label");

function renderQuestion(){
    const currentQuestion = shuffleQuestionArray[currentQuestionIndex];
    displayQuestion.textContent = currentQuestion.question;
    optionOneLabel.textContent = currentQuestion.options[0];
    optionTwoLabel.textContent = currentQuestion.options[1];
    optionThreeLabel.textContent = currentQuestion.options[2];
    optionFourLabel.textContent = currentQuestion.options[3];
    clearOptionSelection()

}
//clear selection from all options
function clearOptionSelection(){
const allOption = document.querySelectorAll('input[name=option]')
allOption.forEach(option => {
    option.checked=false;
    
});
}


nextQuestion.addEventListener("click",()=>{
// Add logic to handle unselected options in quiz
    const selectOption = document.querySelector('input[name="option"]:checked')
    console.log(selectOption)
    if(!selectOption){
        var option = document.querySelector(".quiz-options-container")
        option.style.display="flex";
    }


    currentQuestionIndex++;
    if(currentQuestionIndex<quizQuestion.length){
        renderQuestion();
    }else{
        console.log("End  the quiz")
    }
})
renderQuestion()

