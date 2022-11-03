/*
== Problem ==
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the cashAvailableue for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the cashAvailableue of the change key.

-Currency denomVal-	      -Amount-
Penny	                $0.01 (PENNY)
Nickel	              $0.05 (NICKEL)
Dime	                $0.1 (DIME)
Quarter	              $0.25 (QUARTER)
Dollar	              $1 (ONE)
Five Dollars	        $5 (FIVE)
Ten Dollars	          $10 (TEN)
Twenty Dollars	      $20 (TWENTY)
One-hundred Dollars	  $100 (ONE HUNDRED)

== Test Cases ==
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
*/

function checkCashRegister(price, cash, cid) {
  let denominations = {
    "PENNY"       : 0.01,
    "NICKEL"      : 0.05,
    "DIME"        : 0.1,
    "QUARTER"     : 0.25,
    "ONE"         : 1,
    "FIVE"        : 5,
    "TEN"         : 10,
    "TWENTY"      : 20,
    "ONE HUNDRED" : 100,
  }
  let changeVal = cash - price;
  let change = []; // change to be returned in result
  let result = {status: "CLOSED"}; // assume status closed until later if we do not wipe out any denomination of cash

  for (let i = cid.length-1; i >= 0; i--) {
    let [key, cashAvailable] = cid[i];
    let denomVal = denominations[key];
    let amount = 0;

    if (denomVal <= changeVal && cashAvailable > 0) {
      if (cashAvailable <= changeVal) {
        amount = cashAvailable;
      } else {
        amount = Math.floor(changeVal/denomVal) * denomVal;
        result.status = "OPEN";
      }
      change = change.concat([[key, amount]]);
      changeVal -= amount;
      changeVal = +(changeVal.toFixed(2)); //fix JavaScript float precision
    }
    if (changeVal === 0) {
      result.change = change;
    }
    if (result.status === "CLOSED") {
      result.change = cid;
    }
  }

  if (changeVal !== 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  return result;
}
