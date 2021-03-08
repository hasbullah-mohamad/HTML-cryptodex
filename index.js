var table = document.getElementById('display-table');
var cells = table.getElementsByClassName('clickable');

for (var i = 0; i < cells.length; i++) {
  var cell = cells[i];
  cell.onclick = function () {
      var rowId = this.parentNode.rowIndex;
      var rowsNotSelected = table.getElementsByTagName('tr');
      for (var row = 0; row < rowsNotSelected.length; row++) {
          rowsNotSelected[row].style.backgroundColor = "";
          rowsNotSelected[row].classList.remove('row-active');
      }
      var rowSelected = table.getElementsByTagName('tr')[rowId];
      rowSelected.className += " row-active";
  }
}