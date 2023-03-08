import { AccountCircle, Block, Search } from '@mui/icons-material'
import { Autocomplete, Box, Button, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputBase, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import axiosInstance from '../../../../config/axios.config';
import { environment } from '../../../../environments/environment';
import "../UserManagement.css";
import { useSnackAlert } from '../../../../hooks/useToasterAlert';
import { handleError } from '../../../utils/CommonFn';
import validator from 'validator';

const AddForm = ({ costcenters, roles, entity, UaddOem, getAppUsers }: any) => {

    const [AadUsersdata, setAadUsersdata] = React.useState<any>([])
    const [value, setValue] = React.useState<string | null>("");
    const [inputValue, setInputValue] = React.useState('');
    const [disName, setDisName] = React.useState('')
    const [aMobile, setaMobile] = React.useState("")
    const [aCost, setaCost] = React.useState("")
    const [aRole, setaRole] = React.useState("")
    const [oem, setOEM] = React.useState(true)
    const snackBar = useSnackAlert()
    const [eMobileError, setEMobileError] = React.useState<any>(false)
    const [eMobileDesc, setEMobileDesc] = React.useState("")
    const [eRoleError, setERoleError] = React.useState<any>(false)
    const [eRoleDesc, setERoleDesc] = React.useState("")
    const [eCostError, setECostError] = React.useState<any>(false)
    const [eCostDesc, setECostDesc] = React.useState("")
    const [loadState, setLoadState] = React.useState<any>(false)
    const [activeSave, setActiveSave] = React.useState<any>(true)



    const AADUsers = (val: any) => {
        if (val.length > 1) {
            setLoadState(true)
            const searchdata = { 'search': val }
            axiosInstance
                .post(`${environment.baseApiURL}appuser/search`, searchdata)
                .then((result:any) => {
                    if (result.data.code === 200) {
                        setAadUsersdata(result.data[0])
                        setLoadState(false)
                    }
                    else if (result.data.code === 204) {
                        snackBar("warning", result.data.message)
                    }
                }
                )
                .catch((err:any) => {
                    handleError(err)
                })
        }
    }

    const AADUsersData = AadUsersdata.map((user: any) => { return { value: user.id, label: user.userPrincipalName } })

    const costCenterName = costcenters.map((cost: any) => { return { value: cost.CostCenterID, label: cost.CostCenterName } })
    const Roles = roles.filter((role: any) => { return (role.RoleName.toLowerCase().includes('oem')) })
    const OemRoles = Roles.map((r: any) => { return { value: r.RoleID, label: r.RoleName } })


    const GetUserName = (usr: any) => {
        setDisName('')
        AadUsersdata.filter((name: any) => {
            if (name.id === usr.value) {
                setDisName(name.displayName)
            }
        })
    }

    const PostOemUser = (e: any) => {
        e.preventDefault()
        const postData = {
            "UserPrincipleName": AADUsersData[0].label,
            "FullName": disName,
            "UserEntity": entity,
            'RoleID': aRole,
            'CostCenterID': aCost,
            'Mobile': aMobile
            
        }
        axiosInstance.post(`${environment.baseApiURL}appuser`, postData)
            .then(
                (result:any) => {
                    if (result.data.code === 200) {
                        snackBar("success", result.data.message)
                        return result.data
                    }
                    else if (result.data.code === 204) {
                        snackBar("warning", result.data.message)
                    }
                }
            )
            .catch(
                (err:any) => { handleError(err) }
            )
        UaddOem(true)
        setOEM(false)
        getAppUsers()

    }

    const handeOemClose = () => {
        setOEM(false)
        UaddOem(false)
       
    }

    const HandleEMobile = (a: string) => {
        if (!validator.isLength(a, { min: 10, max: 13 }) || !validator.isMobilePhone(a)) {
            setEMobileError(true)
            setEMobileDesc("Please Enter the valid Mobile Number")
        }
        else {
            setEMobileError(false)
            setEMobileDesc("")
        }
    }



    const handleERoll = (r: any) => {

        if (r > 0) {
            setaRole(r)
            setERoleError(false)
            setERoleDesc("")
        }
    }

    const handleECost = (r: any) => {

        if (r > 0) {
            setaCost(r)
            setECostError(false)
            setECostDesc("")
        }
    }

    const handleSave=()=>{
        if(((eCostError || eRoleError || eMobileError)===true) || (value=="" || disName=="" || aCost=="" || aRole=="" || aMobile=="")){
            setActiveSave(true)
        }
        else{
            setActiveSave(false)
        }
    }
   useEffect(()=>{ 
     handleSave()
   },[value,aCost,aRole,aMobile])

    const addOEM =
        <div style={{ width: "95%", margin: '30px auto' }}>
            <Paper elevation={3} sx={{ width: "100%", alignContent: "center", margin: '20px auto' }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <div style={{ padding: '2px 4px', display: 'flex',justifyContent:'center', width: 'auto', margin: '20px auto' }}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex',  width: 'auto', height: 'auto' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <IconButton sx={{ p: '10px', margin: '20px auto' }} aria-label="menu">
                                        <AccountCircle />
                                    </IconButton>
                                    <div style={{ width: '80%' }}>
                                        <Autocomplete
                                            defaultValue=""
                                            value={value}

                                            loading={loadState}
                                            onChange={( newValue:any) => {
                                                setValue(newValue); GetUserName(newValue);handleSave()
                                            }}
                                            inputValue={inputValue}
                                            onInputChange={( newInputValue:any) => {
                                                setInputValue(newInputValue); AADUsers(newInputValue)
                                            }}
                                            autoComplete
                                            includeInputInList
                                            options={AADUsersData}
                                            isOptionEqualToValue={(option:any, value:any) => option.valueOf === value.valueOf}
                                            renderInput={(params:any) => <TextField required
                                                {...params} label="Search User" variant='standard' id="standard-search" />}
                                        />
                                    </div>

                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                                </div>

                            </Paper>
                        </div>
                        <br></br>
                        <br></br>
                        <div style={{ display: 'block',  fontSize: '18px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
                                <div style={{ display: 'flex' }}>
                                    <InputLabel sx={{ fontSize: '18px', mt: '15px' }}>Full Name:&nbsp; </InputLabel>

                                    <TextField
                                        required
                                        value={disName}
                                        id="outlined-required"
                                        label="Name"
                                        helperText="Enter the Full Name"
                                        size="small"
                                        onChange={handleSave}
                                    />

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <InputLabel sx={{ fontSize: '18px', mt: '15px' }}>Mobile Number:&nbsp; </InputLabel>
                                    <TextField
                                        id="outlined-req"
                                        label="Phone"
                                        // helperText="Enter the Mobile Number"
                                        defaultValue=""
                                        size="small"
                                        onChange={(mob:any) => { HandleEMobile(mob.target.value);handleSave(); setaMobile(mob.target.value) }}
                                        error={eMobileError}
                                        helperText={eMobileDesc}
                                    />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap"  }}>
                                <div style={{ marginBottom: 40, marginLeft: 47, display: 'flex'  }}>
                                    <InputLabel sx={{ fontSize: '18px', mt: '15px' }}>Role:&nbsp; </InputLabel>
                                   
                                    <FormControl sx={{ display: 'flex', justifyContent: 'space-around', width: '25ch' }} error={eRoleError}>
                                        <InputLabel >Select *</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            defaultValue=""
                                            label="Select *"
                                            size="small"
                                            onOpen={() => {
                                                if (aRole === "") {
                                                    setERoleError(true)
                                                    setERoleDesc("Please Select the Role")
                                                    // setActiveSave(false)
                                                }
                                            }}
                                            onChange={(c:any) =>{handleERoll(c.target.value);handleSave()} }
                                        >
                                        {OemRoles.map((option: any) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                         </Select>
                                        <FormHelperText>{eRoleDesc}</FormHelperText>
                                    </FormControl>
                                </div>
                                <div style={{ marginBottom: 40, marginLeft: 40, display: 'flex' }}>
                                    <InputLabel sx={{ fontSize: '18px', mt: '15px'  }}>Cost Center:&nbsp; </InputLabel>
                                    <FormControl sx={{ display: 'flex', justifyContent: 'space-around', width: '25ch' }} error={eCostError}>
                                        <InputLabel  >Select *</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            defaultValue=""
                                            label="Select *"
                                            size="small"
                                            onOpen={() => {
                                                if (aCost === "") {
                                                    setECostError(true)
                                                    setECostDesc("Please Select the Cost Center")
                                                }
                                            }}
                                            onChange={(c:any) => {handleSave();handleECost(c.target.value)}}
                                        >
                                            {costCenterName.map((option: any) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{eCostDesc}</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" style={{ marginBottom: "30px", marginRight: "65px" }} disabled={(eCostError || eRoleError || eMobileError||activeSave)} onClick={PostOemUser}>
                            Save
                        </Button>
                        <Button variant="contained" onClick={() => { handeOemClose(); setEMobileError(false) }} style={{ marginBottom: "30px" }}>
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Paper>
        </div>
    return (
        oem ? addOEM : <div></div>
    )
}

export default AddForm;