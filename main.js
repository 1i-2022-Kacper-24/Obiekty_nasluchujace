const paragraph = document.querySelectorAll('p')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const textColorInput = document.querySelector('#textColorInput')
const textSizeInput = document.querySelector('#textSizeInput')
const backgroundColorInput = document.querySelector('#backgroundColorInput')

button1.addEventListener('click', function(){
    paragraph.forEach(paragraph => {
    paragraph.style.color = textColorInput.value})
})
button2.addEventListener('click', function(){
    paragraph.forEach(paragraph => {
    paragraph.style.fontSize = `${textSizeInput.value}px`})
})
button3.addEventListener('click', function() {
    paragraph.forEach(paragraph => {
        paragraph.style.backgroundColor = backgroundColorInput.value;
    });
});