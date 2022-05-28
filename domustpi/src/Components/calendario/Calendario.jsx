import React from 'react'
import moment from 'moment'
import {momentLocalizer } from 'react-big-calendar'
import FuncionCal from './src/FuncionCal'


const localizer = momentLocalizer(moment)

const Calendario = () => {
  return (
  <FuncionCal localizer={localizer} />
)}

export default Calendario;