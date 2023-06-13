//PULL INPUT NAME FROM HTML INTO JAVASCRIPT
let expense = document.getElementById("expense");
console.log(expense);

//create an array for all the amount values
let amountSpent = [];

//PULL DATE FROM HTML INTO JAVASCRIPT
let purchaseDate = document.getElementById("Date");

//PULL AMOUNT FROM HTML INTO JAVASCRIPT
let amountSpentInput = document.getElementById("amount-spent");

//PULL BUTTON FROM HTML INTO JAVASCRIPT
let addExpense = document.getElementById("add-expense");
addExpense.addEventListener("click", eButton);

//PULL TABLE FROM HTML INTO JAVASCRIPT
// MUST ADD EVENT TO THE TABLE BECAUSE WE ARE ADDING THE deleteBtn dynamically and we can't make an "on-click" event to a button created dynamically 
const tableEl = document.getElementById("table");
tableEl.addEventListener("click", onDeleteRow);

function eButton(){
    const tBodyEl = document.getElementById("tbody-element");
    tBodyEl.innerHTML += `
      <tr>
        <td>${expense.value}</td>
        <td>${purchaseDate.value}</td>
        <td>$${amountSpentInput.value}</td>
        <td><button class = "deleteBtn">DELETE</button></td>
      </tr>
    `;
    totalAmount();
 }
 
 function onDeleteRow(x){
    if(!x.target.classList.contains("deleteBtn")){//target is what was clicked on
        
        return;
    }
    
    const btn = x.target;//making it known that target is the button
    btn.closest("tr").remove(); //THIS WILL REMOVE THE CLOSEST TABLE ROW WHEN I CLICK THE DELETE BUTTON
    
    // Update the total amount after deleting an expense
    totalAmount();
 }

  
function totalAmount() {
  // Reset the amountSpent array
  amountSpent = [];
  
  // Loop through each expense row and add the amount to the array
  const expenseRows = document.querySelectorAll("#tbody-element tr");
  expenseRows.forEach(row => {
    const amountCell = row.querySelector("td:nth-child(3)");
    amountSpent.push(parseFloat(amountCell.textContent.substring(1))); // Extract the numeric value
  });
  
  // Sum up the values in the amountSpent array
  let totalAmountSpent = amountSpent.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(totalAmountSpent);
  
  const sum = document.getElementById("sum");
  sum.innerHTML = `<h3>The total amount of expenses is: $${totalAmountSpent}</h3>`;
}
