///import BigCalendar from 'react-big-calendar'

import React, { Component, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);






const myEvents = [{
          id: 1,
          allDay: true,
          start:new Date(2021, 6, 8, 10),
          end: new Date(2021, 7, 8, 11),
          title: "Свободно",
          room: 0

}]

  
const MyCalendar = () =>{
  const userRecords = useSelector((state) => (state.userReducer.user.records))
  console.log(userRecords)
  const [state, setState] = useState({
    events: userRecords.map((record, index) => ({
      timetableId: record.timetableId,
      index: index,
      serviceId: record.serviceId,
      start: new Date(record.timetableDateTime),
      end: moment(new Date(record.timetableDateTime)).add(record.timetableDuration, 'm').toDate(),
      title: record.serviceName,
    }))
  })

  const onEventResize = (data) => {
    const { start, end } = data;
    console.log(data)

    setState((state) => {
      state.events[data.event.index].start = start;
      state.events[data.event.index].end = end;
      return { events: [...state.events] };
    });
  };

  const onEventDrop = (data) => {
    console.log(data);
    const { start, end } = data;
    setState((state) => {
      state.events[data.event.index].start = start;
      state.events[data.event.index].end = end;
      return { events: [...state.events] };
    });
  };


  const setColor = (event) => {
    var backgroundColor = "";
    if( event.end < moment.now()){
      return { style: { backgroundColor: "#D3D3D3" } }
    }
    console.log("Color: ", event)
    switch (event.serviceId) { // change to true 
      case (1):
        backgroundColor = "#ffc04c";
          break;
      default:
        backgroundColor = "#b2b2ff";
          break;
  }
   return { style: { backgroundColor } }; 
  }

  
  return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={state.events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
          style={{ height: "100vh" }}
          eventPropGetter={(event) => (setColor(event))}
        />
      </div>
  );

} 

export default MyCalendar


