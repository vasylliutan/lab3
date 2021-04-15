var submitClicked = (event) => {

    // event.preventDefault()
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var age = document.getElementById("age");
    var gen = document.querySelector("input[name='Gender']:checked")
    let info = document.getElementById("txtarea")
    alert(`Information
        Name: ${login.value} 
        Age: ${age.value} 
        Password: ${password.value}
        Gender: ${gen.value}
        More info: ${info.value}`)

}


let countOfelem = [];
let elemOfTable = [];

elemOfTable.push("wr");
elemOfTable.push("wb");
elemOfTable.push("wq");
elemOfTable.push("wk");
elemOfTable.push("wn");
elemOfTable.push("wp");

elemOfTable.push("br");
elemOfTable.push("bb");
elemOfTable.push("bq");
elemOfTable.push("bk");
elemOfTable.push("bn");
elemOfTable.push("bp");

for (let i = 0; i < elemOfTable.length; i++) {
    countOfelem.push(document.getElementsByClassName(`${elemOfTable[i]}`).length);
}
let count = [];
for (let i = 0; i < 6; i++) {
    count.push(countOfelem[i] + countOfelem[i + 6])
}


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Rooks", "Bishops", "Queen", "King", "Knights", "Pawns"],
        datasets: [{
            label: 'Count of element',
            backgroundColor: ['rgba(157, 221, 221, 1)',
                'rgba(255, 225, 154, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 141, 165, 1)',
                'rgba(103, 185, 240, 1)',
                'rgba(182, 146, 255, 1)'
            ],
            borderColor: ['yellow', 'blue', 'red', 'black', 'green', 'pink'],
            data: [...count, 0]
        }]
    },

    // Configuration options go here
    options: {}
});



let timerInput = document.getElementById("time"); // Берём строку
let buttonRun = document.getElementById("button"); // Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени
console.log("Info");

buttonRun.addEventListener('click', function() {
    var timerInfo = document.getElementById("time");
    if (timerInfo.value == "") { alert(`Enter time`) }
    console.log("Button pressed");
    timeMinut = parseInt(timerInput.value) // * 60 * 60

})

timer = setInterval(function() {
    console.log("Func");
    seconds = timeMinut % 60 // Получаем секунди
    minutes = timeMinut / 60 % 60 // Получаем хвилини
    hour = timeMinut / 60 / 60 % 60 // Получаем години
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)