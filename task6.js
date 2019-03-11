var items = [1, 2, 3, 4, 5, 6];

var i = partitionOn(isEven, items);

function isEven(n) {
  return n % 2 == 0
}

function partitionOn(pred, items) {
  var arrEven = [];
  var arrOdd = [];

  items.forEach( function(value) {

  if (pred(value)) { 
    arrEven.push(value);
  }

  else {
    arrOdd.push(value);
  }
});
  items = arrOdd.concat(arrEven);
  return arrOdd.length;

}

alert(i);