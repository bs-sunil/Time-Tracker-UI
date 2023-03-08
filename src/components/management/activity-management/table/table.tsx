import React, { useEffect, useState } from "react";
import { DataGrid,GridActionsCellItem,GridColumns,GridRowsProp} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import "./table.css"
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance from "../../../../config/axios.config";
import { environment } from "../../../../environments/environment";
 import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from "react-redux";

import { useSnackAlert } from "../../../../hooks/useToasterAlert";

import { handleError } from "../../../utils/CommonFn";
import { failureActionCreator, successActionCreator } from "../../../../redux/activities/activities";





function TablePage(props:any) {
 const [ActivityDetail,setActivityDetail]=useState([])
 const[search,setSearch]=useState('')
 const[rowState,setRowSatate]=useState([])

 const showSnackbar = useSnackAlert();

 const productState = useSelector((states:any) => states.allActivities)
 const dispatchFnRef = useDispatch()

 const { activities } = productState
async function activityFetch(){
  try{
 
   const AxsData=await axiosInstance.get(`activity/allactivity`)
 
  if (AxsData.data.data !== null) {
    const successAction = successActionCreator(AxsData.data.data)
    dispatchFnRef(successAction)
} else {
    const failureAction = failureActionCreator(AxsData.data.message)
    dispatchFnRef(failureAction)
}
   setActivityDetail(AxsData.data.data)
  //  if(AxsData.data.code==200){
    // showSnackbar("success",AxsData.data.message)
  //  }
  //  else if(AxsData.data.code==206){
    // showSnackbar("warning",AxsData.data.message)
  //  }
  }
  catch(err:any){
    const failureAction = failureActionCreator(err.message)
    dispatchFnRef(failureAction)
    
   
  }
}
const handleDeleteClick =async (id:any)=>{
 
  const Obj={

    ActivityId:id
  }
  try{
   const Axsdelete=await axiosInstance.patch(`activity/UpdatedById`,Obj)
   if(Axsdelete.data.code){
    activityFetch()
   }
   if(Axsdelete.data.code==200){
    showSnackbar("success",Axsdelete.data.message)
   }
   else if(Axsdelete.data.code==206){
    showSnackbar("warning",Axsdelete.data.message)
   }
  }
  catch(err:any){


  }
   
}

  useEffect(()=>{
   activityFetch()
   
  },[])
  useEffect(()=>{
   
    setSearch(props.searchValue)
    
 const arr1= ActivityDetail.map((e:any)=>{return{p:e.ProjectName}})  
 const arr=ActivityDetail.filter((e:any)=>{
  
 
  
  return e.ProjectName.includes(search)})
 


 
   },[props.searchValue])
  
  
  

  //  const handleStatusColor(id:any){

  //  }

  const rows: GridRowsProp = [
   
    
    ...activities.map((activity:any)=>{return {
      id:activity.ActivityGuID,
      activityId:activity.ActivityGuID,
      project:activity.ProjectName,
      activityGroup:activity.ActivityName,
      description:activity.ActivityDescription,
      date:activity.CreatedOn.split("T")[0],  
      pending:Number(activity.ActivityStatusID)
       //pending:{}
      // acceptedbyOwner:
      // acceptedbyclint:
      // rejectedbyowner:
      // rejectedbyClint:
                     
     }})
    // ActivityDetail.map((value:any)=>{
     
      
      //  return {
        // id:value.ActivityGuID,
        // activityId:value.ActivityGuID,
        // project:value.ProjectName,
        // activityGroup:value.ActivityName,
        // description:value.ActivityDescription,
        // date:value.CreatedOn,                  
      // activityId:"G7CR2022000001",
      // project: "TimeTracker",
      // activityGroup:"Meeting",
      // description: "Tracking the members activity on projects",
      // date:"22/12/2022",
     
   
  ];


  useEffect(()=>{
    props.handledCsv(rows) 
},[rows])

  const columns: GridColumns = [
    {
      field: "activityId",
      headerName: "Activity Id",
      width: 210,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "project",
      headerName: "Project",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "activityGroup",
      headerName: "ActivityGroup",
      width: 140,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "description",
      headerName: "Description",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
   
    {
      field: "status",
      type:"actions",
      headerName: "Status",
      width: 100,
      headerAlign: "center",
      align: "center",
      cellClassName: "actions",
      getActions: (params:any)=> {
         
         if(params.row.pending===1){
          return [
            <GridActionsCellItem
            icon={<span className="span1"><Brightness1Icon color='warning'/></span>}
            label="Edit"
            
            className="textPrimary"
            // onClick={()=>handleEditClick()}
            color="inherit"
          />,
          <GridActionsCellItem
          icon={<span className="span1"><Brightness1Icon color='warning'/></span>}
          label="Edit"
          
          className="textPrimary"
          // onClick={()=>handleEditClick()}
          color="inherit"
          />,
          ]
         }else if(params.row.pending===2 ||params.row.pending===3){
          return[
            <GridActionsCellItem
            icon={<span className="span2"><CheckCircleOutlineIcon color='success' /></span>}
            label="Delete"
            className="textPrimary"
           // onClick={()=>handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
          icon={<span className="span1"><Brightness1Icon color='warning'/></span>}
          label="Edit"
          
          className="textPrimary"
          // onClick={()=>handleEditClick()}
          color="inherit"
          />,
          
          ]
         }else if(params.row.pending===4){
         return [
          <GridActionsCellItem
          icon={<span className="span2"><CheckCircleOutlineIcon color='success' /></span>}
          label="Delete"
          className="textPrimary"
         // onClick={()=>handleDeleteClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
        icon={<span className="span2"><CheckCircleOutlineIcon color='success' /></span>}
        label="Delete"
        className="textPrimary"
       // onClick={()=>handleDeleteClick(id)}
        color="inherit"
      />,
         ]
         }
         else if(params.row.pending===5){
          return[
            <GridActionsCellItem
            icon={<span className="span3"><UnpublishedIcon color="error"/></span>}
            label="Delete"
            className="textPrimary"
            // onClick={()=>handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
          icon={<span className="span3"><UnpublishedIcon color="error"/></span>}
          label="Delete"
          className="textPrimary"
          // onClick={()=>handleDeleteClick(id)}
          color="inherit"
        />,
          ]
         }
         else{
           return [
            <GridActionsCellItem
        icon={<span className="span2"><CheckCircleOutlineIcon color='success' /></span>}
        label="Delete"
        className="textPrimary"
       // onClick={()=>handleDeleteClick(id)}
        color="inherit"
      />,
      <GridActionsCellItem
      icon={<span className="span3"><UnpublishedIcon color="error"/></span>}
      label="Delete"
      className="textPrimary"
      // onClick={()=>handleDeleteClick(id)}
      color="inherit"
    />,
           ]
          }  
           
        
      },
    },


    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 70,
      cellClassName: "actions",
      getActions: ({ id }:any) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        return [
          <GridActionsCellItem
            icon={
             
              <Tooltip title="Click On for delete"><DeleteIcon color="error"/></Tooltip>
          }
          
            label="Delete"
            className="textPrimary"
            
             onClick={()=>handleDeleteClick(id)}
            color="inherit"
          />,

          
        ];
      },
    },
  ];
  
  // useEffect(()=>{
    // if(rows.length!==0){
    // props.handleCsv(rows,columns)
    // }
    
  // },[rows])
  

  
  
  return (
    
    <div  style={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns}  rows={rows}/>
      
    </div>
 
  )
}

export default TablePage