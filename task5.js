var string = "";
string = prompt("Enter word(s):", "");
var pos = string.length / 2; 

if (string.length % 2 == 0) {
  alert(string.substr(pos - 1, 2));

} else {
  alert(string[Math.round(pos-1)]);
}