import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/AddRounded';
import { Autocomplete, Fab, FormLabel, Popper, TextField } from '@mui/material';
import axiosInstance from '../../../../../config/axios.config';
import { environment } from '../../../../../environments/environment';
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

export default function ProjectMembersForm({onSubmit}:any) {
  let projectMembers:any;
  let def:any;
  const [open, setOpen] = React.useState(false);
  const [oemMembers,setOemMembers]=useState<any>([])
  const [costCenters,setCostCenters]=useState<any>([])
  const [memberName,setMemberName]=useState<string>()
  const [memberGuid,setMemberGuid]=useState<string>()
  const [memberCostCenter,setMemberCostCenter]=useState<string>()
  const [accountability,setAccountability]=useState<string>()
  const [userCostCenter,setUserCostCenter]=useState<any>([])
  const [nameError,setNameError] = useState(false)
  const [costCenterError,setCostCenterError]= useState(false)
  const [accError,setAccError] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ 
    setNameError(false)
    setCostCenterError(false)
    setAccError(false)
    setMemberGuid(def)
    setMemberName(def)
    setUserCostCenter([])
    setMemberCostCenter(def)
    setAccountability(def)
    setOpen(false)};

  const handelMemberChange=(oemMember:any)=>{
    setMemberGuid(oemMember.id)
    setMemberName(oemMember.name)
    setNameError(false)
    
    const userCostCenter =costCenters.filter((costCenter:any)=>{return costCenter.CostCenterName===oemMember.costCenter })
    setUserCostCenter(userCostCenter);
  }
  const handelCostCenter=(costCenter:any)=>{
    setMemberCostCenter(costCenter.name)
    setCostCenterError(false)
  }
  const handelAccountability=(accountability:string)=>{
    setAccountability(accountability)
    setAccError(false)
  }

  const handelSave=()=>{
    if(!memberName){
      setNameError(true)
    } else if(!memberCostCenter ){
      setCostCenterError(true)
      
    }else if(!accountability){
      setAccError(true)
    }
    else{
    projectMembers={
      id:memberGuid,
      ProjectUserMappingGuID:null,
      UserGuID:memberGuid,
      FullName:memberName,
      CostCenterName:memberCostCenter,
      Accountability:accountability
    }
    onSubmit(projectMembers)
    handleClose()
  }

  }


  useEffect(()=>{
    axiosInstance.get(`${environment.baseApiURL}projects/members`).then((resp)=>{
      setOemMembers(resp.data.data)
      
    })

    axiosInstance.get(`${environment.baseApiURL}projects/costCenter`).then((resp)=>{
      setCostCenters(resp.data.data)
      setUserCostCenter(resp.data.data)
      
    })
  },[])

  return (
    <div style={{paddingRight:"110px"}} >
    <Fab onClick={handleOpen} color="primary" aria-label="add" size='medium' sx={{margin:1}}>
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
          New Member
        </Typography>
        <div>
          <FormLabel style={{marginTop:"20px"}}><span style={{color:"red"}}>*</span> Name</FormLabel>
          <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={[...oemMembers.map((member:any)=>{return {id:member.UserGuID,name:member.FullName,costCenter:member.CostCenterName}})]}
                      getOptionLabel={option => option.name}
                      onChange={(event, value) => {
                        handelMemberChange(value);
                      }}
                      renderInput={(params) => (
                        <TextField
                        error={nameError}
                        helperText={nameError? "please select a member":''}
                          {...params}
                          label="Name"
                          margin="normal"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
       <FormLabel style={{marginTop:"20px"}}><span style={{color:"red"}}>*</span> Cost Center</FormLabel>
       <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={[...userCostCenter.map((costCenter:any)=>{ return {id:costCenter.CostCenterID,name:costCenter.CostCenterName}})]}
                      getOptionLabel={option => option.name}
                      onChange={(event, value) => {
                        handelCostCenter(value);
                      }}
                      renderInput={(params) => (
                        <TextField
                        error={costCenterError}
                        helperText={costCenterError? "please select a CostCenter":''}
                          {...params}
                          margin="normal"
                          label="Cost Center"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
      <FormLabel style={{marginTop:"20px"}}><span style={{color:"red"}}>*</span> Accountability</FormLabel>
      <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={["Owner","Contributor"]}
                      onChange={(event, value) => {
                        handelAccountability(value);
                      }}
                      renderInput={(params) => (
                        <TextField
                        error={accError}
                        helperText={accError? "please select accountability":''}
                          {...params}
                          margin="normal"
                          label="Accountability"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
            <Button style={{margin:"15px"}}  variant="contained" onClick={handelSave}>Save</Button>
            <Button style={{margin:"15px"}} variant="outlined"  onClick={handleClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  </div>
  );
}