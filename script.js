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