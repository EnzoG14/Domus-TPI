// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import moment from "moment";
// import "./Calendario.css";
// import "react-datepicker/dist/react-datepicker.css";
// require("moment/locale/es.js")

// const localizer = momentLocalizer(moment);

// const events = [
  
// ];

// const Calendario =() =>{
//     const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//     const [allEvents, setAllEvents] = useState(events);

//     function handleAddEvent() {
//         setAllEvents([...allEvents, newEvent]);
//     }

//     return (
//         <div>
//             <h1>Calendar</h1>
//             <h2>Add New Event</h2>
//             <div>
//                 <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
//                 <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
//                 <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
//                 <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//                     Add Event
//                 </button>
//             </div>
//             <Calendar
//               className="estiloCalendario" 
//               messages={{
//                 next: "Sig",
//                 previous: "Ant",
//                 today: "Hoy",
//                 month: "Mes",
//                 week: "Semana",
//                 day: "Día",
//               }}
//               localizer={localizer} 
//               events={allEvents} 
//               startAccessor="start" 
//               endAccessor="end"
//               />
//         </div>
//     );
// }

// export default Calendario;

import React, {useCallback,useState,useMemo,Fragment} from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import events from './events'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './FuncionCal.css'
require("moment/locale/es.js")

export default function FuncionCal({
  localizer,
  dayLayoutAlgorithm = 'no-overlap',
}) {

  const [myEvents, setEvents] = useState(events)

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('Agregar Nuevo Evento')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => window.confirm('¿Desea eliminar el evento?', event.title) && setEvents((prev) => prev.filter((e) => e !== event)),
    [setEvents]
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(moment()),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  )

  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...(event.title.includes('Agente #01') && {
        style: {
          backgroundColor: '#F8E480',
          color: 'black'
        },
      }),
      ...(event.title.includes('Agente #02') && {
        style: {
          backgroundColor: '#80E9F8',
          color: 'black'
        },
      }),
      ...(event.title.includes('Agente #03') && {
        style: {
          backgroundColor: '#F880B2',
          color: 'black'
        },
      }),
    }),
    []
  )

  return (
    <Fragment>
      <div className="height600">
        <Calendar
          className="estiloCalendario" 
          messages={{
            next: "Sig",
            previous: "Ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",}}
          dayLayoutAlgorithm={dayLayoutAlgorithm}
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          eventPropGetter={eventPropGetter}
        />
      </div>
    </Fragment>
  )
}

FuncionCal.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
  dayLayoutAlgorithm: PropTypes.string,
}
