import {
    Paper, Tooltip, 
  } from "@mui/material";
  import {
    DataGrid,
    GridActionsCellItem,
    GridColumns,
    GridRowProps,
  } from "@mui/x-data-grid";
  import React, { useEffect } from "react";
import ProjectBudgetForm from "./AddProjectBudget";
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
  
    export const ProjectBudget = ({onSubmit,projectBudgetEditDetails,projectBudgetError}:any) => {
    const [projectBudget,setProjectBudget]=React.useState<any>([])
    const [projectBudgetData,setProjectBudgetData]= React.useState<any>([])
    const [projectBudgetRow,setProjectBudgetRow]=React.useState<any>([])

    const getProjectBudGetData=(data:any)=>{
      const dataArr= [...projectBudget,data]
      const dataArr1= [...projectBudgetData,data]
      const dataArr2=[...projectBudgetRow,data]
      setProjectBudgetData(dataArr1)
      setProjectBudget(dataArr)
      setProjectBudgetRow(dataArr2)
      
    }

    const handleDeleteClick=(row:any)=>{
      if(projectBudgetEditDetails){
        const budgets=projectBudgetRow.filter((budget:any)=>{return budget!==row})
        const editBudgets=projectBudgetData.filter((budget:any)=>{return budget!==row})
        row["Deleted"]=""
        setProjectBudgetData([...editBudgets,row])
        setProjectBudgetRow([...budgets])
        }else{
          const budgets=projectBudgetRow.filter((budget:any)=>{return budget!==row})
          setProjectBudget([...budgets])
          setProjectBudgetRow([...budgets])
          
        }
    }
    useEffect(() => {
      if(projectBudgetEditDetails){
        onSubmit(projectBudgetData)
        
      }else{
        onSubmit(projectBudget);
      }
  
    }, [projectBudget,projectBudgetData,projectBudgetRow]);

    useEffect(()=>{
      if(projectBudgetEditDetails){
        setProjectBudgetData([...projectBudgetEditDetails.map((projectBudgetDetail:any)=>{return {id:projectBudgetDetail.ProjectBudgetGuID,ProjectBudgetGuID:projectBudgetDetail.ProjectBudgetGuID,EffortInManHours:projectBudgetDetail.EffortInManHours,StartDate:projectBudgetDetail.StartDate,EndDate:projectBudgetDetail.EndDate}})])
        setProjectBudgetRow([...projectBudgetEditDetails.map((projectBudgetDetail:any)=>{return {id:projectBudgetDetail.ProjectBudgetGuID,ProjectBudgetGuID:projectBudgetDetail.ProjectBudgetGuID,EffortInManHours:projectBudgetDetail.EffortInManHours,StartDate:projectBudgetDetail.StartDate,EndDate:projectBudgetDetail.EndDate}})])
      }
    },[])
  
    const columns: GridColumns = [
      {
        field: "EffortInManHours",
        headerName: "Man Hours",
        width: 260,
        headerAlign: "left",
        align: "left",
        editable:true
      },
      {
        field: "StartDate",
        headerName: "Start Date",
        width: 260,
        headerAlign: "left",
        align: "left",
        editable:true
      },
      {
        field: "EndDate",
        headerName: "End Date",
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
    return (
      <div style={{marginBottom:"30px",marginTop:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        {/* <Stack direction="row"justifyContent="space-around" spacing={6}> */}
        <h4
          style={{
            paddingTop:"10px",
            paddingLeft:'120px',
            display: "inline-block",
            color: "#9c27b0",
          }}
        >
         <span style={{color:"red"}}>*</span>Project Budget
        </h4>
        <ProjectBudgetForm onSubmit={getProjectBudGetData} />
        {/* </Stack> */}
        </div>
          <Paper style={{height: "auto",
          width: "80%",          margin: "auto",
          borderRadius: "5px",}} elevation={1}>
      <div
        style={{
          width: "100%",

        }}
      >
        <DataGrid autoHeight hideFooter  columns={columns} rows={projectBudgetRow} />
      </div>
      </Paper>
      {projectBudgetError && <span style={{color:"red", display:"inline-block",marginLeft:"120px" ,fontStyle:"italic"}}>*There should be atleast one projectbudget in a project</span>}
      </div>
    );
  };
  
   
  