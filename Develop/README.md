### 3rd-Party API Challenge: Work Day Scheduler

* [Github Repository] (https://github.com/KrispyKhang/3rd-Party-Calendar)
* [Deployed Github] (https://krispykhang.github.io/3rd-Party-Calendar/)


## Project Requirements

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the Day.jsLinks to an external site. library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality.


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Summary

* HTML, CSS, & Javascript were used to make the scheduler 
* Module 5 Challenge uses dynamic Javascript to power the work scheduler. 
* See GIF below for the finished product walkthrough
* targetted the '.container-fluid' div and worked in there using dynamic JS

## Features
# Walkthrough

![](./Assets/3rd%20part%20calendar.gif)

* you are presented with the Workday scheduler with a dynamic javascript code
* the workday hours are from 9:00AM - 5:00PM
* used Javascript to power the CSS styling of past(grey), present(green), future(green) to match the time block depending on the currentTime.
* Current time and date is updated from Javascript updating every 1000 milisecond (1sec) - capturing real time and date.
* users can implement data in the text area and it is stored in localStorage.

# BAMMM-BOOM - Keep track of your day-to-day! 