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


document.getElementById("nextQuestion").addEventListener("click",function(){
    var option = document.querySelector(".quiz-options-container")
    option.style.display="flex"

})
function closeOptionModal(){
    var closeOptionModal = document.querySelector(".quiz-options-container")
    closeOptionModal.style.display="none"
}