var word = " ";
word = prompt("¬введите строку:", "");

function countWord(str) {
  var arr = str.split(' ');
    
  while (arr[0] == "") {
     arr.shift(); 
  }
  
  while (arr[arr.length - 1] == "") {
    arr.pop();
  }
  
  alert(arr.length);
}

countWord(word);