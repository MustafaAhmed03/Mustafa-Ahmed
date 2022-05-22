var counter = 0;

var totalBal = 5000;
document.getElementById("totalBal").innerHTML= totalBal;

var amazonSum = 170;
document.getElementById("amazonSum").innerHTML= amazonSum;

var transport = 75;
document.getElementById("transport").innerHTML= transport;

var food = 150;
document.getElementById("food").innerHTML= food;

var spendSum = 1505;
document.getElementById("spendSum").innerHTML= spendSum;

var personal = 60;
document.getElementById("personal").innerHTML= personal;

var funNum = 50;
document.getElementById("funNum").innerHTML= funNum;

var depositNum = 800;
document.getElementById("depositNum").innerHTML= depositNum;

//quiz1 variables
var spendWrong1 = document.getElementById("spendWrong1");
var spendWrong2 = document.getElementById("spendWrong2");
var spendCorrect = document.getElementById("spendCorrect");
//and spendSum

//quiz2 variables
var depositWrong1 = document.getElementById("depositWrong1");
var depositWrong2 = document.getElementById("depositWrong2");
var depositCorrect = document.getElementById("depositCorrect");

//quiz3 variables

var amazonWrong1 = document.getElementById("amazonWrong1");
var amazonWrong2 = document.getElementById("amazonWrong2");
var amazonCorrect = document.getElementById("amazonCorrect");

// quiz4 variables
var personalWrong1 = document.getElementById("personalWrong1");
var personalWrong2 = document.getElementById("personalWrong2");
var personalCorrect = document.getElementById("personalCorrect");


// //quiz5 variables
var funWrong1 = document.getElementById("funWrong1");
var funWrong2 = document.getElementById("funWrong2");
var funCorrect = document.getElementById("funCorrect");

//Quiz buttonclick logic

//quiz1 logic
spendWrong1.addEventListener("click", Q1A1);
function Q1A1(){
    document.getElementById("spendWrong2").disabled = true;
    document.getElementById("spendCorrect").disabled = true;
    spendSumAnswer();
  }

spendCorrect.addEventListener("click", Q1A2);
function Q1A2(){
    document.getElementById("spendWrong2").disabled = true;
    document.getElementById("spendWrong1").disabled = true;
    spendSumAnswer();
  }

spendWrong2.addEventListener("click", Q1A3);
function Q1A3(){
    document.getElementById("spendWrong1").disabled = true;
    document.getElementById("spendCorrect").disabled = true;
    spendSumAnswer();
  }

function spendSumAnswer(){
  if(document.getElementById("spendCorrect").disabled === false){
    var spendResult = "Correct! You spent $" + spendSum + " this month.";
  }else{
    var spendResult = "Not quite, you spent $" + spendSum + " this month.";
  }
  
  document.getElementById("spendResult").innerHTML = spendResult;
}

//quiz2 logic
depositWrong1.addEventListener("click", Q2A1);
function Q2A1(){
    document.getElementById("depositWrong2").disabled = true;
    document.getElementById("depositCorrect").disabled = true;
    depositAnswer();
  }

depositWrong2.addEventListener("click", Q2A2);
function Q2A2(){
    document.getElementById("depositWrong1").disabled = true;
    document.getElementById("depositCorrect").disabled = true;
    depositAnswer();
  }

depositCorrect.addEventListener("click", Q2A3);
function Q2A3(){
    document.getElementById("depositWrong1").disabled = true;
    document.getElementById("depositWrong2").disabled = true;
    depositAnswer();
  }

function depositAnswer(){
  if(document.getElementById("depositCorrect").disabled === false){
    var depositResult = "Correct! You deposited $" + depositNum + " this month.";
  }else{
    var depositResult = "Not quite, you deposited $" + depositNum + " this month.";
  }
  
  document.getElementById("depositResult").innerHTML = depositResult;
}

//quiz3 logic

