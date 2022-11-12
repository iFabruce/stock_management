import React from 'react'
import Buttons from '@mui/material/Button'

const Button = (props) => {
  const mystyle = {
    backgroundColor: '#595FF1',
    fontWeight: 600,
    letterSpacing: '.2vw',
    marginTop: '5%',
    textTransform: 'unset'
  };
  return (
    <div>
      <Buttons variant="contained" style={mystyle}>
        {props.text}
      </Buttons>
    </div>
  )
}

export default Button
