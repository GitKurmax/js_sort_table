document.body.querySelector('#grid').addEventListener('click', function(event) {
  let arr = [];
  let tbody = this.querySelector('tbody');
  let rowsCollection = tbody.rows;

  if (event.target.tagName === 'TH') {
    arr.push(...rowsCollection);
    
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

    tbody.append(...arr);
  }
});
