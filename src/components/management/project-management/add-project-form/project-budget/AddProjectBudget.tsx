import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/AddRounded';
import { Fab, FormLabel, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

export default function ProjectBudgetForm({onSubmit}:any) {

  let projectBudget:any
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(
    dayjs(new Date().toString()),
  );
  const [endDate, setEndDate] = React.useState<Dayjs | null>(
    dayjs(new Date().toString()),
  );

  const [effortHours,setEffortHours]= React.useState<any>()

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };
  const handelManHours =(hours:string)=>{
    setEffortHours(hours)
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelSave=()=>{
    if(effortHours ){
    projectBudget={
      id: Math.floor(Math.random()*100),
      ProjectBudgetGuID:null,
      EffortInManHours:effortHours,
      StartDate:startDate?.format("YYYY-MM-DD"),
      EndDate:endDate?.format("YYYY-MM-DD")
    }

    onSubmit(projectBudget)
    handleClose()
  }else{
    setEffortHours(0)
  }

  }


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div style={{paddingRight:"110px"}}>
    < Fab onClick={handleOpen} sx={{ '& > :not(style)': { m: 1 }, margin:1 }} size='medium' color="primary" aria-label="add">
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
          New Budget
        </Typography>
        <div>
          <FormLabel style={{marginTop:"10px"}}><span style={{color:"red"}}>*</span> Man Hours</FormLabel>
        <TextField
         error={effortHours === 0 || effortHours==''}
        helperText={effortHours === 0 || effortHours==''?  'InValid Input' : ' '}
        style={{marginLeft:"10px"}}
        required
        id="outlined-required"
        label="Man Hours"
        margin="normal"
        value={effortHours}
        onChange={(e)=>{handelManHours(e.target.value)}}
      />
       <FormLabel style={{marginTop:"10px"}}><span style={{color:"red"}}>*</span> Start Date</FormLabel>
       <span style={{display:"inline-block", margin:"10px"}}>
       <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={startDate}
          onChange={handleStartDateChange}
        renderInput={(params:any) => <TextField {...params} />}
        />
        </span>
  
      <FormLabel style={{marginTop:"20px"}}><span style={{color:"red"}}>*</span> End Date</FormLabel>
      <span style={{display:"inline-block" , margin:"10px"}}>
      <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params:any) => <TextField {...params} />}
        /></span>

            <Button style={{margin:"15px"}}  variant="contained" onClick={handelSave}>Save</Button>
            <Button style={{margin:"15px"}} variant="outlined" onClick={handleClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  </div>
  </LocalizationProvider>
  );
}