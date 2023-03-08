import "./ProjectManagement.css";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowsProp,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Button,
  Input,
  InputAdornment,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import {CSVLink } from 'react-csv'
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
// import { RootState } from "../../../redux/store";
// import fetchProjectsCallbackCreator from "../../../redux/projects-manage/fetchProjectscallback";
// import fetchClientPocCallbackCreator from "../../../redux/projects-manage/fetchclientPocCallback";
import axiosInstance from "../../../config/axios.config";
import { environment } from "../../../environments/environment";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AddProjectForm } from "./add-project-form/AddProjectForm";
import ViewProjectDetails from "./view-project-details/ViewProjectDetails";
import { LocalHospital } from "@mui/icons-material";
// import { STATUS_CODES } from "http";

const ProjectManagement = () => {
  // const projectsState = useSelector((states: RootState) => states.allProjects);
  // const clientPocState = useSelector((states: RootState) => states.clientPoc);
  // // const dispatchFnRef = useDispatch<AppDispatch>()
  // const dispatchFnRef = useDispatch<any>();


  const ref: any = useRef(null);
  let data:any;

  const [projectsData, setProjectsData] = useState<any>([]);
  const [contactDetails, setContactDetails] = useState<any>([]);
  const [mileStoneDetails, setMileStoneDetails] = useState<any>([]);
  const [userMappingData, setUserMappingData] = useState<any>([]);
  const [projectBudgetDetails, setProjectbudgetDetails] = useState<any>([]);
  const [clientPOCData, setClientPOCData] = useState<any>([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [projectDetails, setProjectDetails] = useState<any>();
  const [projectStatus, setProjectStatus] = useState<any>();
  const [clients,setClients] = useState<any>()
  const [view,setView] = useState(false)
  const handleOpen = () => {
    setOpen(true);
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 600);
  };
  const handleClose = () => { 
    if(projectDetails){
    setProjectDetails(data);
    setContactDetails(data);
    setMileStoneDetails(data);
    setUserMappingData(data);
    setProjectbudgetDetails(data);
    }
    setOpen(false)};

  const handelView =(id:any)=>{

    axiosInstance
      .get(`${environment.baseApiURL}projects/${id}`)
      .then((resp) => {
        if (resp.data.code == 200) {
          setProjectDetails(resp.data["0"]);
          setContactDetails(resp.data["1"]);
          setMileStoneDetails(resp.data["2"]);
          setUserMappingData(resp.data["3"]);
          setProjectbudgetDetails(resp.data["4"]);
          setView(true)
        }
        return resp.data.data;
      });

  }
  const handleEditClick = (id: any) => {
    axiosInstance
      .get(`${environment.baseApiURL}projects/${id}`)
      .then((resp) => {
        if (resp.data.code == 200) {
          setProjectDetails(resp.data["0"]);
          setContactDetails(resp.data["1"]);
          setMileStoneDetails(resp.data["2"]);
          setUserMappingData(resp.data["3"]);
          setProjectbudgetDetails(resp.data["4"]);
        }

        handleOpen()


        return resp.data.data;
      });
  };
  

  const handelFilterButton = () => {
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };

  const handelSearch = (searchParam: any, value: any) => {
    if (showSearchBar && value.length > 0) {
      axiosInstance
        .get(`${environment.baseApiURL}projects?${searchParam}=${value}`)
        .then((resp) => {
          setProjectsData(resp.data.data);
        });
    } else if (value.length == 0) {
      getProjects()
    }
  };

  const getProjects = () => {
    axiosInstance.get(`${environment.baseApiURL}projects`).then((resp) => {
      setProjectsData([...resp.data.data]);

      return resp.data.data;
    });
  };


  useEffect(()=>{
    if(showSearchBar){

    }else{
      getProjects()
    }
  },[showSearchBar])

  useEffect(() => {
    getProjects();
    const clientPocData = axiosInstance
      .get(`${environment.baseApiURL}projects/clientPOC`)
      .then((resp) => {
        setClientPOCData([...resp.data.data]);
        return resp.data.data;
      });

    
        const projectStatus = axiosInstance
          .get(`${environment.baseApiURL}projects/status`)
          .then((resp) => {
            setProjectStatus(resp.data.data);
            return resp.data.data;
          });

    const clientsData = axiosInstance
    .get(`${environment.baseApiURL}projects/clients`)
    .then((resp) => {
      setClients(resp.data.data);
      return resp.data.data;
    });
  }, [open]);

  
  const rows: GridRowsProp = [
    ...projectsData?.map((project: any) => {
      if (project) {
        return {
          id: project.ProjectGuID,
          projectName: project.ProjectName,
          description: project.ProjectDescription,
          clientPOC: clientPOCData
            .map((clientPoc: any) => {
              return clientPoc.ProjectGuID === project.ProjectGuID
                ? clientPoc.UserPrincipleName
                : null;
            })
            .filter((data: any) => data),
          status:projectStatus?.map((status:any)=>{        
            return Number(project.ProjectStatus)===status.ProjectStatusID?status.Status:null
          })?.filter((data: any) => data),
        };
      }
    }),
  ];

  

  const columns: GridColumns = [
    // {
    //   field: "id",
    //   headerName: "",
    //   width: 200,
    //   headerAlign: "center",
    //   align: "center",
    //  },
    {
      field: "projectName",
      headerName: "Project Name",
      width: 250,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "clientPOC",
      headerName: "ClientPOC",
      width: 270,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "status",
      headerName: "Status",
      width: 170,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 180,
      cellClassName: "actions",
      getActions: ({ id }:any) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        return [
          <Tooltip title={"View"}>
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="view"
            className="textPrimary"
            onClick={()=>handelView(id)}
            color="secondary"
          />
          </Tooltip>,
          <Tooltip title={"Edit"}>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
            color="primary"
          />
           </Tooltip>,
        ];
      },
    },
  ];

  let design: ReactElement;
  design = (
    <>
      <div style={{marginBottom:"80px"}}>
        <div
          style={{
            margin: "0px 20px 20px 30px",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <span
            style={{ display: "inline-block", margin: "70px -20px 0px 30px" }}
          >
            <CSVLink style={{textDecoration:"none"}} data={projectsData}>
            <Button variant="outlined" startIcon={<FileDownloadIcon />}>
              Export CSV
            </Button>
            </CSVLink>
          </span>

          <span
            style={{ display: "inline-block", margin: "auto 0px 0px auto" }}
          >
            <Button
              variant="outlined"
              onClick={handelFilterButton}
              startIcon={<TuneSharpIcon />}
            >
              filter
            </Button>
          </span>
          <span
            style={{ display: "inline-block", margin: "auto 0px 0px -30px" }}
          >
            <Button
              variant="contained"
              startIcon={<LibraryAddIcon />}
              onClick={handleOpen}
            >
              New Project
            </Button>
          </span>
        </div>
        {showSearchBar ? (
          <div>
              <div style={{ width: "100%" ,display:"flex" }} >
               <Paper elevation={3} style={{ margin: "0px 10px 10px 0px" ,width:"60%"}}>
                <TextField
                  sx={{width:"100%"}}
                  label="Search..."
                  id="fullWidth"
                  onChange={(e) => {
                    handelSearch("projectName", e.target.value);
                  }}
                  InputProps={{
                  
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
            </Paper>
            <Paper elevation={3} style={{ margin: "0px 0px 10px 3px" ,width:"20%"}}>

              <Autocomplete
                id="free-solo-demo"

                style={{width:"100%",margin:""}}
                options={projectStatus}
                getOptionLabel={(option:any)=> option.Status}
                onChange={(event,value) => {
                  // console.log(value);
                  
                  handelSearch("projectStatus",value.Status);
                }}
                renderInput={(params) => (
                  <TextField  {...params} label="ProjectStatus" />
                )}
              />
            </Paper>
            <Paper elevation={3} style={{ margin: "0px 0px 10px 13px" ,width:"20%"}}>
              <Autocomplete
                id="free-solo-demo"
                style={{width:"100%"}}
                options={clients}
                getOptionLabel={((option:any) => option.ClientName)}
                onChange={(event,value) => {
                  console.log(value);
                  
                  handelSearch("clientGuId",value.ClientGuID);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Clients" />
                )}
              />
            </Paper>
              </div>
          </div>
        ):null}
        <div
          style={{ height: 400, width: "100%" }}
        >
          <Paper elevation={3}>
           {view && <ViewProjectDetails
           clients={clients} 
           setView={setView}       
           projectStatus={projectStatus}
             projectEditDetails={projectDetails}
            contactEditDetails={contactDetails}
            mileStoneEditDetails={mileStoneDetails}
            userMappingEditData={userMappingData}
            projectBudgetEditDetails={projectBudgetDetails}/>}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid columns={columns} rows={rows} />
            </div>
          </Paper>
        </div>

        {open &&  (<div id="formSection" ref={ref} style={{ height: 400, width: "100%", margin: "40px 0px 30px 0px" }}>
          <AddProjectForm
            getProjects={getProjects}
            handleClose={handleClose}
            clientPOCData={clientPOCData}
            projectEditDetails={projectDetails}
            contactEditDetails={contactDetails}
            mileStoneEditDetails={mileStoneDetails}
            userMappingEditData={userMappingData}
            projectBudgetEditDetails={projectBudgetDetails}
          />
      </div>
        )}
      </div>
    </>
  );
  // }
  return design;
};

export default ProjectManagement;
