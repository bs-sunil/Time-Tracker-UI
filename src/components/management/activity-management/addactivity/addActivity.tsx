import * as React from 'react';
import Box from '@mui/material/Box';
import moment from "@date-io/moment";
import InfoIcon from '@mui/icons-material/Info';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import Stack from '@mui/material/Stack';
import "./addActivity.css"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import TextField from '@mui/material/TextField';

//import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridActionsCellItem, GridColDef, GridColumns, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import EditIcon from "@mui/icons-material/Edit";

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axiosInstance from '../../../../config/axios.config';
import { access } from 'node:fs/promises';
import { useDispatch, useSelector } from 'react-redux';
import { successMemberActionCreator } from '../../../../redux/feature-name/featurenameSlice';
import { useSnackAlert } from '../../../../hooks/useToasterAlert';
import { useNavigate } from 'react-router';
import { handleError } from '../../../utils/CommonFn';
import { FormatAlignJustify } from '@mui/icons-material';
import { color } from '@mui/system';
import { failureActionCreator, successActionCreator } from '../../../../redux/activities/activities';



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

const initialValues = {
  Name: "",
  Effort:0
};















let memberName:any="";
let effort:any="";
let gprojects:any="empty";
let gmileStones:any="empty"
let gactivitygroup:any="empty"




