var add = document.getElementById("increment");
var remove = document.getElementById("decrement");
var integer = document.getElementById("number");
var int = 0;
add.addEventListener("click", addItem);
function addItem() {
  int++;
  integer.innerText = int;
}
remove.addEventListener("click", removeItem);
function removeItem() {
  int--;
  integer.innerHTML = int;
}
