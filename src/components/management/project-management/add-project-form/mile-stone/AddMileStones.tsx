import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/AddRounded';
import { Fab, FormLabel, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  padding:"30px 75px 30px 75px"

};

export default function AddMileStoneForm({onSubmit}:any) {

  let mileStonedetails:any;
  let data:any
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setmileStoneName(data)
    setMileStoneDescription(data)
    setNameError(false)
    setDescError(false)
    setOpen(false)};

  const [mileStoneName,setmileStoneName]=useState<String>()
  const [mileStoneDescription,setMileStoneDescription]=useState<String>()
  const [nameError,setNameError]= useState(false)
  const [descError,setDescError]= useState(false)



  function handelName(name: string) {
    name ==""?setNameError(true):setNameError(false)
    setmileStoneName(name)
  }

  function handelDescription(description: string) {
    description ==""?setDescError(true):setDescError(false)
    setMileStoneDescription(description)
  }
  const handelSave=()=>{
    if(!mileStoneName || mileStoneName=='') 
    {
      setNameError(true)
      handleOpen()

    }
   else if(!mileStoneDescription ||mileStoneDescription==''){
      setDescError(true)
      handleOpen()
    }
    else{
    mileStonedetails={
      id: Math.floor(Math.random()*100),
      ProjectMileStoneGuID:null,
      MilestoneName:mileStoneName,
      MilestoneDescription:mileStoneDescription
    }
    onSubmit(mileStonedetails)
    handleClose()
  }
}

  useEffect(() => {
    
  }, [])
  

  return (
    <div style={{paddingRight:"110px"}} >
      <Fab  onClick={handleOpen} color="primary" aria-label="add" size='medium'  sx={{margin:1}}>
  <AddIcon />
</Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New MileStone
          </Typography>
          <div>
            <FormLabel style={{marginTop:"30px"}}><span style={{color:"red"}}>*</span>Name</FormLabel>
          <TextField
          value={mileStoneName}
          required
          error={nameError}
          helperText={ nameError ? 'Empty field!' : ' '}
          id="outlined-required"
          label="MileStone Name"
          margin="normal"
          sx={{ width: "250px" }}
          onChange={(e)=>{handelName(e.target.value)}}
        />
        <br/>
         <FormLabel style={{marginTop:"30px"}}> <span style={{color:"red"}}>*</span>Description</FormLabel>
         <TextField
          value={mileStoneDescription}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          required
          margin='normal'
          fullWidth
          error={descError}
          helperText={descError ? 'Empty field!' : ' '}
          onChange={(e)=>{handelDescription(e.target.value)}}
        />
              <Button style={{margin:"15px"}}  variant="contained"  onClick={handelSave}>Save</Button>
              <Button style={{margin:"15px"}} variant="outlined"  onClick={handleClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}