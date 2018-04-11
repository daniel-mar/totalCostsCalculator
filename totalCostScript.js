function btnClick() {
  var itemName = document.getElementById('itemName').value;
  var itemCost = parseFloat( document.getElementById('itemCost').value );
  var itemQuantity = parseInt( document.getElementById('itemQuantity').value );
  var taxRate = parseFloat( document.getElementById('taxRate').value );
  var total = 0;
  var msg = "";

  // TAX RATE CONVERSION
  var adjTax = taxRate / 100;

  // CALC TOTAL
  total = itemCost * itemQuantity;
  taxed = total * adjTax;

  total = total + taxed;

  msg += "<div>At $" + itemCost + " each, for " + itemQuantity + " " + itemName + "(s).</div>";
  msg += "<div>With a " + taxRate + "% Tax Rate.</div>";
  msg += "<div>Your total cost would be: $" + total.toFixed(2) + ".</div>";

    document.getElementById("output").innerHTML = msg

}