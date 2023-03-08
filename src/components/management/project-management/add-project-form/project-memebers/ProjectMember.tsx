import {
    Paper, Tooltip,
  } from "@mui/material";
  import {
    DataGrid,
    GridActionsCellItem,
    GridColumns,
  } from "@mui/x-data-grid";
  import React, { useEffect, useState } from "react";
import ProjectMembersForm from "./AddProjectMembers";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

  
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
  
    export const ProjectMembers = ({onsubmit,userMappingEditData,projectMemberError}:any) => {
  
    const [projectMembersData,setProjectMembersData]=useState<any>([])
    const [projectMembers,setProjectMembers]= useState<any>([])
    const [projectMemberRow,setProjectMemberRow]= useState<any>([])
  
    const getUserMappingData=(data:any)=>{
      const dataArr = [...projectMembersData, data];
      const dataArr1=[...projectMembers,data]
      const dataArr2=[...projectMemberRow,data]
      setProjectMembers(dataArr1)
      setProjectMembersData(dataArr)
      setProjectMemberRow(dataArr2)
      
    }

    const handleDeleteClick=(row:any)=>{      
      if(userMappingEditData){
      const editMembers=projectMembers.filter((members:any)=>{return members!==row})
      const members=projectMemberRow.filter((members:any)=>{return members!==row})
      row["Deleted"]=""
      setProjectMembers([...editMembers,row])
      setProjectMemberRow([...members])
      }else{
        const members=projectMemberRow.filter((members:any)=>{return members!==row})
        projectMembersData([...members])
        setProjectMemberRow([...members])
        
      }
      
      
    }
    const columns: GridColumns = [
      {
        field: "FullName",
        headerName: "Name",
        width: 260,
        headerAlign: "left",
        align: "left",
        editable:true
      },
      {
        field: "CostCenterName",
        headerName: "Cost Center",
        width: 260,
        headerAlign: "left",
        align: "left",
        editable:true
      },
      {
        field: "Accountability",
        headerName: "Accountability",
        width: 260,
        headerAlign: "left",
        align: "left",
        editable:true
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        headerAlign: "center",
        width: 150,
        cellClassName: "actions",
        getActions: (params:any) => {
          // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
          
          return [
            <Tooltip title={"Delete"}>
            <GridActionsCellItem
              icon={<DeleteOutlineIcon />}
              label="Delete"
              className="textPrimary"
              onClick={()=>handleDeleteClick(params.row)}
              color="error"
            />
            </Tooltip>,
          ];
        },
      },
    ];

    useEffect(()=>{
      if(userMappingEditData){
        onsubmit(projectMembers)
      }else{
        onsubmit(projectMembersData);
      }
    },[projectMembersData,projectMembers,projectMemberRow])

    useEffect(()=>{

      if(userMappingEditData){
        setProjectMembers([...userMappingEditData.map((user:any)=>{return {id:user.UserGuID,ProjectUserMappingGuID:user.ProjectUserMappingGuID, UserGuID:user.UserGuID,FullName:user.FullName,CostCenterName:user.CostCenterName,Accountability:user.Accountability}})])
        setProjectMemberRow([...userMappingEditData.map((user:any)=>{return {id:user.UserGuID,ProjectUserMappingGuID:user.ProjectUserMappingGuID, UserGuID:user.UserGuID,FullName:user.FullName,CostCenterName:user.CostCenterName,Accountability:user.Accountability}})])
      }
    },[])

    return (
  
      <div style={{marginBottom:"30px",marginTop:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h4
          style={{
            paddingTop:"10px",
            paddingLeft:'120px',
            display: "inline-block",
            color: "#9c27b0",
          }}
        >
         <span style={{color:"red"}}>*</span>Project Members
        </h4>
        <ProjectMembersForm onSubmit={getUserMappingData}/>
        </div>
          <Paper style={{minHeight: "200",
          width: "80%",          margin: "auto",
          borderRadius: "5px",}} elevation={1}>
      <div
        style={{
          width: "100%",

        }}
      >
        <DataGrid autoHeight hideFooter  columns={columns} rows={projectMemberRow} />
      </div>
      </Paper>
      {projectMemberError && <span style={{color:"red", display:"inline-block",marginLeft:"120px",fontStyle:"italic"}}>*There should be atleast one member in a project</span>}
      </div>
    );
  };
  
   
  