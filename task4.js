var day = +prompt("Enter the number of days:", "");

function cashback(d) {
  var sum = 0;
  var back3Days = 20;
  var back7Days = 50;

  if (d < 3) {
    sum = d * 40;
    alert("Your current price for " + d + " days is " + sum + "$");
  } 

  if (d >= 3 && d < 7) {
    sum = d * 40 - 20;
    alert("You get cashback " + back3Days + "$");
    alert("Your current price for " + d + " days is " + sum + "$");
  }

  if (d >= 7) {
    sum = d * 40 - 50;
    alert("You get cashback " + back7Days + "$");
    alert("Your current price for " + d + " days is " + sum + "$");
  }
}

cashback(day);