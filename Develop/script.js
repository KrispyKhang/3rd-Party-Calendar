// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const localeSettings = {};
dayjs.locale(localeSettings);

// -- FUNCTION 1--
// wait until the DOM is fully loaded before executing code inside the function below
$(function () {
  //  gets the current hour of the day using DayJS
  const currentHour = dayjs().format('H');


  // -- FUNCTION 2 --
  // function below changes the color of each .time-block based on past, present, future relative to currentHour
  function hourlyColor() {
    // loops through all elements with the class .time-block
    $('.time-block').each(function() {
      // inside the .each loop, the line extracts the class of the current block.
      // 'this' refers to the current DOM element being processed and converts it into
      // an integer using parseINT
      const blockHour = parseInt(this.id);
      // 'this' is being represented by each element with the class time-block

      // checks to see if 'blockHour' - block represented by the current time
      // is less than 'currentHour' (current hour of the day). if this condition
      // is true, it adds a CSS class 'past'  to the current time block element. 
      // if condition is false, removes the class 'past'

      // this goes applies for 'past', 'present', 'future'
      $(this).classList.add('past', blockHour < currentHour);
      $(this).classList.add('present', blockHour === currentHour);
      $(this).classList.add('future', blockHour > currentHour);
    });
  };

  // -- FUNCTION 3 --
  // function below saves user's input into localStorage
  function textEntry() {
    // uses Jquery elements to target all elements with the class of '.saveBtn' and attaches
    // a click event handler to them -  whenever the user clicks - the click event handler will be executed
    $('.saveBtn').on('click', function() {

      // inside click event handler, the liner retrieves the ID of the parent element of .savBTN
      const key = $(this).parent().attr('id');
      // retrieved the .description class sibling when user clicks on saveBtn and retrieves
      // its value whenever the user inputs text in the <textarea>
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  // -- FUNCTION 4 --
  // function to change color block based on past (grey, present (red), future (green), relative to the currentHour
  function colorRefresh() {
    // loop through each class of '.time-block'
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      
      if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
  
  

  // -- Parse user data from localStorage onto page"
  // gets user input from localStorage and places it on the <textarea> values when the user
  // goes on the page next time. 
  $('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);

  });

  // -- FUNCTION 5 --
  // Using DayJS to implement up-to-date date and time
  function updateTime() {
    const dateEl = $('#date');
    const timeEl = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');

    dateEl.text(currentDate);
    timeEl.text(currentTime);
  }

  

  hourlyColor();
  textEntry();
  colorRefresh();

  setInterval(updateTime, 1000);





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
   