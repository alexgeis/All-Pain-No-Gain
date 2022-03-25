

//_________________________________________________________________________________________
// Drop Down Menu
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

// ______________________________________________________________________________________
document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');
  
    // initialize the external events
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });
    
    //allows events to be dragged
    var calendar = new Calendar(calendarEl, {
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });
  
    calendar.render();
  });

//______________________________________________________________________________________________
//Add events to calendar/formatting
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap5',
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    initialView: 'dayGridMonth',
    displayEventTime: false,
    googleCalendarApiKey: 'AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94',
    timeZone: 'UTC',
    selectable: true,
    editable: true,
    headerToolbar: {
    left: 'today, dayGridMonth,timeGridWeek,timeGridDay mealBtn',
    center: 'title',
    right: 'workoutBtn, prevYear,prev,next,nextYear'
  },

  dateClick: function(event) {
  var clickDate = prompt('What would you like to add?');
      calendar.addEvent({
        title: clickDate,
        start: event.date,
    })
  },
    customButtons: {
      workoutBtn: {
        text: 'Add Workout',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format for your workout:');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time
          var workoutInput = prompt('Great. Now, enter your workout:');

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: workoutInput,
              start: date,
              allDay: true
            });
          } else {
            alert('Invalid date.');
          }
        }
      },
      mealBtn: {
        text: 'Add Meal',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format for your meal:');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time
          var mealInput = prompt('Great. Now, enter your meal:');

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: mealInput,
              start: date,
              allDay: true
            });
            
          } else {
            alert('Invalid date.');
          }
        }
      },
    },
    updateEvent: function(info) {
      // alert(info.event.title + " will be deleted ");
      // if (!confirm("Are you sure about this change?")) {
      //   info.event.remove();
        
      // };
      $('#calendar').fullCalendar({
        eventClick: function(calEvent, jsEvent, view) {
      
          alert('Event: ' + calEvent.title);
          alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
          alert('View: ' + view.name);
      
          // change the border color just for fun
          $(this).css('border-color', 'red');
      
        }
      });
      $('#calendar').fullCalendar({
        eventClick: function(event) {
          event.title = "CLICKED!";
      $('#calendar').fullCalendar('updateEvent', event);
      prompt(" Do want to change " + info.event.title);
        }
      });
    },
    dayMaxEvents: true, // when too many events in a day, show the popover
    
  events: [ //creating dummy events
    { 
      id: '1',
      title: 'Be awesome', // a property!
      start: "2022-03-22", // a property!
      end: "2022-03-22" // a property! 
    },
    { 
      id: '2',
      title: 'Be amazing', // a property!
      start:  "2022-03-27", // a property!
      end: "2022-03-27" // a property! 
    },
    { 
      id: '3',
      title: 'Be spectacular', // a property!
      start: "2022-03-31", // a property!
      end: "2022-03-31", // a property! 
      display: 'background'
    },
  ],




  
  // $("#calendar").fullCalendar('removeEvents'); 
  // $("#calendar").fullCalendar('addEventSource', JSON, true); 
//   eventClick: function(calEvent) {
//     $('#calendar').fullCalendar('removeEvents', calEvent.id);
// },
//   var event = calendar.getEventById(EventID);

//   $('#Delete').click(function(){
//     var event = calendar.getEventById('2');
//     alert("Remove Event "+event.title);
//     event.remove();
// });
  
  // remove: function getElementById()
    // US Holidays
    // events: 'en.usa#holiday@group.v.calendar.google.com',

    eventClick: function(arg) {

        // prevents current tab from navigating
        arg.jsEvent.preventDefault();
    }
    });
    calendar.render(); 
});

