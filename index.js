//PULL INPUT NAME FROM HTML INTO JAVASCRIPT
let expense = document.getElementById("expense");
console.log(expense);

//PULL DATE FROM HTML INTO JAVASCRIPT
let purchaseDate = document.getElementById("Date");

//PULL AMOUNT FROM HTML INTO JAVASCRIPT
let amountSpent = document.getElementById("amount-spent");

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
        <td>$${amountSpent.value}</td>
        <td><button class = "deleteBtn">DELETE</button></td>
      </tr>
    `;
    
 }

 function onDeleteRow(x){
    if(!x.target.classList.contains("deleteBtn")){//target is what was clicked on
        return;
    }
    
    const btn = x.target;//making it known that target is the button
    btn.closest("tr").remove(); //THIS WILL REMOVE THE CLOSEST TABLE ROW WHEN I CLICK THE DELETE BUTTON
 }

 //let totalExpense = 