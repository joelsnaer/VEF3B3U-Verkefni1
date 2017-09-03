symbol = document.getElementById('symbol');
symbol.addEventListener("click", function() {
  path = symbol.getAttribute('d');
  if (path == "M 150 300 L 150 150 L 300 150 L 300 300 L 150 300") {
    symbol.setAttribute('d', "M 150 300 L 227 149 L 300 300 L 150 300");
  }
  else {
    symbol.setAttribute('d', "M 150 300 L 150 150 L 300 150 L 300 300 L 150 300");
  }
});
