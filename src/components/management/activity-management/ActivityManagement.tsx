import { useState } from "react";
import axiosInstance from "../../../config/axios.config";
import { environment } from "../../../environments/environment";
import { useSnackAlert } from "../../../hooks/useToasterAlert";
import Spinner from "../../spinner/Spinner";
import { handleError } from "../../utils/CommonFn";
import "./ActivityManagement.css";
import { CSVLink, CSVDownload } from "react-csv";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import TablePage from './table/table';
import AddActivity from './addactivity/addActivity';

import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InputAdornment from '@mui/material/InputAdornment';
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import TextField from '@mui/material/TextField';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
import { setDate } from "date-fns";
import { useNavigate } from "react-router";
import { FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { successActionCreator } from "../../../redux/activities/activities";
import MaterialUIPickers from "./filter/filter";
import { startOfDay } from "date-fns/fp";



let StartDate:any=new Date().toISOString().slice(0, 19).replace('T', ' ');
let EndDate:any=new Date().toISOString().slice(0, 19).replace('T', ' ');

const ActivityManagement = () => {
  const showSnackbar = useSnackAlert();

  const [csv,setCsv]=useState([])
const[search,setSearch]=useState("")
const [addACtivity,setAddActivity]=useState(false)
const[filterByDate,setFilterByDate]=useState(false)
const [showSearchBox,setShowSearchBox]=useState(false)
const ref:any = React.useRef(null);


const [value, setValue] = React.useState<Dayjs | null>(
  dayjs(`${new Date().toISOString()}`),
);
const handleChangeDate = (newValue: Dayjs | null) => {
  if(newValue!=null){
  StartDate=new Date(newValue.format()).toISOString().slice(0, 19).replace('T', ' ');
  }
  setValue(newValue);
  if(newValue!=null){
  // handelSearch('StartDate',new Date(newValue.format()).toISOString().slice(0, 19).replace('T', ' ') );
  // console.log( new Date(newValue.format()).toISOString().slice(0, 19).replace('T', ' ') );
  
  // handelSearch('EndDate',new Date().toISOString().slice(0, 19).replace('T', ' ') );
  // console.log(new Date().toISOString().slice(0, 19).replace('T', ' ') );
  

}};

const [value2, setValue2] = React.useState<Dayjs | null>(
  dayjs(`${new Date().toISOString()}`),
);
const handleChangeDate2 = (newValue: Dayjs | null) => {
  if(newValue!=null){
  EndDate=new Date(newValue.format()).toISOString().slice(0, 19).replace('T', ' ');
  }
  setValue2(newValue);
};
const [age, setAge] = React.useState<number | string>('');

const [age2, setAge2] = React.useState<number | string>('');

const [age3, setAge3] = React.useState<number | string>('');
const[projects,setProjects]=React.useState("empty")
const[ projectDetail,setProjectDetail]=React.useState([])
const[activitygroup,setActivitygroup]=React.useState("empty")
const[activitygroupDetail,setActivitygroupDetail]=React.useState([])

const handleChangeActivityDetail=(event:any)=>{
  setActivitygroup(event.target.value)
}

const productState = useSelector((states:any) => states.allActivities)
const dispatchFnRef = useDispatch()
const { activities } = productState

const handleLoadActivityDetaail=async()=>{
  try{
  
     const AxsData=await axiosInstance.get(`activity/activityGroupList`)
  
     setActivitygroupDetail(AxsData.data.data)
    
    
    
    }
    catch(err:any){
     
      
    }

}


async function handleLoadProject(){
  try{
   
     const AxsData=await axiosInstance.get(`activity/allProject`)
   
     setProjectDetail(AxsData.data.data)
     
    
     
    }
    catch(err:any){
    
    
    }
  }

const handleChange = (event: any) => {
  setAge(Number(event.target.value) || '');
};

const handleChange2 = (event: any) => {
  setAge2(Number(event.target.value) || '');
};

const handleChange3 = (event: any) => {
  setAge3(Number(event.target.value) || '');
};




  const [loader, setLoader] = useState(false);
  const handleRefresh = () => {
    setLoader(true);
    axiosInstance
      .get(`${environment.baseApiURL}auth/v1/test`)
      .then((result: any) => {
        if (result.data.code === 200) {
          showSnackbar("success", result.data.message);
        } else if (result.data.code === 206) {
          showSnackbar("warning", result.data.message);
        }
        setLoader(false);
       
      })
      .catch((err) => {
        setLoader(false);
      
        handleError(err);
      });
  };
  const handleAddActivity=()=>{
    setAddActivity(true)
    setTimeout(()=>{ ref.current?.scrollIntoView({behavior:"smooth"})},500)
   
   
  }

  const handleAddActivityForCloseBtn=()=>{
      setAddActivity(false)
  }

  const handleSearchBox=()=>{
    showSearchBox==false?setShowSearchBox(true):setShowSearchBox(false)
   
   
   
   
    if(showSearchBox){
      setFilterByDate(false)
      activityFetch()
      StartDate=new Date().toISOString().slice(0, 19).replace('T', ' ');
      EndDate=new Date().toISOString().slice(0, 19).replace('T', ' ');
       setValue(StartDate)
       setValue2(EndDate)
    }
    
  }  
  
  const SetCsvValue=(val:any)=>{
    setCsv(val)
  }


  const handleChangeProject = (event:any) => {
    setProjects(event.target.value);
  };
  async function activityFetch(){
    try{
   
    
     const AxsData=await axiosInstance.get(`activity/allactivity`)
   
     setCsv(AxsData.data.data)
  if(AxsData.data.code==200){
    const successAction = successActionCreator(AxsData.data.data)
    dispatchFnRef(successAction)

  }else if(AxsData.data.code==200){
    showSnackbar("warning", AxsData.data.message);
  }
  
    
    }
    catch(error){
      // navigate(handleError(error));
      
    }
  }
  const handelSearchDate=(Key1: any,Value1: any,Key2: any,Value2: any)=>{
    
   
     axiosInstance.get(`${environment.baseApiURL}activity/allFilterActivity?${Key1}=${Value1}&${Key2}=${Value2}`)
 
         .then((data) => {
 
           if (data.data.code === 200) {
            
             console.log(data.data.data);     
             const successAction = successActionCreator(data.data.data)
 
             dispatchFnRef(successAction)
             console.log( activities);
            }
           }
         
         )
         .catch((err:any) => {
           handleError(err)
         });
     }

  const handelSearch=(Key: any,Value: any)=>{
   if(showSearchBox == true && Value.length > 0){
    
    axiosInstance.get(`${environment.baseApiURL}activity/allFilterActivity?${Key}=${Value}`)

        .then((data) => {

          if (data.data.code === 200) {
            console.log(data.data.data);     
            const successAction = successActionCreator(data.data.data)

            dispatchFnRef(successAction)
            console.log( activities);
            
          }
        }
        )
        .catch((err:any) => {
          handleError(err)
        });
    }
    else if (showSearchBox == false || Value.length == 0) {
      activityFetch()
    }
  }

  React.useEffect(()=>{
    handleLoadProject();
    handleLoadActivityDetaail();
  },[])


  React.useEffect(()=>{
    console.log(StartDate);
    console.log(EndDate);
    if(filterByDate){
      console.log(StartDate);
      console.log(EndDate);
      handelSearchDate('StartDate',StartDate,'EndDate',EndDate)
    }
    
   
  },[value,value2])
  return (
    // <h1>This is from Activity Management</h1>
    // <button onClick={handleRefresh}>Click me!!!</button>
    // {loader && <Spinner />}
    <div className="common-top">
      <div style={{ marginTop: "0%" }}>
    
    
    <Box
     sx={{
       display: 'flex',
       flexDirection:'column',
       
       alignItems:'center',
       flexWrap: 'wrap',
       '& > :not(style)': {
         m: 1,
         width: '95%',
       },
     }}
   >
     {/* <Paper elevation={3} sx={{flexBasis:80}} > */}
     {/* <Filtering handleActivity={handleAddActivity}/> */}
     {/* </Paper> */}
     <div style={{marginTop: "1%", display: "flex", flexDirection: "row-reverse" }}>

         <span

           style={{ display: "inline-block", margin: "0px 0px 0px 20px" }}

         >

<CSVLink
 data={csv} 
 filename={"my-file.csv"}
 style={{textDecoration:"none"}}
 target="_blank"
>
  <Button variant="outlined"   startIcon={<FileDownloadIcon />}>

             Export CSV

           </Button>
           </CSVLink>

         </span>



         <span

           style={{ display: "inline-block", margin: "0px 0px 0px auto" }}

         >

           {/* <IconButton onClick={handelFilter}  size="large" color="primary">

         <FilterAltIcon fontSize="inherit" />

         </IconButton> */}

           <Button

             variant="outlined"

             onClick={handleSearchBox}

             startIcon={<TuneSharpIcon />}

           >

             filter

           </Button>

         </span>

         <span

           style={{ display: "inline-block", margin: "0px 0px 0px 0px" }}

         >

           {/* <Link to={"/addprojects"}> */}

   <Button variant="contained" startIcon={<LibraryAddIcon />} onClick={handleAddActivity}>

               New Activity

             </Button> 

           {/* </Link> */}

         </span>

       </div> 


       

{showSearchBox&&<div>
<Paper elevation={3} style={{ margin: "0px 25px 10px 30px" }}>
<div style={{ width: "100%" ,display:"flex",justifyContent:"space-evenly" }} >
 <TextField
 sx={{width:"50%"}}
 label="Search..."
 id="fullWidth"
 onChange={(e) => {
 handelSearch('Pname', e.target.value);
  }}
 InputProps={{
 startAdornment: (
<InputAdornment position="start">
  <SearchIcon />
 </InputAdornment>
 ),
 }}
 />
 <FormControl sx={{ml:1,minWidth: 120 }}>
  <InputLabel id="demo-dialog-select-label">Projects</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                // value={projects}
                onChange={(e:any)=>{
                  handelSearch('ProjectName', e.target.value);
                }}
                placeholder={"Projects"}
                input={<OutlinedInput label="Projects" />}
              >
                   <MenuItem value="">
                
            </MenuItem>
            {
              projectDetail.map((e:any)=>{
                
              return  <MenuItem key={e.ProjectGuID} value={e.ProjectName}>{e.ProjectName}</MenuItem>
              })
            }
           
           
  
              </Select>
            </FormControl>

            <FormControl sx={{ml:1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Activity</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                // value={activitygroup}
                onChange={(e:any)=>{
                handelSearch('ActivityName', e.target.value);
                }}
                input={<OutlinedInput label="Activity" />}
              >
               
               <MenuItem value="">
    
      </MenuItem>
     {
         activitygroupDetail.map((e:any)=>{
         return <MenuItem key={e.ActivityGroupID} value={e.ActivityName}>{e.ActivityName}</MenuItem>
         })
      } 
  
              </Select>
            </FormControl>
            <FormControl sx={{ml:1, minWidth: 120 }}>

       <LocalizationProvider dateAdapter={AdapterDayjs}>
     
       <div>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          label="Start Date"
          value={value}
          disableFuture={true}
          
          onChange={(e:any)=>{
          
            handleChangeDate(e);
            setFilterByDate(true)
          }}
          renderInput={(params:any) => <TextField {...params} />}
        />  </div>
        </LocalizationProvider>
       </FormControl>
       <Box sx={{ mx: 2,paddingTop:2}}> to </Box>
            <FormControl sx={{minWidth: 120 }}>

       <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div>
        <DesktopDatePicker
         label="End Date"
          inputFormat="MM/DD/YYYY"
          value={value2}
          disableFuture={true}
          
          onChange={(e:any)=>{
            //  handelSearch('EndDate',new Date(e.target.value.format()).toISOString().slice(0, 19).replace('T', ' ') );
             handleChangeDate2(e);
             setFilterByDate(true)
          }}
          
          renderInput={(params:any) => <TextField {...params} />}
        />  </div>
        </LocalizationProvider>
       </FormControl>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           



             </div>
 {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
         </Paper>
       </div>
       }





     <Paper elevation={3} sx={{flexBasis:400}}>
      <TablePage searchValue={search} handledCsv={SetCsvValue} />
     </Paper>
     <div id='section-1' ref={ref}>
     
      
    
     {addACtivity &&  <AddActivity handleClosAddActivity={handleAddActivityForCloseBtn}/> }
        
      
      
      </div>
      
    
     
   </Box>


    
      
   
   </div>

   
  
    </div>
  );
};

export default ActivityManagement;
