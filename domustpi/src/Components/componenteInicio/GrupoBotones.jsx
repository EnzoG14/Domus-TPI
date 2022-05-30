import React,{useState} from 'react';
import {ButtonGroup, ToggleButton,} from 'react-bootstrap';
import './GrupoBotones.css'


function GrupoBotones() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Comprar', value: '1' },
      { name: 'Alquilar', value: '2' },
      { name: 'Vender', value: '3' },
    ];
  
    return (
      <>
        <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'especial'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </>
    );
  }

export default GrupoBotones