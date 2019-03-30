const container = document.querySelector('.container')
const setCanvas = document.querySelector('button')


const createGrid = function(num) {
    for(let i = 1; i <= num; i++) {
        const divRow = document.createElement('div')
        // divRow.textContent = `${i}`  - Row count guide for setup
        divRow.setAttribute('class', 'div-row')
        container.appendChild(divRow)
        for(let j = 1; j <= num; j++) {
            const divColumn = document.createElement('div')
            // divColumn.textContent = `${j}` - Column count guide for setup
            divColumn.setAttribute('class', 'div-column')
            divRow.appendChild(divColumn)
        }
    }
}

createGrid(16)

const pixel = document.querySelectorAll('.div-column')

pixel.forEach(function(elem) {
    elem.addEventListener('mouseover', function(e) {
    e.target.classList.add('draw')
    });
});

const removeElement = function(elemClass) {
    const elem = document.querySelectorAll(`.${elemClass}`)
    elem.forEach(function(e) {
        return e.parentNode.removeChild(e)
    });
}

setCanvas.addEventListener('click', function() {
    pixel.forEach(function(elem) {
        elem.classList.remove('draw')
    })
    const newSize = parseInt(prompt('How many squares would you like per side?'), 10)
    removeElement('div-column')
    removeElement('div-row')
    createGrid(newSize)
    const newPixel = document.querySelectorAll('.div-column')
    newPixel.forEach(function(elem) {
        elem.addEventListener('mouseover', function(e) {
        e.target.classList.add('draw')
        });
    });
})
