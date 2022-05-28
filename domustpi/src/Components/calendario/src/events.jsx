import moment from "moment"
const now = new Date()

export default [
  {
    id: 0,
    title: 'Cita - Agente #01 - COD 001',
    allDay: true,
    start: new Date(moment(now).subtract(1, 'days')),
    end: new Date(moment()),
  }]