function AddActivity(prop:any) {
  const showSnackbar = useSnackAlert();
  
  const [arraySave,setArraySave]=React.useState(true)
  const[finalsave,setFinalSave]=React.useState(true)
  const[milesStoneShow,setMileStoneShow]=React.useState(true)
  const[membersStoneShow,setMemberStoneShow]=React.useState(true)
  const[projects,setProjects]=React.useState("empty")
  const[mileStone,setMileStone]=React.useState("empty")
  const[description,setDescription]=React.useState("")
  const[activitygroup,setActivitygroup]=React.useState("empty")
  const[member,setMember]=React.useState("")
  const[activitygroupDetail,setActivitygroupDetail]=React.useState([])
  const[memberDetail,setmembersDetail]=React.useState([])
  const [showPassword, setShowPassword] = React.useState(false);
  const[ projectDetail,setProjectDetail]=React.useState([])
  const[ milestoneDetail,setMileStoneDetail]=React.useState([])
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [name,setName]=React.useState("")
  const[efforts,setEfforts]=React.useState("")
  let [allAddEffort,setAllAddEffort]=React.useState<any>([])
  let [count,setCount]=React.useState(0)
  const[projectId,setProjectId]=React.useState('')
  const[effortError,setEffortError]=React.useState(false)
  const[ errorEffortMessage,setErrorEffortMessage]=React.useState("")
  const[nameError,setNameError]=React.useState(false)
  const[errorNameMessage,setErrorNameMessage]=React.useState("")
  const[colors,setColors]=React.useState("#2196f3")
  const[projectError,setProjectError]=React.useState(false)
  const[milestoneError,setMilestoneError]=React.useState(false)
  const[activitygroupError,setActivitygroupError]=React.useState(false)
  const[descriptionError,setDescriptionError]=React.useState(false)
  const[membertableError,setMemberTableError]=React.useState(false)
  const[descpt,setDescript]=React.useState("")

  const handleMemberTableError=()=>{
    if(allAddEffort.length==0){
      console.log("true");
      
      setMemberTableError(true)
      
    }else{
      console.log("false");
 
      setMemberTableError(false)
    } 
  }

  const handleDescriptionError=(e:any)=>{
    if(e.target.value===""){
      setDescriptionError(true)
      setDescript("Please Give The Description")
    }else{
      setDescriptionError(false)
      setDescript("")
    } 
  }

  const handleMilestoneError=(e:any)=>{
    if(gmileStones=="empty"){
    if(e.target.value===undefined){
      setMilestoneError(true)
    }else{
      setMilestoneError(false)
    } 
  }else{
    setMilestoneError(false)
  }
  }

  const handleActivitygroupError=(e:any)=>{
    if(gactivitygroup=='empty'){
  if(e.target.value===undefined){
    setActivitygroupError(true)
  }else{
    setActivitygroupError(false)
  } }
  else{
    setActivitygroupError(false)
  }
}

  const handleProjectError=(e:any)=>{
    if(gprojects=="empty"){
    if(e.target.value===undefined){
      console.log(projectError);
      setProjectError(true)
    }else{
      setProjectError(false)
    } }else{
      setProjectError(false)
    }
  }
const handleEffortNumber=(e:any)=>{
  if(Number(e.target.value)>1000){
    setEffortError(true)
    setErrorEffortMessage("Not Valid")
  
  }
  else{
    setEffortError(false)
    setErrorEffortMessage("")
  }
}
const handleNameError=(e:any)=>{
  const id=e.target.value
    if(allAddEffort.findIndex((val:any) => {return val.id===id})!==-1){
    setNameError(true)
    setColors("#f44336")
  
  }
  else{
    setNameError(false)
    setColors("#2196f3")
  }
}
 
 
  const validate = (values: any) => {
    let errors: any = {};
    
  
    if (!values.Name) {
      errors.Name = "Name is required";
    } else if (allAddEffort.findIndex((val:any) => {return val.name===values.Name})===-1) {
      errors.Name= "You already Added The Member";
    }
    else if(!values.Effort){
      errors.Effort="Effort is Required"
    }
    else if(values.Effort>10000){
      errors.Effort="Please enter Valid Number"
    }
    return errors;
  };
 

  // const initialValues = {
    // email: "",
  // };
  
  // const validate = (values: any) => {
    // let errors: any = {};
    // const regex = /^[a-z0-9._%+-]+@g7cr.com$/i;
  
    // if (!values.email) {
      // errors.email = "Email is required";
    // } else if (!regex.test(values.email)) {
      // errors.email = "Please Enter Valid Email Id";
    // }
    // return errors;
  // };
  

  const productState = useSelector((states:any) => states.allActivities)
  const dispatchFnRef = useDispatch()

 const MemberState = useSelector((states:any) => states.allMembers)
 const dispatchMemberFnRef = useDispatch()
 
 

  
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
   
   }
   catch(err:any){
     const failureAction = failureActionCreator(err.message)
     dispatchFnRef(failureAction)
    
    
   }
 }
 const handleArraySave=()=>{
 
 
  
  console.log(efforts);
  console.log(member);
  
  
  if(efforts!='' && member!="" && effortError==false && nameError==false ){
   
    
    setArraySave(false)
   
  }else{
    
  
    setArraySave(true)
    
  }
 }
 
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleChangeName=(event:any)=>{
    setName(event.target.value)
  }
  const  handleChangeEffort=(event:any)=>{
    // const successAction = successEffortActionCreator(event.target.value)
    //  dispatchMemberFnRef(successAction)
   
    effort=event.target.value  
    setEfforts(event.target.value)
    
    
    
  }

  const handleChangeProject = (event:any) => {
    gprojects=event.target.value
    setProjects(event.target.value);
  };
  const handleChangeActivityDetail=(event:any)=>{
    gactivitygroup=event.target.value
    setActivitygroup(event.target.value)
  }
  const handleChangeMemberDetail=(event:any)=>{
  
    const successAction = successMemberActionCreator(event.target.value)
    // dispatchMemberFnRef(successAction)
   
    memberName=event.target.value
    setMember (event.target.value)
   
 
 
    handleArraySave()
    
   
  }
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(`${new Date().toISOString()}`),
  );

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const handleChangeMileStone=(event:any)=>{
    gmileStones=event.target.value
    setMileStone(event.target.value)
  }

  const handleLoadMileStone=async()=>{
    try{
    
    
       const AxsData=await axiosInstance.get(`activity/allMilestone/${projectId}`)
     
       setMileStoneShow(false)
       setMemberStoneShow(false)
       setMileStoneDetail(AxsData.data.data)
      
      
      
      }
      catch(err:any){
       
        
      }
  
  }
  const handleLoadActivityDetaail=async()=>{
    try{
    
       const AxsData=await axiosInstance.get(`activity/activityGroupList`)
    
       setActivitygroupDetail(AxsData.data.data)
      
      
      
      }
      catch(err:any){
       
        
      }
  
  }
  const handleLoadMemberDetaail=async()=>{
    try{
    
       const AxsData=await axiosInstance.get(`activity/allMembers/${projectId}`)
      
       setmembersDetail(AxsData.data.data)
    
      
      
      
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
  
  // const rows: GridRowsProp = [
    // {
     
    //  ...allAddEffort.map((e:any)=>{
      // console.log(e);
      
          //  return{
            // id:e.id,
            // name:e.name,
            // billable:e. billable,
            // efforts:e. efforts
          //  }
    //  })
     

     
    // },
  // ];
  const handleDeleteClick=(id:any)=>{
   const updateArray=allAddEffort.filter((e:any)=>{
    return  id!==e.id
   })

   setAllAddEffort(updateArray)
   if(updateArray.length==0){
    setMemberTableError(true)
   }
  }
  const columns: GridColumns = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "billable",
      headerName: "Billable",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "efforts",
      headerName: "Efforts",
      width: 180,
      headerAlign: "center",
      align: "center",
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
          // <GridActionsCellItem
            // icon={<EditIcon />}
            // label="Edit"
            // className="textPrimary"
            // // onClick={()=>handleEditClick(id)}
            // color="inherit"
          // />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
           onClick={()=>handleDeleteClick(id)}
            color="inherit"
          />,
          
        ];
      },
    },
  ];

  
  // const rows = [
    // { id: 1,name:"shritam", billable: 'Yes', efforts: '2hr',</>},
    // { id: 2,name:"varun", billable: 'No', firstName: '56min'},
  
  // ];
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [alignment, setAlignment] = React.useState('no');
  const [timealignment, setTimeAlignment] = React.useState('min');

 
 
 
 
  const handleChangeToggle = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  const handleChangeToggleTime = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setTimeAlignment(newAlignment);
    
  };
  const handleSave=async()=>{
    // count++;
    // setCount(count)

    const AxsData=await axiosInstance.get(`activity/fullname/${member}`) 
  
    const fullName=AxsData.data.data[0].FullName
  
    
    const addEffortObj= {
       id:member,
      name:fullName,
      billable:alignment,
      efforts:`${efforts} ${timealignment}`
      
     
    }

   
    // const AddEffortOfMembers=[...allAddEffort,addEffortObj]
    // setAllAddEffort((allAddEffort:any)=>{
        // return [...allAddEffort,addEffortObj]
    // })
    const activity=[...allAddEffort,addEffortObj]
    // allAddEffort.push(addEffortObj)
    setAllAddEffort(activity)
   
   //setAllAddEffort([1,2,3])
   memberName=""
   setMember("")
   setEfforts("")
   effort=""
   
   
    
   
   
   
   
   
   
   
    
    
    
    
    handleClose();
  }
 const handleDescription=(e:any)=>{
  setDescription(e.target.value) 
 }
 const handleFinalSaveVal=()=>{
  if(allAddEffort.length!==0  && projects!="empty" && mileStone!="empty" && description!="" ){
    setFinalSave(false)
  }
  else{
    setFinalSave(true)
  }
 }

 const handlePostSave=()=>{
  setFinalSave(true)
  
  if(value!=null){
  const PostObj={
   
    ProjectGuID:projectId,
    ActivityGroupID:activitygroup,
    ActivityDescription:description,
    ActivityStatusID:1,
   
    
    CreatedOn:new Date(value.format()).toISOString().slice(0, 19).replace('T', ' ') ,
    Milestone:mileStone,
    Users:allAddEffort.map((e:any)=>{
      return {
        userId:e.id,
        Billable:e.billable==='yes'?true:false,
        Effort:Number(e.efforts.split(" ")[0]),
        EffortUnit:e.efforts.split(" ")[0]==="hour"?"H":"M",
      }
    
    })
  
  }
  
  
  const AxsData=axiosInstance.post(`activity/addActivity`,PostObj) 
  AxsData.then((data)=>{
    if(data.data.code==200)
    {

      activityFetch();
    
      if(data.data.code==200){
        showSnackbar("success","Success")
       }
       else if(data.data.code==206){
        showSnackbar("warning",data.data.message)
       }
      
    }
  })
  .catch((err)=>{
 
  //  navigate(handleError(err));
   
  })
}
 

 
  prop.handleClosAddActivity()

 }
  React.useEffect(()=>{
    if(projects!=='empty'){
    handleLoadMileStone()
    handleLoadMemberDetaail()
    }
  },[projects])
  
  React.useEffect(()=>{
    handleLoadProject()
  
    
    handleLoadActivityDetaail()
  },[])
  // React.useEffect(()=>{

  // },[allAddEffort])

  React.useEffect(()=>{
  setMember(memberName)
  handleArraySave()
  },[member])

  React.useEffect(()=>{
    setEfforts(effort)
    handleArraySave()
    },[efforts])
      
    
  return (
   
   
   
   
   
   
   
   
   
   
  // <div style={{border:"2px solid black" ,width:"80%",display:"flex",flexDirection:"column",alignItems:"center",position:"absolute"}}>
  <Paper   sx={{ display: 'flex',minHeight:1000, flexWrap: 'wrap' ,justifyContent:'center', flexBasis:1000,}} elevation={3} >
    <div className='HeadLine' style={{width:"80%",color:"whitesmoke",paddingTop:"1%"}}>
    <h3 >Add Activity</h3>
    </div>
   
    <hr style={{width:"80%",position:"relative",right:"10%"}}/>
     
      
      
      
   
      <div style={{width:"80%"}}>

      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', width:"80%", border:"2px solid black",marginLeft:"10%"}}> */}
       
      <Stack direction="row" spacing={"60%"} style={{ marginTop: "2%" }}>
         <label htmlFor="" >Project</label>
         <label htmlFor="">MilesStone</label>
         </Stack>
         
       
         {/* <Stack direction="row" spacing={0} style={{ marginTop: "2%" }}> */}
         <div style={{display:"flex",justifyContent:"space-between",marginTop: "2%"}}>
          
         <FormControl sx={{  minWidth: "35%" }} error={projectError}>
        <InputLabel id={`demo-simple-select-${projectError?'error':'autowidth'}-label`}>Projects</InputLabel>
        <Select
          labelId={`demo-simple-select-${projectError?'error':'autowidth'}-label`}
          id={`demo-simple-select-${projectError?'error':'autowidth'}`}
          value={projects}
          onChange={(e:any)=>{
            handleChangeProject(e)
            handleLoadProject()
            setProjectId(e.target.value)
            handleFinalSaveVal()
           
           
          }}
          onClose={ handleProjectError}
          
          autoWidth
          label="Projets"
        >
          
          
          
          {
            projectDetail.map((e:any)=>{
              
            return  <MenuItem key={e.ProjectGuID} value={e.ProjectGuID}>{e.ProjectName}</MenuItem>
            })
          }
         
         
         
        </Select>
       {projectError &&<FormHelperText>InValid Input</FormHelperText>}
       </FormControl>
      
      
       <FormControl sx={{ minWidth: "35%" }} error={milestoneError}>
  <InputLabel id={`demo-simple-select-${milestoneError?"error":"autowidth"}-label`}>MileStone</InputLabel>
  <Select
    labelId={`demo-simple-select-${milestoneError?"error":"autowidth"}-label`}
    id={`demo-simple-select-${milestoneError?"error":"autowidth"}`}
    value={mileStone}
    disabled={milesStoneShow}
    onChange={(event:any)=>{
      handleChangeMileStone(event)
      handleFinalSaveVal()
    }}
    onClose={handleMilestoneError}
    // onClick={handleLoadMileStone}
    autoWidth
    label="MileStone"
    
  >
  
  
  
     {
   milestoneDetail.map((e:any)=>{
         return <MenuItem key={e.ProjectMilestoneGuID} value={e.ProjectMilestoneGuID}>{e.MilestoneName}</MenuItem>
         })
      } 
       {/* <MenuItem value={10}>Twenty</MenuItem>  */}
       {/* <MenuItem value={21}>Twenty one</MenuItem>  */}
       {/* <MenuItem value={22}>Twenty one and a half</MenuItem>  */}
        </Select>
        {milestoneError &&<FormHelperText>InValid Input</FormHelperText>}
       </FormControl>
      
       </div>
       {/* </Stack> */}
       
      <Stack direction="row" spacing={"53%"} style={{ marginTop: "2%" }}>
       <label htmlFor="" >Activity Group</label>
          <label htmlFor="">Activity Date</label>
       </Stack>
       {/* <Stack direction="row" spacing={0} style={{ marginTop: "2%" }}> */}
        <div style={{display:"flex",justifyContent:"space-between",marginTop: "2%"}}>
       <FormControl sx={{  minWidth: "35%" }} error={activitygroupError}>
     <InputLabel id={`demo-simple-select-${activitygroupError?"error":"autowidth"}-label`}>ActivityGroup Details</InputLabel>
  <Select
    labelId={`demo-simple-select-${activitygroupError?"error":"autowidth"}-label`}
    id={`demo-simple-select-${activitygroupError?"error":"autowidth"}`}
    value={activitygroup}
    onChange={(event:any)=>{handleChangeActivityDetail(event)
      handleFinalSaveVal()}}
    onClose={handleActivitygroupError}
    autoWidth
    label="ActivityGroup Details"
    
  >
    
  
    
     {
         activitygroupDetail.map((e:any)=>{
         return <MenuItem key={e.ActivityGroupID} value={e.ActivityGroupID}>{e.ActivityName}</MenuItem>
         })
      } 
       {/* <MenuItem value={10}>Twenty</MenuItem>  */}
       {/* <MenuItem value={21}>Twenty one</MenuItem>  */}
       {/* <MenuItem value={22}>Twenty one and a half</MenuItem>  */}
        </Select>
        {activitygroupError &&<FormHelperText>InValid Input</FormHelperText>}
       </FormControl>
       <FormControl style={{  minWidth: "35%" }}>

       <LocalizationProvider dateAdapter={AdapterDayjs}  >
       <div >
        <DesktopDatePicker
        
          inputFormat="MM/DD/YYYY"
          value={value}
          disableFuture={true}
          
          onChange={handleChangeDate}
          
          renderInput={(params:any) => <TextField {...params} fullWidth />}
        />  </div>
        </LocalizationProvider>
       </FormControl>
       </div>
       {/* </Stack> */}
       <Stack direction="row" spacing={0} style={{ marginTop: "2%" }}>
        Activity Description
       </Stack>
       <Stack direction="row" spacing={0} style={{ marginTop: "2%" }}>
       <TextField
          id="Description"
          label="Description"
          inputProps={{ maxLength: 2000 }}
          value={description}
          onChange={(event:any)=>{
            handleDescription(event)
            handleFinalSaveVal()
            handleDescriptionError(event)

          }
          }
          onClick={handleDescriptionError}
          multiline
          rows={4}
          error={descriptionError}
          fullWidth
         helperText={descpt}
          
        />
        </Stack>
        {/* <Stack direction="row" spacing={"75%"} style={{ marginTop: "4%" }}> */}
        <div style={{display:"flex",justifyContent:"space-between",marginTop: "4%"}}>
        <label htmlFor="">Activity Effort</label>
        <Fab color="primary"   aria-label="add"  onClick={handleOpen}>
       <AddIcon  />

      </Fab>
         </div>
        {/* </Stack> */}
        <Stack direction="row" spacing={0} style={{ marginTop: "4%" }}>
        <div style={{ minHeight: 200, width: '100%'}}>
        {membertableError &&<span style={{color:"red"}}><InfoIcon/>Please Add Atleast 1 Member</span>}
           <DataGrid
        rows={allAddEffort}
        columns={columns}
        onStateChange={ handleFinalSaveVal}
        hideFooterPagination
        hideFooterSelectedRowCount
      />
     
      </div>
         </Stack>

         <Stack spacing={2} direction="row" style={{ marginTop: "6%",marginBottom:"4%",marginLeft:"37%" }}>    
  <Button variant="contained" style={{ width:"20%" }} disabled={finalsave} onClick={handlePostSave} >Save</Button>
  <Button variant="contained" style={{ width:"20%" }} onClick={prop.handleClosAddActivity}>Cancel</Button>
  </Stack>
    
      
    
    {/* </Box> */}
  
      </div>
      <div>
      
      <Modal
        open={open}
        onClose={()=>{handleClose()
          handleMemberTableError()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <Stack direction="row" spacing={25} style={{ marginLeft: "-20%" }}>
 
        <Typography
    sx={{ flex: '1 1 100%' }}
    variant="h5"
    justifyContent="center"
    id="tableTitle"
    component="div"
    className='addActivity'
  >
    Add Effort
  </Typography>
 
 
 
 
 
 
    {/* <label htmlFor="">Add Effort</label> */}

   
   <Button variant="text" size="medium" color='inherit' onClick={handleClose} >
       <CloseIcon/>
      </Button>
   </Stack>
   <hr/>
   <Stack direction="row" spacing={4} style={{ marginTop: "6%",marginLeft:"-1%"}}>
    
    <label htmlFor="" className='lbl1' style={{marginLeft:"-1%"}}>&nbsp;Name</label>
    {/* <TextField id="outlined-basic"  */}
    {/* // label="Member Name"  */}
    {/* // value={name} */}
    {/* //  size='medium' */}
    {/* //  placeholder='Enter the Member Name' */}
    {/* //  onChange={handleChangeName} */}
      {/* // sx={{ minWidth: 257 }} */}
        {/* // variant="outlined"  */}
        {/* // /> */}
        <FormControl  error={nameError?true:false}>
        <InputLabel id={`demo-simple-select-${nameError?"error":"autowidth"}-label`} >Members</InputLabel>
  <Select
    labelId={`demo-simple-select-${nameError?"error":"autowidth"}-label`}
    id={`demo-simple-select-${nameError?"error":"autowidth"}`}
    value={member}

    onChange={(event:any)=>{handleChangeMemberDetail(event)
      handleArraySave()
      handleNameError(event)
    }}
    sx={{ minWidth: 257 }}
    autoWidth
    disabled={membersStoneShow}
    label="Members"
    error={nameError}
  
  >
     {
         memberDetail.map((e:any)=>{
         return <MenuItem key={e.UserGuID}  value={e.UserGuID}>{e.FullName}</MenuItem>
         })
      } 
       {/* <MenuItem value={10}>Twenty</MenuItem>  */}
       {/* <MenuItem value={21}>Twenty one</MenuItem>  */}
       {/* <MenuItem value={22}>Twenty one and a half</MenuItem>  */}
        </Select>
        {nameError &&<FormHelperText>Member Already Added</FormHelperText>}
       </FormControl>
    </Stack>
    {/* {nameError && <div style={{textAlign:"center"}}> */}
    {/* <span style={{color:"red"}}>Already Exits</span> */}
    {/* </div>} */}

   <Stack direction="row" spacing={2} style={{ marginTop: "6%",marginLeft: "-1%" }}>

   <label htmlFor="" className='lbl1' >Billable</label>
<ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      placeholder='Enter Your Efforts'
      onChange={handleChangeToggle}
      aria-label="Platform"
     fullWidth
     sx={{height:"50px"}}
     className="billable"
      
      
    >
      <ToggleButton value="yes">Yes</ToggleButton>
      <ToggleButton value="no">No</ToggleButton>
      
    </ToggleButtonGroup>





</Stack>

   <Stack direction="row" spacing={2} style={{ marginTop: "6%" }}>
<label htmlFor="" className='lbl1' >Efforts</label>
<TextField id="outlined-basic"
 type="number"
 label="Effort"
  size='small'
  value={efforts}
  error={effortError}
  helperText={errorEffortMessage}
  onChange={(e:any)=>{
    handleChangeEffort(e)
    handleEffortNumber(e)

  }}
   variant="outlined"
    sx={{height:"10px",marginLeft:"10px"}} />


<ToggleButtonGroup
      color="primary"
      value={timealignment}
      exclusive
      onChange={handleChangeToggleTime}
      aria-label="Platform"
       fullWidth
       className='effort'
       sx={{height:"8px"}}
    >
      <ToggleButton value="min">Min</ToggleButton>
      <ToggleButton value="hour">Hour</ToggleButton>
      
    </ToggleButtonGroup>
  
{/* <FormControlLabel */}
          {/* // value="Min" */}
          {/* // control={<Switch color="primary" />} */}
          {/* // label="Min" */}
          {/* // labelPlacement="start" */}
        {/* // /> */}
        {/* <label htmlFor="">Hours</label> */}
</Stack>

<Stack direction="row" spacing={6} style={{ marginTop: "8%", marginLeft: "25%"}}>

<Stack spacing={2} direction="row">    
      <Button variant="contained"style={{ width:"100%" }} disabled={arraySave} onClick={()=>{handleSave()
     setMemberTableError(false)}} >Save</Button>
      <Button variant="contained" style={{ width:"100%" }}  onClick={()=>{handleClose()
      handleMemberTableError()}}  >Cancel</Button>
    </Stack>
</Stack>
        
        
        </Box>
      </Modal>
    
    
    
    

    </div>
    </Paper> 
    // </div>
  )
}


export default AddActivity