amazonWrong1.addEventListener("click", Q3A1);
function Q3A1(){
    document.getElementById("amazonWrong2").disabled = true;
    document.getElementById("amazonCorrect").disabled = true;
    amazonAnswer();
  }

amazonWrong2.addEventListener("click", Q3A2);
function Q3A2(){
    document.getElementById("amazonWrong1").disabled = true;
    document.getElementById("amazonCorrect").disabled = true;
    amazonAnswer();
  }

amazonCorrect.addEventListener("click", Q3A3);
function Q3A3(){
    document.getElementById("amazonWrong1").disabled = true;
    document.getElementById("amazonWrong2").disabled = true;
    amazonAnswer();
  }

function amazonAnswer(){
  if(document.getElementById("amazonCorrect").disabled === false){
    var amazonResult = "Correct. You spent $" + amazonSum + " at Amazon this month.";
  }else{
    var amazonResult = "Not quite, you spent $" + amazonSum + " at Amazon this month.";
  }
  
  document.getElementById("amazonResult").innerHTML = amazonResult;
}

//quiz4 logic
personalWrong1.addEventListener("click", Q4A1);
function Q4A1(){
    document.getElementById("personalWrong2").disabled = true;
    document.getElementById("personalCorrect").disabled = true;
    personalAnswer();
  }

personalWrong2.addEventListener("click", Q4A2);
function Q4A2(){
    document.getElementById("personalWrong1").disabled = true;
    document.getElementById("personalCorrect").disabled = true;
    personalAnswer();
  }

personalCorrect.addEventListener("click", Q4A3);
function Q4A3(){
    document.getElementById("personalWrong1").disabled = true;
    document.getElementById("personalWrong2").disabled = true;
    personalAnswer();
  }

function personalAnswer(){
  if(document.getElementById("personalCorrect").disabled === false){
    var personalResult = "Correct. You spent $" + personal + " via Venmo this month.";
  }else{
    var personalResult = "Not quite, you spent $" + personal + " via Venmo this month.";
  }
  
  document.getElementById("personalResult").innerHTML = personalResult;
}

//q5 logic
funWrong1.addEventListener("click", Q5A1);
function Q5A1(){
    document.getElementById("funWrong2").disabled = true;
    document.getElementById("funCorrect").disabled = true;
    funAnswer();
  }

funWrong2.addEventListener("click", Q5A2);
function Q5A2(){
    document.getElementById("funWrong1").disabled = true;
    document.getElementById("funCorrect").disabled = true;
    funAnswer();
  }

funCorrect.addEventListener("click", Q5A3);
function Q5A3(){
    document.getElementById("funWrong1").disabled = true;
    document.getElementById("funWrong2").disabled = true;
    funAnswer();
  }

function funAnswer(){
  if(document.getElementById("funCorrect").disabled === false){
    var funResult = "Correct. You spent $" + funNum + " on concert tickets this month.";
  }else{
    var funResult = "Not quite, you spent $" + funNum + " on concert tickets this month.";
  }
  
  document.getElementById("funResult").innerHTML = funResult;
}


//left and right button code


function rightFunction(){
  
  console.log("hide " + counter);
  
  var x = document.getElementById(counter);
  
  //hide the current div
  x.style.display = "none";
  counter++;
  console.log("show " + counter);
  
  x = document.getElementById(counter);
  
  //show the next div
  x.style.display = "inline";
  
  if(counter === 16){
    document.getElementById("right").disabled = true;
  }

}

function leftFunction(){
  
  if(counter === 16){
    document.getElementById("right").disabled = true;
  }else{
    document.getElementById("right").disabled = false;
  }
  
  var x = document.getElementById(counter);
  
  //hide the current div
  x.style.display = "none";
  console.log("hide " + counter);
  counter--;
  
  
  console.log("show " + counter);
  
  x = document.getElementById(counter);
  
  //show the next div
  x.style.display = "inline";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


