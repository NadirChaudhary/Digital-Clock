const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    clock.textContent = date.toLocaleTimeString()
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    clock.style.color = '#' + randomColor;
    let randomBackColor = Math.floor(Math.random() * 16777215).toString(16)
    clock.style.backgroundColor = '#' + randomBackColor;
},1000)