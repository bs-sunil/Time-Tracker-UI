import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProjectMembers } from "./project-memebers/ProjectMember";
import MIleStoneForm from "./mile-stone/MIleStone";
import { ProjectBudget } from "./project-budget/ProjectBudget";
import axiosInstance from "../../../../config/axios.config";
import { environment } from "../../../../environments/environment";
import { useSnackAlert } from "../../../../hooks/useToasterAlert";
import InfoIcon from '@mui/icons-material/Info';
import { stat } from "fs";

export const AddProjectForm = ({
  projectEditDetails,
  handleClose,
  mileStoneEditDetails,
  userMappingEditData,
  projectBudgetEditDetails,
  contactEditDetails,
  getProjects
}: any) => {
  let projectDetails: any;
  // let mileStoneDetails: any;
  // let projectBudgetDetails: any;
  // let projectUsersDetails: any;
  let data: any;
  const showSnackbar = useSnackAlert();
  const [checked, setChecked] = React.useState(false);
  const [projectName, setProjectName] = useState<String>();
  const [clientGuid, setClientGuid] = useState<String>();
  const [projectDescription, setProjectDescription] = useState<String>();
  const [clients, setClients] = useState<any>([]);
  const [contacts, setContacts] = useState<any>([]);
  const [projectStatus, setProjectStatus] = useState<any>([]);
  const [status, setStatus]: any = useState();
  const [selectedClientOption, setSelectedClientOption]: any = useState();
  const [contact, setContact]: any = useState()
  const [show,setShow]= useState(true)
  const [showClient,setShowClient]= useState(false)
  const [nameError,setNameError] = useState(false)
  const [descError,setDescError] = useState(false)
  const [clientError,setClientError] = useState(false)
  const [contactError,setContactError] = useState(false)
  const [statusError ,setStatusError] = useState(false)
  const [mileStoneDetails,setMileStoneDetails] = useState<any>([])
  const [projectBudgetDetails,setProjectBudgetDetails] = useState<any>([])
  const [projectUsersDetails,setProjectUserDetails] = useState<any>([])
  const [projectMemberError,setProjectMemberError] = useState(false)
  const [projectBudgetError,setProjectBudgetError]= useState(false)
  const [contactsData,setContactsData] =  useState<any>([])
  const [editStatus,setEditStatus] = useState<any>()

  const handelProjectName = (name: string) => {
    if(projectName=='' || !projectName){
      setNameError(true)
    }else{
      setNameError(false)
    }
    setProjectName(name);
  };

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
    if (projectEditDetails) {
      setChecked(true);
    }
  };
  const handelClientName = (client: any) => {
    console.log(client);
    
    const contact = contactsData.filter((contact: any) => {
      console.log(contact);
      
      return contact.ClientGuID === client.ClientGuID;
    });
    console.log(contact);
    setClientError(false)
    setContacts(contact);
    setShow(false)
    setClientGuid(client.ClientGuID);
  };

  const handelClientPoc = (clientPoc: any) => {
    setContactError(false)
    setContact(clientPoc)
  };
  const handelProjectDescription = (projectDescription: string) => {
    if(projectDescription==''|| !projectDescription ){
      setDescError(true)
    }else if(projectDescription.length>2000){
      setDescError(true)
    }
    else{
      setDescError(false)
    }
    setProjectDescription(projectDescription);
  };
  const handelProjectStatus =(projectStatus:any)=>{
    setEditStatus(projectStatus)
    console.log(projectStatus);
    setStatusError(false)
    setStatus(projectStatus)
    console.log(status);
      
  }

  const getAllData = {
    getMileStoneData: (data: any) => {
      console.log(data);
      setMileStoneDetails(data)
    },

    getProjectBudgetData: (data: any) => {
      
      setProjectBudgetDetails(data);
      console.log(projectBudgetDetails);
      
    },
    ProjectUsersData: (data: any) => {
      console.log(data);
      setProjectUserDetails(data);
    },
  };


  const handelSubmit = () => {

    if(projectName=='' || !projectName){
      setNameError(true)
    }

    if(projectDescription==''|| !projectDescription){
      setDescError(true)
    }
    if(selectedClientOption=="add"){
      setClientError(true)
    }
    if(contact=="add"){
      setContactError(true)
    }
    if(status=="add"){
      setStatusError(true)
    }
    if(projectBudgetDetails.length==0){
      setProjectBudgetError(true)
    }else{
      setProjectBudgetError(false)
    }
    if(projectUsersDetails.length==0){
      setProjectMemberError(true)
    }else{
      setProjectMemberError(false)
    }

    console.log(status);
    
if(!editStatus){
  setEditStatus(status)
}
      projectDetails = {
        projectName: projectName,
        clientguid: clientGuid,
        projectDescription: projectDescription,
        clientPOC: contact.ContactGuID,
        projectStatus: status.ProjectStatusID,
      };      

      
      

    if (projectEditDetails) {

      if (mileStoneDetails) {
        setMileStoneDetails([...mileStoneDetails]);
      } else {
        setMileStoneDetails([...mileStoneEditDetails])
      }
      if (projectUsersDetails) {
        setProjectUserDetails([...projectUsersDetails]);
      } else {
        setProjectUserDetails([...userMappingEditData]);
      }
      if (projectBudgetDetails) {
        setProjectBudgetDetails([...projectBudgetDetails]);
      } else {
        setProjectBudgetDetails([...projectBudgetEditDetails]);
      }

      console.log(
        projectDetails,
        mileStoneDetails,
        projectBudgetDetails,
        projectUsersDetails,
    
      );

      if(projectDetails && projectUsersDetails.length>0 && projectBudgetDetails.length>0 ){
      data = [
        {
          ProjectDetails: {
            ProjectGuID: projectEditDetails[0].ProjectGuID,
            ProjectName: projectDetails.projectName,
            ProjectDescription: projectDetails.projectDescription,
            ClientGuID: projectDetails.clientguid,
            ProjectStatus: editStatus.ProjectStatusID,
          },
          ClientPOC:
          {
            ContactGuID: projectDetails.clientPOC,
          },
          MileStoneDetails: mileStoneDetails.length==0? [{ProjectMileStoneGuID:null, MilestoneName: projectDetails.projectName,MilestoneDescription:projectDetails.projectDescription}]: [...mileStoneDetails],
          UserMapping: [...projectUsersDetails],
          ProjectBudget: [...projectBudgetDetails],
        },

      ];
      console.log(data);

      axiosInstance
        .patch(`${environment.baseApiURL}projects/${projectEditDetails[0].ProjectGuID}`, data)
        .then((resp) => {
          if (resp.data.code == 200) {
            showSnackbar("success", "success");
            handleClose();
          }
        });
      console.log(data);
      getProjects()
      }

    } else {
      if(projectDetails && projectUsersDetails.length>0 && projectBudgetDetails.length>0 ){
      data = [
        {
          ProjectDetails: {
            ProjectName: projectDetails.projectName,
            ProjectDescription: projectDetails.projectDescription,
            ClientGuID: projectDetails.clientguid,
            ProjectStatus: projectDetails.projectStatus,
          },
          ClientPOC: {
            ContactGuID: projectDetails.clientPOC,
          },
          MileStoneDetails:
          mileStoneDetails.length==0? [{MileStoneName: projectDetails.projectName,MileStoneDescription:projectDetails.projectDescription}]: [
            ...mileStoneDetails?.map((mileStoneDetail: any) => {
              return {
                MileStoneName: mileStoneDetail.MileStoneName,
                MileStoneDescription: mileStoneDetail.mileStoneDescription,
              };
            }),
          ],
          UserMapping: [
            ...projectUsersDetails?.map((userDetail: any) => {
              return {
                UserGuID: userDetail.UserGuID,
                Accountability: userDetail.Accountability,
              };
            }),
          ],
          ProjectBudget: [
            ...projectBudgetDetails?.map((projectBudget: any) => {
              return {
                EffortInManHours: projectBudget.EffortInManHours,
                StartDate: projectBudget.StartDate,
                EndDate: projectBudget.EndDate,
              };
            }),
          ],
        },
      ];
      axiosInstance
        .post(`${environment.baseApiURL}projects`, data)
        .then((resp) => {
          if (resp.data.code == 200) {
            showSnackbar("success", "success");
            handleClose();
          }
        });
      console.log(data);
      getProjects()
    }else{
    }
  }
  };

  useEffect(() => {
    if (projectEditDetails) {
      const filteredData = clients.find((val: any) => {
        return val.ClientGuID === projectEditDetails[0]?.ClientGuID;
      });
      setSelectedClientOption(filteredData);

      const filteredStatus = projectStatus.find((value: any) => {
        if (value.ProjectStatusID === Number(projectEditDetails[0]?.ProjectStatus)) {
          return { id: value.ProjectStatusID, name: value.Status }
        }
      })
      setStatus(filteredStatus)
      const filterdClientPoc = contactsData.find((value: any) => {
        return value.ContactGuID === contactEditDetails[0].ContactGuID
      })

      const contact = contactsData.filter((contact: any) => {
        return contact.ClientGuID === projectEditDetails[0]?.ClientGuID;
      });
      setContacts(contact)
      setContact(filterdClientPoc)
      setShow(false)
      setShowClient(true)
    } else {
      setSelectedClientOption("add");
      setStatus("add")
      setContact("add")
    }
  }, [clients, projectStatus, contacts]);

  useEffect(() => {
    const clientsData = axiosInstance
      .get(`${environment.baseApiURL}projects/clients`)
      .then((resp) => {
        setClients(resp.data.data);
        return resp.data.data;
      });

    const contacts = axiosInstance
      .get(`${environment.baseApiURL}projects/contacts`)
      .then((resp) => {
        setContactsData(resp.data.data);
        return resp.data.data;
      });

    const projectStatus = axiosInstance
      .get(`${environment.baseApiURL}projects/status`)
      .then((resp) => {
        setProjectStatus(resp.data.data);
        return resp.data.data;
      });

    if (projectEditDetails) {

      setChecked(true);
      setProjectName(projectEditDetails[0].ProjectName);
      setProjectDescription(projectEditDetails[0].ProjectDescription);
      setClientGuid(projectEditDetails[0].ClientGuID);

    }
  }, []);

  return (
    <div
      id="form"
    
    >
      <Paper elevation={3}>
        <Box
          component="form"
          noValidate
          autoComplete="on"
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "primary",
            border: "2px solid lightGrey",
            borderRadius: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={120}
            style={{ marginTop: "2%", textAlign: "center" }}
          >
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h5"
              justifyContent="flex-start"
              id="tableTitle"
              color="secondary"
            >
            {projectEditDetails? 'Edit Project':' New Project'}
            </Typography>
          </Stack>
          <div
            style={{
              border: "2px solid lightGrey",
              margin: "20px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                border: "1px solid lightGrey",
                margin: "10px 20px",
                borderRadius: "4px",
              }}
            >
              <Stack>
                <Grid
                  container
                  spacing={8}
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Grid item style={{ margin: "10px" }}>
                    <label htmlFor="" style={{ margin: "5px" }}>
                      <span style={{ color: "red" }}>*</span>ProjectName
                    </label>
                    <br />
                    <TextField
                      // defaultValue={projectName}
                      value={projectName}
                      id="outlined-multiline-flexible"
                      label="ProjectName"
                      multiline
                      maxRows={4}
                      sx={{ width: "300px", margin: "5px" }}
                      error={nameError}
                      helperText={nameError? 'InValid Input' : ''}
                      onChange={(e) => {
                        handelProjectName(e.target.value);
                      }}
                 
                  />
                  </Grid>
                  <Grid item style={{ margin: "10px" }}>
                    <label htmlFor="" style={{ margin: "5px" }}>
                      <span style={{ color: "red" }}>*</span>Client
                    </label>
                    <br />
                    <FormControl sx={{ mt: 0, minWidth: 230 }}>
                      {selectedClientOption && (
                        <Autocomplete
                      disabled={showClient}
                          options={clients}
                          getOptionLabel={(option: any) => option.ClientName}
                          defaultValue={
                            selectedClientOption &&
                              selectedClientOption !== "add"
                              ? selectedClientOption
                              : null
                          }
                          onChange={(event, value) => {
                            handelClientName(value);
                          }}
                          renderInput={(params) => (
                            <TextField
                            error={clientError}
                      helperText={clientError? 'InValid Input' : ''}
                              sx={{ width: "300px", margin: "5px" }}
                              {...params}
                              label="Clients"
                            />
                          )}
                        />
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item style={{ margin: "10px" }}>
                    <label htmlFor="" style={{ margin: "5px" }}>
                      <span style={{ color: "red" }}>*</span>Client POC
                    </label>
                    <br />
                    <FormControl sx={{ mt: 0, minWidth: 200 }}>
                      {contact && (<Autocomplete
                        disabled={show}
                        disableClearable
                        onChange={(event, value) => {
                          handelClientPoc(value);
                        }}
                        defaultValue={contact && contact !== "add" ? contact : null}
                        options={contacts}
                        getOptionLabel={(option) => option.UserPrincipleName}
                        renderInput={(params) => (
                          <TextField
                          error={contactError}
                          helperText={contactError? 'InValid Input' : ''}
                            sx={{ width: "300px", margin: "5px" }}
                            {...params}
                            label="ClientPOC"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                          />
                        )}
                      />)}
                    </FormControl>
                  </Grid>
                </Grid>
              </Stack>
              <br></br>
              <Grid
                container
                spacing={6}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid item style={{ width: "61.5%",margin:"10px 20px 20px 30px" }}>
                    <label htmlFor="" style={{ margin: "5px" }}>
                      <span style={{ color: "red" }}>*</span>Project
                      Description
                    </label>
                    <br/>
                  <TextField
                    value={projectDescription}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    inputProps={{maxLength:2000}}
                    minRows={4}
                    maxRows={10}
                    sx={{ width: "100%", margin:"10px 0px" }}
                    placeholder="Description of max 2000 words...."
                    error={descError}
                    helperText={descError? 'InValid Input' : '' }
                    onChange={(e) => {
                      handelProjectDescription(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item style={{ margin: "10px", paddingRight: "15px" }}>
                  <label htmlFor="" style={{ margin: "5px" }}>
                    <span style={{ color: "red" }}>*</span>ProjectStatus
                  </label>
                  <br />
                  {status && <Autocomplete
                    disableClearable
                    disablePortal={false}
                    options={projectStatus}
                    defaultValue={status && status !== "add" ? status : null}
                    getOptionLabel={(option) => option.Status}
                    onChange={(event, value) => {
                      handelProjectStatus(value)                      
                    }}
                    renderInput={(params) => (
                      <TextField
                      error={statusError}
                      helperText={statusError? 'InValid Input' : ''}
                        sx={{ width: "300px", margin: "5px" }}
                        {...params}
                        label="ProjectStatus"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        onChange={(e) => {
                        }}
                      />
                    )}
                  />}

                </Grid>
              </Grid>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid lightGrey",
                  margin: "10px 20px",
                  borderRadius: "4px",
                }}
              >
                <label
                  htmlFor=""
                  style={{
                    margin: "15px 0px 15px 30px",
                    textSizeAdjust: "-moz-initial",
                  }}
                >MileStone
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                /><InfoIcon fontSize="small" color="warning"/>  <span style={{display:"inline-block", color:"#ed6c02",fontStyle:"italic"}} >   If there are no mileStone added projectname and projectdescription will be set as default mileStone</span>
                {checked && (
                  <MIleStoneForm
                    onSubmit={getAllData.getMileStoneData}
                    mileStoneEditDetails={mileStoneEditDetails}
                  />
                )}
              </div>
              <div
                style={{
                  border: "1px solid lightGrey",
                  margin: "10px 20px",
                  borderRadius: "4px",
                }}
              >
                <ProjectMembers
                  onsubmit={getAllData.ProjectUsersData}
                  userMappingEditData={userMappingEditData}
                  projectMemberError={projectMemberError}
                />
              </div>
              <div
                style={{
                  border: "1px solid lightGrey",
                  margin: "10px 20px",
                  borderRadius: "4px",
                }}
              >
                <ProjectBudget
                  onSubmit={getAllData.getProjectBudgetData}
                  projectBudgetEditDetails={projectBudgetEditDetails}
                  projectBudgetError={projectBudgetError}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ margin: "20px" }}
                  variant="contained"
                  onClick={handelSubmit}
                >
                  Save
                </Button>
                <Button
                  style={{ margin: "20px" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
};
