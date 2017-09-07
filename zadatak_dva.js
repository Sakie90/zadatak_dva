function doFact(n) {
  return +!(+(n)) || doFact(n - 1) * n;
}

function factorialFromInput() {
  var theInputVal = document.getElementsByTagName("input")[0].value;
  var theContainer = document.getElementById("resultContainer");
  theContainer.innerHTML = "" + doFact(Math.abs(theInputVal));
}