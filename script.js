var rangeInput = document.querySelector('.inp');
var rangeValueElement = document.getElementById('rangeValue');
var height = 0; // Declare height variable

rangeInput.addEventListener('input', () => {
  rangeValueElement.innerHTML = rangeInput.value + "cm";
  height = rangeInput.value; // Assign the input value to height
  console.log(height);
});

let calWeight = 0;
var buttons = document.querySelector('.getWieght');
var weight = 0; // Declare weight variable
console.log(buttons);

buttons.addEventListener('click', (e) => {
  if (e.target.value == "+") {
    calWeight++;
    document.getElementById('exactWieght').innerHTML = calWeight + "Kg";
    weight = calWeight; // Assign the updated weight to the variable
    console.log(weight);
  } 

  else if (e.target.value == "-") {
    calWeight--;
    document.getElementById('exactWieght').innerHTML = calWeight + "Kg";
  }

  var evaluate = document.getElementById('cal')
  evaluate.addEventListener('click', ()=>{
    var exactBmi = weight / ((height * height)/100);
    document.getElementById('your-Bodymass').innerHTML = "Your BMI is: " + exactBmi.toFixed(4);
    console.log(exactBmi);
    document.getElementById('exactWieght').innerHTML =0
  })
});



var gender = document.querySelectorAll('.btn');
var previousButton = null; // Store reference to previously selected button

gender.forEach(button => {
  button.addEventListener('click', (e) => {
    if (previousButton !== null) {
      previousButton.style.backgroundColor = ""; // Remove style from previous button
    }

    e.target.style.backgroundColor = "red"; // Change the background color of the clicked button
    previousButton = e.target; // Update the reference to the newly selected button
  });
});


