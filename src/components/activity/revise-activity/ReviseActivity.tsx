import {
  Paper,
  TextField,
  InputAdornment,
  Autocomplete,
  Button,
  Tooltip,
  Stack,
} from "@mui/material";
import {
  GridRowsProp,
  GridColumns,
  DataGrid,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { useState } from "react";
import { CSVLink } from "react-csv";
import SearchIcon from "@mui/icons-material/Search";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import "./ReviseActivity.css";
import { CustomFooterStatusComponent } from "./custom-footer/CustomFooter";
import { AlternateEmail } from "@mui/icons-material";

const ReviseActivity = () => {
  let selectRows:any;
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [showButtons,setShowButtons]= useState(false)
  const [disable,setDisable]  = useState(false)
  const [pageSize, setPageSize] = useState<number>(5);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelFilterButton = () => {
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };

  const rows: GridRowsProp = [
    {
      id: 1,

      activityId: "G7CR2022000001",

      project: "TimeTracker",

      activityGroup: "Meeting",

      description: "Tracking the members activity on projects",

      date: "22/12/2022",
    },
    {
      id: 2,

      activityId: "G7CR2022000001",

      project: "TimeTracker",

      activityGroup: "Meeting",

      description: "Tracking the members activity on projects",

      date: "22/12/2022",
    },
    {
      id: 3,

      activityId: "G7CR2022000001",

      project: "TimeTracker",

      activityGroup: "Meeting",

      description: "Tracking the members activity on projects",

      date: "22/12/2022",
    },
  ];

  const columns: GridColumns = [
    {
      field: "activityId",

      headerName: "Activity Id",

      width: 200,

      headerAlign: "center",

      align: "center",
    },

    {
      field: "project",

      headerName: "Project",

      width: 200,

      headerAlign: "center",

      align: "center",
    },

    {
      field: "activityGroup",

      headerName: "ActivityGroup",

      width: 150,

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

      width: 130,

      headerAlign: "center",

      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 210,
      cellClassName: "actions",
      renderCell: (params) => {
        const onClick = (e: any) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
            disabled={disable}
              variant="contained"
              color="warning"
              size="small"
              onClick={onClick}
            >
              Revise
            </Button>
            <Button
            disabled={disable}
              variant="contained"
              color="primary"
              size="small"
              onClick={onClick}
            >
              Accept
            </Button>
          </Stack>
        );
      },
    },
  ];

  const  handleSelected =(selectedRowData:any)=>{
    console.log(selectedRowData);
    
  }
  const onClick=(selectRows:any)=>{
    console.log(selectRows);
  }

  let design = (
    <>
      <div style={{ marginBottom: "80px" }}>
        <div
          style={{
            margin: "0px 0px 20px 30px",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <span style={{ display: "inline-block", margin: "70px 0px 0px 0px" }}>
            <Button
              variant="outlined"
              onClick={handelFilterButton}
              startIcon={<TuneSharpIcon />}
            >
              filter
            </Button>
          </span>
        </div>
        {showSearchBar ? (
          <div>
            <div style={{ width: "100%", display: "flex" }}>
              <Paper
                elevation={3}
                style={{ margin: "0px 10px 10px 0px", width: "60%" }}
              >
                <TextField
                  sx={{ width: "100%" }}
                  label="Search..."
                  id="fullWidth"
                  onChange={(e) => {
                    // handelSearch("projectName", e.target.value);
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
              <Paper
                elevation={3}
                style={{ margin: "0px 0px 10px 3px", width: "20%" }}
              ></Paper>
              <Paper
                elevation={3}
                style={{ margin: "0px 0px 10px 13px", width: "20%" }}
              ></Paper>
            </div>
          </div>
        ) : null}
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
           pageSize={pageSize}
           onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
           rowsPerPageOptions={[5, 10, 20]}
           pagination
            checkboxSelection
            columns={columns}
            rows={rows}
            onSelectionModelChange={(ids) => {
              if(ids.length){
              setShowButtons(true);
              setDisable(true)
            }else{
              setShowButtons(false);
              setDisable(false)
              }
              const selectedIDs = ids;
              const selectedRowData = selectedIDs.map((id) => {
                return rows.filter((row) => row.id === id)[0];
              });
              selectRows=selectedRowData
              handleSelected(selectedRowData)
            }}
          />
        </div>
        {showButtons && <div style={{margin:"20px"}}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={onClick}
            >
              Revise
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={onClick}
            >
              Accept
            </Button>
          </Stack>
        </div> }
      </div>
    </>
  );
  return design;
};
export default ReviseActivity;
