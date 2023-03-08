import "./UserManagement.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from '@mui/icons-material/Search';
import AddForm from "./add-form/AddOEM";
import AddClient from "./add-form/AddClient";
import axiosInstance from "../../../config/axios.config";
import { environment } from "../../../environments/environment";
import {  FormHelperText ,Select,  Typography } from '@mui/material'
import { FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, Paper, Radio, RadioGroup, TextField, } from '@mui/material';
import {
  GridRowsProp, GridRowModesModel,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
  DataGrid,
  GridToolbarExport,
} from '@mui/x-data-grid';
import { useSnackAlert } from "../../../hooks/useToasterAlert";
import { handleError } from "../../utils/CommonFn";
import validator from 'validator';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const UserManagement = () => {
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const [selectEntity, setSelectEntity] = React.useState(false);
  const [oemForm, setOemForm] = React.useState(false);
  const [clientForm, setClientForm] = React.useState(false);
  const [userData, setUserData] = React.useState<any>([]);
  const [oneUserData, setOneUserData] = React.useState<any>({});
  const [costcenter, setCostCenter] = React.useState<any>([]);
  const [roles, setRoles] = React.useState<any>([]);
  const [searchBar, setSearchBar] = React.useState(false)
  const [editForm, setEditForm] = React.useState(false)
  const [eMobile, seteMobile] = React.useState("")
  const [eCostcenter, seteCostCenter] = React.useState("")
  const [eRoles, seteRoles] = React.useState("")
  const [updateStatus, setUpdateStatus] = React.useState<any>(false)
  const [entity, setEntity] = React.useState("")
  const ref: any = React.useRef(null);
  const [oemUpdateStatus, setOemUpdateStatus] = React.useState<any>(false)
  const [clientUpdateStatus, setClientUpdateStatus] = React.useState<any>(false)
  const [search, setSearch] = React.useState("")
  const [userDEntity, setUserDEntity] = React.useState<any>([])
  const [clientDName, setClientDName] = React.useState<any>([])
  const snackBar = useSnackAlert()
  const [eMobileError, setEMobileError] = React.useState<any>(false)
  const [eMobileDesc, setEMobileDesc] = React.useState("")
  const [eRoleError, setERoleError] = React.useState<any>(false)
  const [eRoleDesc, setERoleDesc] = React.useState("")
  const [eCostError, setECostError] = React.useState<any>(false)
  const [eCostDesc, setECostDesc] = React.useState("")
  const [activeSave, setActiveSave] = React.useState<any>(true)



  const getAppUsers = () => {
    axiosInstance.get(`${environment.baseApiURL}appuser`)
      .then(
        (data) => {
          if (data.data.code === 200) {
            setUserData(data.data.data)
          }
          else if (data.data.code === 204) {
            snackBar("warning", data.data.message)
          }
        }
      )
      .catch((err) => {
        handleError(err)
      });
  }

  React.useEffect(
    () => {
      getAppUsers()
    }, [updateStatus, oemUpdateStatus, clientUpdateStatus, searchBar]
  )

  React.useEffect(
    () => {

      axiosInstance.get(`${environment.baseApiURL}costcenter`)
        .then((data) => {
          if (data.data.code === 200) {
            setCostCenter(data.data.data)

          }
          else if (data.data.code === 204) {
            snackBar("warning", data.data.message)
          }
        }
        )
        .catch((err) => {
          handleError(err)
        });
      axiosInstance.get(`${environment.baseApiURL}role`)
        .then((data) => {

          if (data.data.code === 200) {
            setRoles(data.data.data)
          }
          else if (data.data.code === 204) {
            snackBar("warning", data.data.message)
          }
        }
        )
        .catch((err) => {
          handleError(err)
        });
    }, [editForm, oemForm, clientForm]
  )

  const constCenterName = costcenter.map((cost: any) => { return { value: cost.CostCenterID, label: cost.CostCenterName } })
  const Roles = roles.map((role: any) => { return { value: role.RoleID, label: role.RoleName } })

  function EditToolbar(){
    return (
      <GridToolbarContainer>
        <GridToolbarExport style={{ marginLeft: "20px" }} printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    );
  }

  const handleAddUser = () => {
    setEditForm(false)
    setSelectEntity(true)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behaviour: "Smooth" })
    }, 500);

  };

  const handelFilter = () => {
    setSearchBar(true);

    axiosInstance.get(`${environment.baseApiURL}usermaster`)
      .then((data) => {

        if (data.data.code === 200) {
          setUserDEntity(data.data.data)
        }
        else if (data.data.code === 204) {
          snackBar("warning", data.data.message)
        }
      }
      )
      .catch((err) => {
        handleError(err)
      });
    axiosInstance.get(`${environment.baseApiURL}clients/client/NameAndId`)
      .then((data) => {

        if (data.data.code === 200) {
          setClientDName(data.data.data)
        }
        else if (data.data.code === 204) {
          snackBar("warning", data.data.message)
        }
      }
      )
      .catch((err) => {
        handleError(err)
      })
  };

  const dClientName = clientDName.map((c: any) => { return { value: c.ClientName, label: c.ClientName } })

  const dUserEntity = userDEntity.map((e: any) => { return { value: e.UserEntity, label: e.UserEntity } })



  const handelSearch = (searchKey: any, searchValue: any) => {
    if (searchBar == true && searchValue.length > 0) {

      axiosInstance.get(`${environment.baseApiURL}appuser?${searchKey}=${searchValue}`)
        .then((data) => {
          if (data.data.code === 200) {
            setUserData(data.data.data)
          }
          else if (data.data.code === 204) {
            snackBar("warning", data.data.message)
          }
        }
        )
        .catch((err) => {
          handleError(err)
        });

    }
    else if (searchBar == false || searchValue.length == 0) {
      getAppUsers()
    }
  }

  const setForm = (value: any) => {
    if (value === "OEM") {
      setOemForm(true)
    } else if (value === "Client") {
      setOemForm(false)
      setClientForm(true)
    } else {
      setClientForm(false)
    }
  }


  const handleEditClick = (id: GridRowId) => () => {
    setSelectEntity(false)
    setOemForm(false)
    setClientForm(false)
    setEditForm(true)
    axiosInstance.get(`${environment.baseApiURL}appuser/${id}`)
      .then((data) => {

        if (data.data.code === 200) {
          setOneUserData(data.data.data[0])
        }
        else if (data.data.code === 204) {
          snackBar("warning", data.data.message)
        }
      }
      )
      .catch((err) => {
        handleError(err)
      });


    setTimeout(() => {
      ref.current?.scrollIntoView({ behaviour: "Smooth" })
    }, 500);
  };


  const handleEditSave = (id: string, e: any) => {
    e.preventDefault()
    let editeddata: any;
    if (oneUserData.UserEntity === "Client") {
      editeddata = {
        'RoleID': eRoles,
        'Mobile': eMobile,

      }
    } else {
      editeddata = {
        'RoleID': eRoles,
        'CostCenterID': eCostcenter,
        'Mobile': eMobile,

      }
    }
    setEditForm(false)
    axiosInstance
      .patch(`${environment.baseApiURL}appuser/${id}`, editeddata)
      .then(
        (result) => {
          if (result.data.code === 200) {
            snackBar("success", result.data.message)
            setUpdateStatus(true)

          }
          else if (result.data.code === 204) {
            snackBar("warning", result.data.message)
          }
        }
      )
      .catch(
        (err) => { handleError(err) }
      )
    setUpdateStatus(false)
  }

  const handelEditClose = () => {
    setEditForm(false)
    setEMobileError(false)
    setERoleError(false)
    setECostError(false)
    seteRoles("")
    seteCostCenter("")
    seteMobile("")

  }


  const handleLoginStatus = (id: any, Logstatus: any) => {

    const changestatus = Logstatus ? 1 : 0

    const changedData = {
      'IsLoginEnabled': changestatus
    }

    axiosInstance.patch(`${environment.baseApiURL}usermaster/${id}`, changedData)
      .then(
        (result) => {
          if (result.data.code === 200) {
            snackBar("success", result.data.message)
          }
          else if (result.data.code === 204) {
            snackBar("warning", result.data.message)
          }
        }
      )
      .catch(
        (err) => { handleError(err) }
      )
  }



  const rows: GridRowsProp = [
    ...userData.filter((user: any) => user.FullName.toLowerCase().startsWith(search.toLowerCase())).map((d: any) => {
      return {
        id: d.UserGuID,
        entity: d.UserEntity,
        fullName: d.FullName,
        email: d.UserPrincipleName,
        clientName: d.ClientName,
        role: d.RoleName,
        login: d.IsLoginEnabled
      }
    })
  ];

  const UaddOem = (status: any) => {
    setOemUpdateStatus(status)
  }

  const UaddClient = (status: any) => {
    setClientUpdateStatus(status)
    console.log(status);
    console.log(clientUpdateStatus);
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
      setERoleError(false)
      setERoleDesc("")
      if (oneUserData?.UserEntity === "OEM") {
        setECostError(true)
      }
    }
  }

  const handleECost = (r: any) => {
    if (r > 0) {
      seteCostCenter(r);
      setECostError(false)
      setECostDesc("")
    }
  }

  const handleSave = () => {
    if (((eCostError || eRoleError || eMobileError || eCostError) === true) || (eRoles == "" || eMobile == "")) {
      setActiveSave(true)
    }
    else {
      setActiveSave(false)
    }
  }
  React.useEffect(() => {
    handleSave()
  }, [eCostcenter, eRoles, eMobile])



  const columns: GridColumns = [

    { field: 'entity', headerName: 'Entity', width: 120 },
    { field: 'fullName', headerName: 'Full Name', width: 210 },
    { field: 'email', headerName: 'Email', width: 255 },
    { field: 'clientName', headerName: 'Client Name', width: 230 },
    { field: 'role', headerName: 'Role', width: 120 },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      cellClassName: 'actions',
      getActions: (params: any) => {


        return [
          <FormControlLabel
            value="bottom"
            sx={{ paddingRight: '20px' }}
            control={<Switch color="primary" defaultChecked={params.row.login} onChange={(e) => handleLoginStatus(params.id, e.target.checked)} />}
            label="Login"
            labelPlacement="bottom"
          />,

          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(params.id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const showEditForm =
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
          <div style={{ padding: '2px 4px', display: 'flex', justifyContent: 'center', width: 'auto', height: '100px', margin: '20px auto' }}>
            <Paper

              component="form"
              sx={{ p: '2px 40px', display: 'flex', width: 'auto', height: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
                <InputLabel sx={{ fontSize: '18px', mt: '20px' }}>Email:&nbsp;</InputLabel>
                <Typography variant="h6" sx={{ mt: '17px' }} >{oneUserData?.UserPrincipleName}</Typography>
              </div>
            </Paper>
          </div>
          <br></br>
          <br></br>
          <div style={{ display: 'block', fontSize: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
              <div style={{ display: 'flex' }}>
                <InputLabel sx={{ fontSize: '18px', mt: '15px' }}>Full Name:&nbsp; </InputLabel>
                <FormControl>
                  <TextField
                    id="outlined-read-only-input"
                    value={oneUserData?.FullName}
                    size="small"
                  />
                </FormControl>
              </div>
              <div style={{ display: 'flex' }}>
                <InputLabel sx={{ fontSize: '18px', mt: '15px'  }}>Mobile Number:&nbsp; </InputLabel>
                <FormControl>
                  <TextField
                    id="filled-multiline-static"
                    defaultValue={oneUserData?.Mobile}
                    onChange={(mob) => { HandleEMobile(mob.target.value); handleSave(); seteMobile(mob.target.value) }}
                    error={eMobileError}
                    helperText={eMobileDesc}
                    size="small"

                  />
                </FormControl>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
              <div style={{ marginBottom: 40, marginLeft: 47, display: 'flex'  }}>
                <InputLabel sx={{ fontSize: '18px', mt: '15px'  }}>Role:&nbsp; </InputLabel>
                <FormControl sx={{ display: 'flex', justifyContent: 'space-around', width: '25ch' }} error={eRoleError}>
                  <InputLabel id="demo-simple-select-error" >Select *</InputLabel>
                  <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    defaultValue=""
                    label="Select *"
                    size="small"
                    onOpen={() => {
                      if (eRoles === "") {
                        setERoleError(true)
                        setERoleDesc("Please Select the Role")
                      }
                    }}

                    onChange={(c) => { handleSave(); seteRoles(c.target.value); handleERoll(c.target.value) }}
                  >
                    <MenuItem disabled value="">
                      <em>{oneUserData.RoleName}</em>
                    </MenuItem>
                    {Roles.map((option: any) => (
                      <MenuItem key={option.value} value={option.value + ""}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{eRoleDesc}</FormHelperText>
                </FormControl>
              </div>
              <div >
                {(() => {

                  var divDesign;

                  if (oneUserData?.UserEntity === "OEM") {
                    divDesign = <div style={{ marginBottom: 40, marginLeft: 40, display: 'flex' }}>
                      <InputLabel sx={{ fontSize: '18px', mt: '15px' }}>Cost Center:&nbsp; </InputLabel>

                      <FormControl sx={{ display: 'flex', justifyContent: 'space-around', width: '25ch' }} error={eCostError}>
                        <InputLabel id="demo-simple-select-error" >Select *</InputLabel>
                        <Select
                          labelId="demo-simple-select-error-label"
                          id="demo-simple-select-error"
                          label="Select *"
                          size="small"
                          onOpen={() => {
                            if (eCostcenter === "") {
                              setECostError(true)
                              setECostDesc("Please Select the Cost Center")
                            }
                            else if (eCostcenter === "0") {
                              setECostError(false)
                              setECostDesc("")
                            }
                          }}
                          onClose={() => setActiveSave(false)}
                          onChange={(c) => { handleSave(); handleECost(c.target.value) }}
                        >
                          <MenuItem disabled value="">
                            <em>{oneUserData.CostCenterName}</em>
                          </MenuItem>
                          {constCenterName.map((option: any) => (
                            <MenuItem key={option.value + ""} value={option.value + ""}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText>{eCostDesc}</FormHelperText>
                      </FormControl>
                    </div>
                    return divDesign
                  }

                })()}
              </div>


            </div>
          </div>
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <Button variant="contained" style={{ marginBottom: "50px", marginRight: "65px" }} disabled={(eMobileError || eCostError || eRoleError || activeSave)} onClick={(e) => handleEditSave(oneUserData?.UserGuID.toLowerCase(), e)}>
            Update
          </Button>
          <Button variant="contained" onClick={() => { handelEditClose() }} style={{ marginBottom: "50px" }}>
            Cancel
          </Button>
        </div>
      </Box>
    </Paper>
  </div >



  return (
    <>
      <div className="common-top" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" startIcon={<LibraryAddIcon />} style={{ position: "relative", left: '30px' }} onClick={handleAddUser}>
          Add User
        </Button>
        <Button variant="outlined" onClick={handelFilter} startIcon={<TuneSharpIcon />} style={{ position: "relative", right: '30px' }}>
          Filter
        </Button>
      </div>
      {searchBar &&
        <div >
          <Paper elevation={3} sx={{ width: '95%', display: "flex", justifyContent: "space-between", margin: "20px auto" }} >

            <div style={{ display: "flex", width: '50%' }}>

              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <TextField

                className="drop"
                fullWidth

                label="Search User by Full Name..."
                id="standard-basic"
                onChange={(e) => {
                  handelSearch("fullName", e.target.value);
                }}
              />



            </div>
            <Paper sx={{ width: '50%', display:'flex', justifyContent: "space-evenly" }}>

              <div style={{ position: "relative", top: 10, left: 10 }} >
                <TextField
                  select
                  className="drop"
                  sx={{ width: '130px' }}
                  label="User Entity"
                  size="small"
                  onChange={(u: any) => { handelSearch("UserEntity", u.target.value) }}
                >
                  {dUserEntity.map((option: any) => (
                    <MenuItem key="UserEntity" value={option.label + ""}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div style={{ position: "relative", top: 10, left: 10 }}  >
                <TextField
                  select
                  label="Client Name"
                  className="drop"
                  sx={{ width: '130px' }}
                  size="small"
                  onChange={(c: any) => { handelSearch("ClientName", c.target.value) }}
                >
                  {dClientName.map((option: any) => (
                    <MenuItem key="ClientName" value={option.label + ""}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div style={{ position: "relative", top: 10, left: 10, right: 40 }}  >
                <TextField
                  select
                  label="Role"
                  className="drop"
                  sx={{ width: '130px' }}
                  size="small"
                  onChange={(r: any) => { handelSearch("RoleName", r.target.value) }}
                >
                  {Roles.map((option: any) => (
                    <MenuItem key="RoleName" value={option.label + ""}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div style={{ position: "relative", top: 15, left: 20, right: 60 }}>
                <Button onClick={() => setSearchBar(false)} startIcon={<CloseOutlinedIcon fontSize="small" />} /*style={{ width:'20px',padding:'5px 2px 5px 5px'}}*/>
                </Button>
              </div>
            </Paper>
          </Paper>
        </div>
      }
      <Paper elevation={3} sx={{ width: "95%", height: "400", alignContent: "center", margin: '10px auto' }}>
        <Box
          sx={{
            height: 500,
            width: '100%',
            alignContent: 'center',
            '& .actions': {
              color: 'text.secondary',
            },
            '& .textPrimary': {
              color: 'text.primary',
            },
          }}
        >

          <DataGrid
            rows={rows}
            getRowHeight={() => 'auto'}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            components={{
              Toolbar: EditToolbar
            }}
          />
        </Box>
      </Paper>

      {editForm && <div ref={ref}>{showEditForm} </div>}
      <div style={{ width: '95%', position: "relative", top: 10, left: 30 }}>
        {selectEntity &&
          <Paper elevation={3} sx={{ width: "100%", height: "40", padding: '30px', display: 'flex', justifyContent: "space-between" }} >
            <div>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e, val) => setForm(val)}
                  sx={{ display: 'flex', justifyContent: 'flex-start', margin: '5px 10px' }}
                >
                  <div ref={ref} style={{ display: "flex", justifyContent: "flex-start" }}>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ margin: '10px 20px 10px 10px' }}>Select Entity:&nbsp;&nbsp;&nbsp;&nbsp;
                    </FormLabel>
                    <FormControlLabel value="OEM" control={<Radio onChange={(e) => {
                      setEntity(e.target.value); setTimeout(() => {
                        ref.current?.scrollIntoView({ behaviour: "Smooth" })
                      }, 500)
                    }} />} sx={{ marginRight: '30px' }} label="OEM" />
                    <FormControlLabel value="Client" control={<Radio onChange={(e) => {
                      setEntity(e.target.value); setTimeout(() => {
                        ref.current?.scrollIntoView({ behaviour: "Smooth" })
                      }, 500)
                    }} />} label="Client" />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{ position: 'relative', left: '30px', top: '0px' }}>
              <Button onClick={() => setSelectEntity(false)} startIcon={<CloseOutlinedIcon fontSize="small" />} /*style={{ width:'20px',padding:'5px 2px 5px 5px'}}*/>
              </Button>
            </div>
          </Paper>

        }
      </div>
      {oemForm ? <div ref={ref}>  <AddForm costcenters={costcenter} roles={roles} entity={entity} UaddOem={UaddOem} getAppUsers={getAppUsers} /></div> : clientForm ? <div ref={ref}><AddClient roles={roles} entity={entity} UaddClient={UaddClient} getAppUsers={getAppUsers} /></div> : <div></div>}
    </>
  );
}

export default UserManagement;

