const paragraph = document.querySelector('p')
const textColorInput = document.querySelector('[type="color"]')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    paragraph.style.color = textColorInput.value
})