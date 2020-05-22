
function myFunction(event) {
  console.log(event)
  var elementId;
  debugger;
  if (event.target.id === "next" || event.target.id === "prev") {
    elementId = event.target.hash;
  }
  else {
    elementId = event.target.parentElement.hash;
  }
  elementId = elementId.replace("#", "");
  document.getElementById(elementId).style.display = "block";


}



