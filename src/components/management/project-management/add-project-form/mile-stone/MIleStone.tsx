import {
  Paper, Tooltip,
} from "@mui/material";

import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowProps,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AddMileStoneForm from "./AddMileStones";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const MIleStoneForm = ({ onSubmit ,mileStoneEditDetails}: any) => {
  const [mileStoneData, setMileStoneData] = useState<any>([]);
  const [mileStones,setMileStones]= useState<any>([])
  const [mileStoneRow,setMileStoneRow] = useState<any>([])

  const getMileStoneData = (data: any) => {
    const dataArr = [...mileStoneData, data];
    const dataArr1=[...mileStones,data]
    const dataArr2=[...mileStoneRow,data]
    setMileStones(dataArr1)
    setMileStoneData(dataArr);
    setMileStoneRow(dataArr2)

  };
  
 const handelDeleteClick=(row:any)=>{
  if(mileStoneEditDetails){
    const mileStone=mileStoneRow.filter((mileStone:any)=>{return mileStone!==row})
    const editMileStone=mileStones.filter((mileStone:any)=>{return mileStone!==row})
    row["Deleted"]=""
    setMileStones([...editMileStone,row])
    setMileStoneRow([...mileStone])
    }else{
      const mileStone=mileStoneRow.filter((mileStone:any)=>{return mileStone!==row})
      setMileStoneData([...mileStone])
      setMileStoneRow([...mileStone])
    }
 }

  useEffect(() => {
    if(mileStoneEditDetails){
      console.log(mileStones);
      onSubmit(mileStones)
    }else{
      onSubmit(mileStoneData); 
    }
  }, [mileStoneData,mileStones]);

  useEffect(()=>{
    if(mileStoneEditDetails){
      setMileStones([...mileStoneEditDetails.map((mileStone:any)=>{return {id:mileStone.ProjectMileStoneGuID,ProjectMileStoneGuID:mileStone.ProjectMileStoneGuID,MilestoneName:mileStone.MilestoneName,MilestoneDescription:mileStone.MilestoneDescription}})])
      setMileStoneRow([...mileStoneEditDetails.map((mileStone:any)=>{return {id:mileStone.ProjectMileStoneGuID,ProjectMileStoneGuID:mileStone.ProjectMileStoneGuID,MilestoneName:mileStone.MilestoneName,MilestoneDescription:mileStone.MilestoneDescription}})])
    }
  },[])
  const columns: GridColumns = [
    {
      field: "MilestoneName",
      headerName: "Name",
      width: 260,
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "MilestoneDescription",
      headerName: "Description",
      width: 500,
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 170,
      cellClassName: "actions",
      getActions: (params:any) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        return [
          <Tooltip title={"Delete"}>
          <GridActionsCellItem
            icon={<DeleteOutlineIcon />}
            label="Delete"
            className="textPrimary"
            onClick={()=>handelDeleteClick(params.row)}
            color="error"
          />
          </Tooltip>,
        ];
      },
    },
  ];
  return (
    <div style={{ marginBottom: "30px",marginTop:"20px" }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      {/* <Stack direction="row"justifyContent="space-around" spacing={6}> */}
        <h4
          style={{
            paddingTop:"10px",
            paddingLeft:'120px',
            display: "inline-block",
            color: "#9c27b0",
          }}
        >Project MileStone
        </h4>
        <AddMileStoneForm onSubmit={getMileStoneData} />
        </div>
      {/* </Stack> */}
      <Paper
        style={{
          height: "auto",
          width: "80%",
          margin: "auto",
          borderRadius: "5px",
        }}
        elevation={1}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <DataGrid autoHeight hideFooter columns={columns} rows={mileStoneRow} />
        </div>
      </Paper>
    </div>
  );
};

export default MIleStoneForm;
