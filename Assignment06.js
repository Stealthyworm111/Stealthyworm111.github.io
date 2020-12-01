
// --- global variables ---
if(localStorage.getItem("loansArray")=="null")
  {
    var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
   ]; 

  }
else
  {
    let retrievedData = localStorage.getItem("loansArray");
    let loans2 = JSON.parse(retrievedData);
    loans=loans2;

  }


// --- function: loadDoc() ---

function loadDoc() {
  
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  document.getElementById("loan_year0" + 1).value = defaultYear++;
  var defaultLoanAmount = loans[0].loan_amount;
  document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
  var defaultInterestRate = loans[0].loan_int_rate;
  document.getElementById("loan_int0" + 1).value = defaultInterestRate;
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));
  
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    document.getElementById("loan_year0" + i).value = defaultYear++;
    document.getElementById("loan_year0" + i).disabled = true;
    document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
    document.getElementById("loan_year0" + i).style.color = "white";
    document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
    document.getElementById("loan_int0" + i).value = defaultInterestRate;
    document.getElementById("loan_int0" + i).disabled = true;
    document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
    document.getElementById("loan_int0" + i).style.color = "white";
   loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
   document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  
} // end: function loadDoc()


function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(document).ready(function(){
  //The table runs off of if the user updates the value then it runs the fucntions 
  //the amount is validated based off whether of not it is a number
  // local Storage works by saving it everytime someone "completes the table" (when they enter a number into the fifth loan amount box)
$("#loan_year01").click(function(){
  updateLoansArray();
 });
$("#loan_amt01").change(function(){
  updateLoansAmount(0);
    if(validate(0)==true)
      alert("Enter a number");
   });
$("#loan_amt02").change(function(){
  updateLoansAmount(1);
  if(validate(1)==true)
      alert("Enter a number");
   });
$("#loan_amt03").change(function(){
  updateLoansAmount(2);
  if(validate(2)==true)
      alert("Enter a number");
   });
$("#loan_amt04").change(function(){
  updateLoansAmount(3);
  if(validate(3)==true)
      alert("Enter a number");
   });
$("#loan_amt05").change(function(){
  updateLoansAmount(4);
  if(validate(4)==true)
      alert("Enter a number");
   });
  
$("#loan_int01").change(function(){
  updateLoansInt();
  });
  
$("#loan_amt05").change(function(){
 updateIntAcc();
  });

});

 function updateLoansAmount(i) {
 
 loans[i].loan_amount = parseInt($("#loan_amt0"+(i+1)).val());
     
   
   switch(i)
     {
       case 0: loan_bal01.innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount;
         break;
       case 1: loan_bal02.innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount + parseFloat(loan_bal01.innerHTML);
         break;
         case 2: loan_bal03.innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount + parseFloat(loan_bal02.innerHTML);
         break;
         case 3: loan_bal04.innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount + parseFloat(loan_bal03.innerHTML);
         break;
         case 4: loan_bal05.innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount+  parseFloat(loan_bal04.innerHTML);
         JSON.stringify(loans);
         localStorage.setItem("loansArray", JSON.stringify(loans));
         let retrievedData = localStorage.getItem("loansArray");
         let loans2 = JSON.parse(retrievedData);
         break;
     }
  ("loan_bal0" + i).innerHTML = loans[i].loan_amount * loans[i].loan_int_rate + loans[i].loan_amount;
}

 function updateLoansArray() {
  loans[0].loan_year = parseInt($("#loan_year01").val());
  for(var i=1; i<5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
    
  }
}
function updateLoansInt() {
  loans[0].loan_int_rate = parseFloat($("#loan_int01").val());
  loan_bal01.innerHTML = loans[0].loan_amount * loans[0].loan_int_rate + loans[0].loan_amount;
  
  for(var i=1; i<5; i++) {
    loans[(i)].loan_int_rate = loans[0].loan_int_rate;
    $("#loan_int0"+ (i+1) ).val(loans[i].loan_int_rate);
  
  }
  
  
   
   
}
function updateIntAcc() {
   let sum =0;
  for(let i=0;i<5;i++)
    {
      sum = sum + loans[i].loan_amount;
      
    }
  loan_int_accrued.innerHTML = parseFloat(loan_bal05.innerHTML) - sum;
  
  
  }
function validate(i) {
  let str = (loans[i].loan_amount).toString();
  let pat = /[^0-9]/g;
  let result = str.match(pat);
  if(result == null)
    return false;
  else
    return true;
  
}
JSON.stringify(loans);
localStorage.setItem("loansArray", JSON.stringify(loans));
   
   
