// AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94
 // "@fullcalendar/bootstrap5": "^5.10.2",
// const { response } = require("express");
document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');
  
    // initialize the external events
    // -----------------------------------------------------------------
  
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });
  
    // initialize the calendar
    // -----------------------------------------------------------------
  
    var calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
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


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap',
    initialView: 'dayGridMonth',
    displayEventTime: false,
    googleCalendarApiKey: 'AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94',
    timeZone: 'UTC',
    headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    dayMaxEvents: true, // when too many events in a day, show the popover
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?overload-day',

    // US Holidays
    // events: 'en.usa#holiday@group.v.calendar.google.com',

    eventClick: function(arg) {

        // opens events in a popup window
        window.open(arg.event.url, '_blank', 'width=700,height=600');

        // prevents current tab from navigating
        arg.jsEvent.preventDefault();
    }
    });
    calendar.render();
});




// document.addEventListener('DOMContentLoaded', function() {
//         var calendarEl = document.getElementById('calendar');
//         var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth, listYear',
//         themeSystem: 'bootstrap5',
//         // plugins: [ googleCalendarPlugin ],
//         googleCalendarApiKey: 'AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94',
//         headerToolbar: {
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay'
//         },
//         events: {
//         googleCalendarId: 'allpainnogainproject@gmail.com'
//         },
//         events: [
//             {
//             title: 'All Day Event',
//             start: '2022-03-01'
//             },
//             {
//             title: 'Long Event',
//             start: '2022-03-07',
//             end: '2022-03-10'
//             },
//         ]
//         });

//         calendar.render();
//         });




// fetch(calendar)

// .then(response => response.json())
// .then(data => {console.log(data)
// })

