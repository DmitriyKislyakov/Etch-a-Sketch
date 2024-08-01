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
      cell.addEventListener('mousemove', (e) => {
        e.target.style.background = 'gray'
      })
    }
  }
}

createGrid(cellCount)

function resetFunction() {
  let cells = document.querySelectorAll('.cell')
  cells.forEach((cell) => {
    cell.style.background = 'whitesmoke'
  })
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', resetFunction)

function trueNumber(str) {
  let num = Number(str)
  if ((num ^ 0) === num) {
    return num >= 2 && num <= 100
  }
  return false
}

function resizeFunction() {
  let number = prompt(
    'Choose Your cell-count on side\n(Cell-count must be integer and in[2; 100]):'
  )
  if (trueNumber(number)) {
    cellCount = Number(number)
    container.innerHTML = ''
    return createGrid(cellCount)
  } else {
    alert('Incorrect number! Repeat pleace.')
    return resizeFunction()
  }
}

const resize = document.querySelector('#resize')
resize.addEventListener('click', resizeFunction)

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function rgbFunction() {
  container.innerHTML = ''
  for (let i = 0; i < cellCount; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (let j = 0; j < cellCount; j++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      row.appendChild(cell)
      cell.addEventListener('mousemove', (e) => {
        e.target.style.background = randomColor()
      })
    }
  }
}

const rgb = document.querySelector('#rgb')
rgb.addEventListener('click', rgbFunction)

function darkOpacity() {
  let n = 0
  if (n <= 1) n = n + 0.1
  return n
}

function darkFunction() {
  container.innerHTML = ''
  for (let i = 0; i < cellCount; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (let j = 0; j < cellCount; j++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      row.appendChild(cell)
      cell.addEventListener('mousemove', (e) => {
        e.target.style.background = 'gray'
        e.target.style.opacity = darkOpacity()
      })
    }
  }
}

const dark = document.querySelector('#dark')
dark.addEventListener('click', darkFunction)
