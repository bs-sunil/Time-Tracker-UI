import React, { useEffect } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Autocomplete, Box, Button, Divider, Fab, FormControl, FormHelperText, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, Modal, Paper, Select, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";

import {
    GridRowsProp,
    GridColumns,
    DataGrid,
} from '@mui/x-data-grid';
import axiosInstance from '../../../../config/axios.config';
import { environment } from '../../../../environments/environment';
import { useSnackAlert } from '../../../../hooks/useToasterAlert';
import { handleError } from '../../../utils/CommonFn';
import validator from 'validator';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, Navigate, NavigateFunction, useNavigate } from 'react-router-dom';

export type RouteParamsType = {
    fromUser: boolean
}

const AddClient = ({ roles, entity, UaddClient, getAppUsers }: any) => {
    const [showClientUser, setshowClientUser] = React.useState(false);
    const [clientsData, setClientsData] = React.useState<any>([])
    const [contactsData, setContactsData] = React.useState<any>([])
    const [clientId, setClientId] = React.useState('')
    const [showTable, setShowTable] = React.useState(false)
    const [AadUsersdata, setAadUsersdata] = React.useState<any>([])
    const [value, setValue] = React.useState<string | null>('');
    const [inputValue, setInputValue] = React.useState('');
    const [contactName, setContactName] = React.useState("")
    const [aCMobile, setaCMobile] = React.useState("")
    const [aCRole, setaCRole] = React.useState("")
    const ref: any = React.useRef(null)
    const [contactId, setContactId] = React.useState("")
    const snackBar = useSnackAlert()
    const [eMobileError, setEMobileError] = React.useState<any>(false)
    const [eMobileDesc, setEMobileDesc] = React.useState("")
    const [eRoleError, setERoleError] = React.useState<any>(false)
    const [eRoleDesc, setERoleDesc] = React.useState("")
    const [eCostError, setECostError] = React.useState<any>(false)
    const [loadState, setLoadState] = React.useState<any>(false)
    const [clientDrop, setClientDrop] = React.useState<any>(true)
    const [activeSave, setActiveSave] = React.useState<any>(true)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [errorName, setErrorName] = React.useState<any>(false)
    const [errorEmail, setErrorEmail] = React.useState<any>(false)
    const [errorMobile, setErrorMobile] = React.useState<any>(false)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [contAdded, setcontAdded] = React.useState<any>(false)
    const [fromUser, setFromUser] = React.useState<any>(true)
    const navigate: NavigateFunction = useNavigate()


    React.useEffect(
        () => {
            axiosInstance.get(`${environment.baseApiURL}clients/client/NameAndId`)
                .then(
                    (data:any) => {
                        if (data.data.code === 200) {
                            setClientsData(data.data.data)
                        }
                        else if (data.data.code === 204) {
                            snackBar("warning", data.data.message)
                        }
                    })
                .catch((err:any) => {
                    handleError(err)
                });
        }, []
    )

    const CLIENTDATA = clientsData.map((c: any) => { return { value: c.ClientGuID, label: c.ClientName } })



    const getClientContacts = (clientID: any) => {

        axiosInstance.get(`${environment.baseApiURL}clients/contacts/client/${clientID}`)
            .then(
                (data:any) => {
                    if (data.data.code === 200) {
                        setContactsData(data.data.data)

                    }
                    else if (data.data.code === 204) {
                        snackBar("warning", data.data.message)
                    }
                })

            .catch((err:any) => {
                handleError(err)
            });

        setShowTable(true)
        setTimeout(() => {
            ref.current?.scrollIntoView({ behaviour: "Smooth" })
        }, 800);

    }

    useEffect(

        () => {
            if (clientId !== "") {
                getClientContacts(clientId)
            }
        }, [contAdded]

    )

    const rows: GridRowsProp = [

        ...contactsData.map((d: any) => {
            return {
                id: d.ContactGuID,
                fullName: d.FullName,
                email: d.UserPrincipleName,
                mobile: d.Mobile,
            }
        })

    ];

    const columns: GridColumns = [
        { field: 'fullName', headerName: 'Full Name', width: 260 },
        { field: 'email', headerName: 'Email', width: 285 },
        { field: 'mobile', headerName: 'Mobile', width: 210 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 210,
            cellClassName: 'actions',
            getActions: ({ id }: any) => {

                return [
                    <Button onClick={() => {
                        setshowClientUser(true); setTimeout(() => {
                            ref.current?.scrollIntoView({ behaviour: "Smooth" })
                        }, 500); GetContactId(id)
                    }}>Select</Button>

                ]
            },
        },
    ];

    const navigateClient=(p:string)=>{ 
            navigate("/management/client",{state:p}) 
    }

    const handleName = (name: string) => {
        name == "" ? setErrorName(true) : setErrorName(false)
        setName(name)
    }


    const handleEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email || email == '') {
            setErrorEmail(true)
        } else if (!regex.test(email)) {
            setErrorEmail(true)
        } else {
            setErrorEmail(false)
        }
        setEmail(email)
    }

    const handleMobile = (mobile: string) => {
        const mobileRegex = /^[0]?[789]\d{9}$/
        if (!mobile) {
            setErrorMobile(true)
        } else if (!mobileRegex.test(mobile)) {
            setErrorMobile(true)
        } else {
            setErrorMobile(false)
        }
        setPhone(mobile)
    }

    const saveHandler = () => {
        if (!name || name == "") {
            setErrorName(true)
            handleOpen()
        }
        else if (email == "" || !email) {
            setErrorEmail(true)
            handleOpen()
        }
        else if (phone == "" || !phone) {
            setErrorMobile(true)
            handleOpen()
        }
        else {
           setErrorName(false);
            setErrorEmail(false);
            setErrorMobile(false);

            setName('');
            setEmail('');
            setPhone('')
        }
    };

    const sendContacts = (e: any) => {
        e.preventDefault()
        const postData = {
            "UserPrincipleName": email,
            "FullName": name,
            'Mobile': phone,
        }

        axiosInstance.post(`${environment.baseApiURL}clients/contacts/${clientId}`, postData)
            .then(
                (result:any) => {

                    if (result.data.code === 200) {
                        snackBar("success", result.data.message)
                        setcontAdded(true)
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
        handleClose()
    }

    const AADUsers = (val: any) => {
        if (val.length > 1) {
            setLoadState(true)
            const searchdata = { 'search': val }
            axiosInstance
                .post(`${environment.baseApiURL}appuser/search`, searchdata)
                .then(
                    (result:any) => {
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

    const GetContactId = (id: any) => {
        setContactId(id)
    }

    const AADUsersData = AadUsersdata.map((user: any) => { return { value: user.id, label: user.userPrincipalName } })
    const Roles = roles.filter((role: any) => { return (role.RoleName.toLowerCase().includes('client')) })
    const ClientRoles = Roles.map((r: any) => { return { value: r.RoleID, label: r.RoleName } })


    const GetContactName = (usr: any) => {
        setContactName('')
        AadUsersdata.filter((name: any) => {
            if (name.id === usr.value) {
                setContactName(name.displayName)
            }
        })
    }

    const PostClientUser = (e: any) => {
        e.preventDefault()

        const postData = {
            "UserPrincipleName": AADUsersData[0].label,
            "FullName": contactName,
            "UserEntity": entity,
            'RoleID': aCRole,
            'Mobile': aCMobile,
            "ClientGuID": clientId,
            "ContactGuID": contactId,
           
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
        setshowClientUser(false)
        UaddClient(true)
        getAppUsers()
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
            setaCRole(r)
            setERoleError(false)
            setERoleDesc("")
        }
    }

    const handleSave = () => {
        if (((eCostError || eRoleError || eMobileError) === true) || (value == "" || contactName == "" || aCRole == "" || aCMobile == "")) {
            setActiveSave(true)
        }
        else {
            setActiveSave(false)
        }
    }

    useEffect(() => {
        handleSave()
    }, [value, aCRole, aCMobile, contactName])

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        padding: "30px 75px 30px 75px"
    };

    const addClientUser =
        <div style={{ width: "85%", margin: '20px auto',paddingBottom:'30px' }}>
            <Paper elevation={4} style={{ width: "100%", alignContent: "center", margin: '20px auto', paddingBottom: '20px' }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '22ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{ padding: '2px 4px',  display: 'flex', justifyContent: 'center',  width: 'auto', height: '100px', margin: '20px auto' }}>
                        <Paper
                            component="form"

                            sx={{ p: '2px 4px', display: 'flex', width: 'auto', height: 'auto'  }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div>
                                    <IconButton sx={{ p: '10px', margin: '20px auto' }} aria-label="menu">
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <div style={{ width: '250px' }}>
                                    <Autocomplete
                                        loading={loadState}
                                        value={value}
                                        defaultValue=""
                                        onChange={(newValue:any) => {
                                            setValue(newValue); GetContactName(newValue); handleSave()
                                        }}
                                        inputValue={inputValue}
                                        onInputChange={(newInputValue:any) => {
                                            setInputValue(newInputValue); AADUsers(newInputValue)
                                        }}
                                        autoComplete
                                        includeInputInList
                                        options={AADUsersData}
                                        isOptionEqualToValue={(option:any, value:any) => option.valueOf === value.valueOf}
                                        renderInput={(params:any) => <TextField sx={{ width: '250px' }} required
                                            {...params} label="Search User" variant='standard' id="standard-search" />}
                                    />
                                </div>
                                <div style={{ margin: '20px 0px 10px 10px' }}>
                                    <IconButton type="button"  /*aria-label="search"*/>
                                        <SearchIcon />
                                    </IconButton>
                                </div>

                            </div>
                        </Paper>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
                        <div style={{ display: 'flex' }}>
                            <InputLabel sx={{ fontSize: '16px', mt: '15px' }}>Full Name:&nbsp; </InputLabel>
                            <TextField
                                required
                                value={contactName}
                                sx={{ width: '30px' }}
                                id="outlined-required"
                                label="Name"
                                helperText="Enter the Full Name"
                                size="small"
                                onChange={handleSave}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <InputLabel sx={{ fontSize: '16px', mt: '15px' }}>Mobile Number:&nbsp; </InputLabel>
                            <TextField
                                id="outlined-req"
                                label="Phone"
                                size="small"
                                defaultValue=""
                                onChange={(mob:any) => { HandleEMobile(mob.target.value); handleSave(); setaCMobile(mob.target.value) }}
                                error={eMobileError}
                                helperText={eMobileDesc}
                            />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap"  }}>
                        <div style={{ marginBottom: 40, marginLeft: 47, display: 'flex'  }}>
                            <InputLabel sx={{ fontSize: '16px', mt: '15px' }}>Role:&nbsp; </InputLabel>

                            <FormControl sx={{ display: 'flex', justifyContent: 'space-around', width: '22ch' }} error={eRoleError}>
                                <InputLabel id="demo-simple-select-error" >Select *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-error-label"
                                    id="demo-simple-select-error"
                                    defaultValue=""
                                    label="Select *"
                                    size="small"
                                    onOpen={() => {
                                        if (aCRole === "") {
                                            setERoleError(true)
                                            setERoleDesc("Please Select the Role")
                                        }
                                    }}
                                    onChange={(c:any) => { handleERoll(c.target.value); handleSave() }}
                                >
                                    {ClientRoles.map((option: any) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{eRoleDesc}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" style={{ marginBottom: "30px", marginRight: "50px" }} disabled={(eMobileError || eCostError || eRoleError || activeSave)} onClick={PostClientUser}>
                            Save
                        </Button>
                        <Button variant="contained" onClick={() => { setshowClientUser(false); setEMobileError(false); UaddClient(false) }} style={{ marginBottom: "30px" }}>
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Paper>
        </div>


    return (
        <>
            {clientDrop && <Paper elevation={3} sx={{ width: "95%", height: 'auto', alignContent: "center", margin: '2% auto'}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        height: 'auto'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>

                        <br></br>
                        <div style={{ textAlign: 'center' }} >
                            <div style={{ display: 'flex', justifyContent:'space-between' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '3% 4%' }}>
                                    <TextField
                                        id="outlined-select-Cost-Center"
                                        select
                                        defaultValue=""
                                        label="Select Client"
                                        size="small"
                                        helperText="Please select the Client"
                                        onChange={(e:any) => { setClientId(e.target.value); getClientContacts(e.target.value) }}
                                    >
                                        {CLIENTDATA.map((option: any) => (
                                            <MenuItem key={option.value} value={option.value} >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <Button variant="contained" startIcon={<AddIcon />} onClick={()=>navigateClient(fromUser)} style={{width:'40%',height:'45%',margin: '3%' }}  >
                                        New Client
                                    </Button>
                                </div>
                                <div >
                                    <Button onClick={() => { setShowTable(false); setClientDrop(false) }} startIcon={<CloseOutlinedIcon fontSize="small" />} >
                                    </Button>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                {showTable &&
                                    <>
                                        <Fab
                                            color="primary"
                                            aria-label="add"
                                            sx={{ position: 'relative', left: '40%' }}
                                            onClick={handleOpen}
                                        >
                                            <AddIcon/>
                                        </Fab>
                                        <div ref={ref}>
                                            <Box
                                                sx={{
                                                    height: 300,
                                                    width: '85%',
                                                    alignContent: 'center',
                                                    margin: '3px auto 20px',
                                                    paddingBottom: '25px',
                                                    '& .actions': {
                                                        color: 'text.secondary',
                                                    },
                                                    '& .textPrimary': {
                                                        color: 'text.primary',
                                                    },
                                                }}
                                            >
                                                <DataGrid
                                                    sx={{ alignContent: 'center' }}
                                                    rows={rows}
                                                    getRowHeight={() => 'auto'}
                                                    columns={columns}
                                                    editMode="row"
                                                />
                                            </Box>
                                        </div>
                                    </>
                                }
                            </div>
                            {showClientUser && <div ref={ref}>{addClientUser}</div>}
                        </div>
                    </div>
                </Box>
            </Paper>
            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box textAlign="center">
                        <Typography
                            variant="h4"
                            mb={4}
                            color="secondary"
                            textAlign="center"
                        >
                            Add Contact
                        </Typography>
                        <Typography variant="h6" component="span">
                            Name:&nbsp;
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            autoFocus
                            required
                            size='small'
                            error={errorName}
                            helperText={errorName ? "Empty Field!" : ''}
                            onChange={(e:any) => {
                                handleName(e.target.value)
                            }}
                        />
                        <br />
                        <br />
                        <Typography variant="h6" component="span">
                            Email:&nbsp;
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            required
                            size='small'
                            error={errorEmail}
                            helperText={errorEmail ? "Empty Field!" : ''}
                            onChange={(e:any) => {
                                handleEmail(e.target.value)
                            }}
                        />
                        <br />
                        <br />
                        <Typography variant="h6" component="span">
                            Mobile:&nbsp;
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Mobile"
                            variant="outlined"
                            required
                            size='small'
                            error={errorMobile}
                            helperText={errorMobile ? "Empty Field!" : ''}
                            onChange={(e:any) => {
                                handleMobile(e.target.value)
                            }}
                        />
                        <br />
                        <Typography variant="h6" component="p" sx={{ color: 'red' }}>
                        </Typography>
                        <br />
                        <Button
                            variant="contained"
                            onClick={(e: any) => {
                                sendContacts(e);
                                handleClose();
                            }}
                            sx={{ margin: '6px' }}
                        >
                            Save
                        </Button>
                        <span>
                            <Button variant="contained" onClick={handleClose}>
                                Cancel
                            </Button>
                        </span>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default AddClient;