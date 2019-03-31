const container = document.querySelector('.container')
const setCanvas = document.querySelector('#reset-btn')
const rainbow = document.querySelector('#rainbow-brush')
const erase = document.querySelector('#erase-brush')
let rainbowBrush = false;
let eraseBrush = false;

const rgbValue = function(){
    return Math.floor(Math.random()*256).toString()
}

const alphaValue = function() {
    const transparency = [0.3,0.4,0.5,0.6,0.7,0.8]
    const index = Math.floor(Math.random()*transparency.length)
    return transparency[index]
}

const makeRandom = function() {
    let result = ''
    const redValue = rgbValue()
    const greenValue = rgbValue()
    const blueValue = rgbValue()
    const aValue = alphaValue()
    result = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${aValue})`
    return result
}

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

createGrid(40)

const pixel = document.querySelectorAll('.div-column')

pixel.forEach(function(elem) {
    elem.addEventListener('mouseover', function(e) {
    if(!rainbowBrush && !eraseBrush) {
        e.target.classList.add('draw')
    } else if(rainbowBrush && !eraseBrush) {
        e.target.setAttribute('style', `background-color: ${makeRandom()};`)
    } else if(!rainbowBrush && eraseBrush) {
        e.target.setAttribute('style', `background-color: black;`)
    }
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

rainbow.addEventListener('click', function(e) {
    if(eraseBrush) {
        eraseBrush = false;
        rainbowBrush = true;
        erase.setAttribute('style', 'background: rgb(53, 53, 53); border: none;')
        rainbow.setAttribute('style', 'background: rgb(70, 70, 70); border: 2px solid rgb(206, 206, 206);')
    } else {
        if(rainbowBrush) {
            rainbowBrush = false
            e.target.setAttribute('style', 'background: rgb(53, 53, 53); border: none;')
        } else {
            rainbowBrush = true
            e.target.setAttribute('style', 'background: rgb(70, 70, 70); border: 2px solid rgb(206, 206, 206);')
        }
    }
})

erase.addEventListener('click', function(e) {
    if(rainbowBrush) {
        rainbowBrush = false;
        eraseBrush = true;
        rainbow.setAttribute('style', 'background: rgb(53, 53, 53); border: none;')
        erase.setAttribute('style', 'background: rgb(70, 70, 70); border: 2px solid rgb(206, 206, 206);')
    } else {
        if(eraseBrush) {
            eraseBrush = false
            e.target.setAttribute('style', 'background: rgb(53, 53, 53); border: none;')
        } else {
            eraseBrush = true
            e.target.setAttribute('style', 'background: rgb(70, 70, 70); border: 2px solid rgb(206, 206, 206);')
        }
    }
})


