let cellCount = 16
const container = document.querySelector('.container')

function createGrid(cellCount) {
  for (let i = 0; i < cellCount; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (let j = 0; j < cellCount; j++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      row.appendChild(cell)
    }
  }
}

createGrid(cellCount)
