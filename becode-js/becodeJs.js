//Going through a table with DOM

var myTable = document.getElementById('myTable');

myTable.rows[0].cells[1].innerHTML = 'Bonjour';
myTable.rows[0].cells[1].style.color = 'green';

