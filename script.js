document.body.querySelector('#grid').addEventListener('click', function(event) {
  let rowsCollection = this.rows;
  let arr = [];
  let tbody = this.querySelector('tbody');

  if (event.target.tagName === 'TH') {
    for (let i = 1; i < rowsCollection.length; i++) {
      arr.push(rowsCollection[i]);
    }

    if (event.target.dataset.type === 'number') {
      arr.sort((n1, n2) => n1.cells[event.target.cellIndex].innerHTML - n2.cells[event.target.cellIndex].innerHTML);
    } else {
      arr.sort((n1, n2) => {
        if (n1.cells[event.target.cellIndex].innerHTML > n2.cells[event.target.cellIndex].innerHTML){
          return 1;
        } else {
          return -1;
        }
      });
    }

    for (let i = 0; i < arr.length; i++) {
      tbody.appendChild(arr[i]);
    }
  }
});
