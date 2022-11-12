import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a href="#" onClick={handleClickOpen}>
        {props.text}
      </a>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            label={props.label}
            type="text"
            fullWidth
            variant="outlined"
          />

        </DialogContent>
        <DialogActions>
          <Button  variant="inlined" onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
