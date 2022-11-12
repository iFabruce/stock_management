import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Select,FormControl,MenuItem, TextField, TextareaAutosize, InputLabel} from '@mui/material'
import { useState } from 'react';
import Button from './Button'

export default function PopupTwoForm(props) {
  const [nom, setNom] = useState() 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}><Button text={props.text}  /></div>  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <FormControl style={{marginTop: '2%', width:'230px'}}>
            <InputLabel>{props.label1}</InputLabel>
                <Select
                    value={nom}
                    onChange={e => {setNom(e.target.value)}}
                >
                    <MenuItem value={'A'}>Date</MenuItem>
                    <MenuItem value={'B'}>Nom</MenuItem>
                </Select>
                
            </FormControl> <br /> <br />
                    
           <TextField
            type="number"
            label={props.label2}
            variant="outlined"
          />

        </DialogContent>
        <DialogActions>
          <div  onClick={handleClose}><Button  variant="inlined" text="Ajouter"/></div> 
        </DialogActions>
      </Dialog>
    </div>
  );
}
