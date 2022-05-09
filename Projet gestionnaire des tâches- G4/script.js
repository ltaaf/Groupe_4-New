function affiche() {
  var x = document.forms["inputs"];
  var result = "";
  
  for (var i = 0; i < x.length - 1; i++) {
      result += "<p>" + x.elements[i].value + "</p>";
      document.getElementById("Output").innerHTML = result;
  }
}