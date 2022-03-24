// AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94
 // "@fullcalendar/bootstrap5": "^5.10.2",
// const { response } = require("express");

// $(".dropdown-menu").click(function(e){
//   $("nav > ul").toggle();
// });
// Drop Down Menu
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
// $('.dropdown-toggle').dropdown()

document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;
    var Draggable2 = FullCalendar.Draggable;
  
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

    //to delete events
//     new Draggable2(containerEl), {
//     itemSelector: '.fc-event',
//     eventDragStop: function(removeEvents) {

//   var trashEl = jQuery('#calendarTrash');
//   var ofs = trashEl.offset();

//   var x1 = ofs.left;
//   var x2 = ofs.left + trashEl.outerWidth(true);
//   var y1 = ofs.top;
//   var y2 = ofs.top + trashEl.outerHeight(true);

//   if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
//       jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
//       alert('SIII');
//       $('#calendario').fullCalendar('removeEvents', event.id);
//   }
// }}
  


    // initialize the calendar
  
    // calendar.addEvent( event [, source ] )

    var calendar = new Calendar(calendarEl, {
      headerToolbar: {
        // left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      // width: 1650,
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
    themeSystem: 'bootstrap5',
    initialView: 'dayGridMonth',
    displayEventTime: false,
    googleCalendarApiKey: 'AIzaSyAh3d6j-Y63jjjukLBG7FMPi8-qlQYT-94',
    timeZone: 'UTC',
    headerToolbar: {
    left: 'today, dayGridMonth,timeGridWeek,timeGridDay mealBtn',
    center: 'title',
    // right: 'dayGridMonth,timeGridWeek,timeGridDay',
    right: 'workoutBtn prevYear,prev,next,nextYear'
  },
  footerToolbar: {
    left: 'custom1,custom2',
    center: '',
    right: 'prev,next'
  },
    customButtons: {
      workoutBtn: {
        text: 'Add Workout',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format for your workout');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      },
      mealBtn: {
        text: 'Add Meal',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format for your meal');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      },
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


// Events for calendar
var calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  events: [
    {
      id: 'a',
      title: 'my event',
      start: '2022-30-03'
    }
  ], 
  //Need to set our button
select: function(start, end, resource) {
  console.log(
  'select callback',
  start.format(),
  end.format(),
  resource ? resource.id : '(no resource)'
  );
  }
  });

  //Our button to delete Events
  $('#Delete').on('click', function() {
  $('#calendar').fullCalendar('removeEvents', a); 
      });

// });

//   eventClick: function(info){
//     info.event.remove();
// }
//   eventDrop : function(info) {
//     alert(info.event.title + " was dropped on "
//             + info.event.start.toISOString());

//     if (!confirm("Are you sure you want to remove this?")) {
//         info.revert();
//     }
// },
//   eventClick: function(info) {
//     info.jsEvent.preventDefault(); // don't let the browser navigate
// //delete an event
//     if (info.event.id) {
//         var event = calendar.getEventById(info.event.id);
//         event.remove();
//     }
//   }
// }); 
var event = calendar.getEventById('a') // an event object!
var start = event.start // a property (a Date object)
console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"

calendar.render();








//$('#Delete').on('click', function() {
// calendar.addEvent( event [, source ] )