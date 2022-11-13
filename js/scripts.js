
// Business Logic
function count(countTo, countBy) {
  let countArray = [];
  for (let index = 0; index <= countTo; index += countBy) {
    countArray.push(index);
  }
  return countArray;
}

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const countBy = parseInt(document.getElementById("countBy").value);
  let div = document.createElement('div');
  let countOutput = count(countTo, countBy);
  div.append(countOutput.join(', '));
  let form = document.getElementById("form");
  form.after(div);
}

window.addEventListener("submit", handleFormSubmission);


//Business Logic


/*function counterfunction(event) {
let countAr = [];
let countOutput = "";
for (let index = 0; index <= parseInt(document.querySelector("input#countTo").value); index += parseInt(document.querySelector("input#countBy").value)){
countAr.push(index);
countOutput = countAr.join(", ");
  }
  console.log(countOutput);
}

//UI Logic

  
function handleFormSubmission(event) {
  event.preventDefault();
  let p = document.getElementById("output");
  p.append(countOutput);
}

  window.addEventListener("submit", handleFormSubmission);

*/
  