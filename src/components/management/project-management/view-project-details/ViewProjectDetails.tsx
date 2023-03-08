import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { fontWeight } from '@mui/system';
import { Avatar, AvatarGroup, Tooltip } from '@mui/material';
import { LocalHospital } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}`,
  };
}

export default function ViewProjectDetails({ setView,clients,
  projectEditDetails,
  mileStoneEditDetails,
  userMappingEditData,
  projectBudgetEditDetails,
  contactEditDetails,
  projectStatus
}:any) {
  const [open, setOpen] = React.useState(true);
  const [clientName,setClientName] = React.useState<any>()
  const [clientPoc,setClientPoc] = React.useState<any>()
  const [status,setStatus]= React.useState<any>()
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setView(false)};

 

  React.useEffect(()=>{
    const filteredData = clients.find((val: any) => {
      return val.ClientGuID === projectEditDetails[0]?.ClientGuID;
    });
    setClientName(filteredData.ClientName)
    setClientPoc(contactEditDetails[0].UserPrincipleName)

    console.log(mileStoneEditDetails);
    // console.log(userMappingEditData);
    const editStatus= projectStatus?.map((status:any)=>{        
      return Number(projectEditDetails[0].ProjectStatus)===status.ProjectStatusID?status.Status:null
    })?.filter((data: any) => data)
    setStatus(editStatus)
    
    
  },[])
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {projectEditDetails[0].ProjectName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> Project Description :</span> {projectEditDetails[0].ProjectDescription}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> Project Status :</span> {status}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> Client :</span> {clientName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> ClientPOC :</span> {clientPoc}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> MileStone's :</span> {mileStoneEditDetails.map((mileStone:any)=>{
          return (
            <p style={{marginLeft:"20px"}}>
              <span style={{fontSize:"14px" ,fontWeight:"bold"}}>MilestoneName: 
              </span><span>{mileStone.MilestoneName}</span>
              <br/>
              <span style={{fontSize:"14px" ,fontWeight:"bold"}}>Description: 
              </span><span>{mileStone.MilestoneDescription}</span>
            </p>
            
          )
         })}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <span style={{fontWeight:"bold"}}> Members :</span>
          </Typography> 
         <AvatarGroup max={8} style={{display: "flex", justifyContent: "flex-end"}}>
         {userMappingEditData.map((user:any)=>{return <Tooltip title={user.FullName}><Avatar {...stringAvatar(user.FullName)}/></Tooltip>})}
          </AvatarGroup> 
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}