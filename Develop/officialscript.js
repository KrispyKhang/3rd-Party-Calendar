

const template = document.querySelector('#template');
const targetEl = document.querySelector('.container-fluid');
const date = new Date()
const currentHour = date.getHours()
const currentDate = date.toLocaleDateString()


const dateEl = document.querySelector("#date")
const timeEl = document.querySelector("#time")

function setDateAndTime(){
    dateEl.textContent = currentDate
    timeEl.textContent = new Date().toLocaleTimeString()
}
setDateAndTime()

setInterval(setDateAndTime, 1000)

const hoursArray = [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
];

for (let i = 0; i < hoursArray.length; i++) {
    const element = hoursArray[i];
    const timeBlock = template.content.cloneNode(true);
    const timeStamp = timeBlock.querySelector('.hour');
    const textArea = timeBlock.querySelector('.description');
    const button = timeBlock.querySelector('button')


    timeStamp.textContent = getTime(element)
    button.addEventListener('click', ()=>{ //alternative for function()
        localStorage.setItem(element, textArea.value)
    })

    if (element === currentHour) {
        textArea.classList.add('present');
    } else if (element < currentHour) {
        textArea.classList.add('past');
    } else {
        textArea.classList.add('future');
    }

    textArea.textContent =localStorage.getItem(element)




    targetEl.append(timeBlock);
};

function getTime(hour) {
    switch (hour) {
        case 9:
            return "9:00 AM"
        case 10:
            return "10:00 AM"
        case 11:
            return "11:00 AM"
        case 12:
            return "12:00 PM"
        case 13:
            return "1:00 PM"
        case 14:
            return "2:00 PM"
        case 15:
            return "3:00 PM"
        case 16:
            return "4:00 PM"
        case 17:
            return "5:00 PM"

    }
}

