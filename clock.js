const date = document.querySelector('.date');
const time = document.querySelector('.time');
const input = document.querySelector('#yolo');
const save = document.querySelector('#save')
const cancel = document.querySelector('#cancel')
const ul = document.querySelector('ul');
const button = document.querySelector('.hell')

setInterval(function () {
    let date = new Date();
    let n = date.getDate() + "/" + date.getMonth() + ' /' + date.getFullYear();
    let mins = ('0' + date.getMinutes()).slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    date.innerText = `${n}`;
    time.innerText = `${hours}:${mins}`

    if (input.value === time.innerText) {
        play()
        input.value = 'Alarm is playing'


    }



}, 0.1)

save.addEventListener('click', function () {
    let sup = document.createElement('li')
    sup.innerText = input.value
    ul.appendChild(sup)
}
)
function play() {
    let audio = new Audio('alarm.mp3');
    audio.play()
}
