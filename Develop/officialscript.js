
// Javascript version, worked with tutor
// selecting the '.template' id and the parent div with class containing '.container-fluid'
const template = document.querySelector('#template');
const targetEl = document.querySelector('.container-fluid');

// get the current date and hour
const date = new Date()
const currentHour = date.getHours()
const currentDate = date.toLocaleDateString()

// selecting the date and time IDs in html
const dateEl = document.querySelector("#date")
const timeEl = document.querySelector("#time")

// function to set the date and time display
function setDateAndTime(){
    dateEl.textContent = currentDate
    timeEl.textContent = new Date().toLocaleTimeString()
}

// set the initial date and time, and update them evey second (clock keeps updating real-time)
setDateAndTime()
setInterval(setDateAndTime, 1000)

// array representing the workday hours.
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

// loop through each workday hour and create time blocks 
for (let i = 0; i < hoursArray.length; i++) {
    const element = hoursArray[i];
    const timeBlock = template.content.cloneNode(true);
    const timeStamp = timeBlock.querySelector('.hour');
    const textArea = timeBlock.querySelector('.description');
    const button = timeBlock.querySelector('button')

    // set label for this time block
    timeStamp.textContent = getTime(element)

    // add an event listner to the save button to store user input in localStorage 
    button.addEventListener('click', ()=>{ //alternative for function()
        localStorage.setItem(element, textArea.value)
    })

    // determine if the time block is in the past, present, future, based on the current hour
    if (element === currentHour) {
        textArea.classList.add('present');
    } else if (element < currentHour) {
        textArea.classList.add('past');
    } else {
        textArea.classList.add('future');
    }

    // retrieve the user input from localStorage and populate the textArea
    textArea.textContent =localStorage.getItem(element)


    // appent the time blcok to the target element
    targetEl.append(timeBlock);
};

// function to convert the hour to a time format 
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

