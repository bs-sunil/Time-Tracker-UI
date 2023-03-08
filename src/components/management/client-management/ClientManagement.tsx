import "./ClientManagement.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axios.config";
import { environment } from "../../../environments/environment";
import "./ClientManagement.css";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowsProp,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  dividerClasses,
  Input,
  InputAdornment,
  Modal,
  Paper,
  TableCell,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import PublishIcon from "@mui/icons-material/Publish";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { padding } from "@mui/system";
import { ClientModel } from "../../../models/client-model";
import React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import Fab from "@mui/material/Fab";
import { useSnackAlert } from "../../../hooks/useToasterAlert";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ClientManagement = () => {
  let ContactData: any;
  let eDataContact: any;
  let ClientData: any;
  const { state } = useLocation();
  const navigate: NavigateFunction = useNavigate();
  type dataStateType = ClientModel[];
  const [dataState, setDataState] = useState<dataStateType>([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAddClient, setShowAddClient] = useState(false);
  const [showEditClient, setShowEditClient] = useState(false);
  const [showViewClient, setShowViewClient] = useState(false);
  const [showEditContactModel, setShowEditContactModel] = useState(false);
  const [ClientName, setClientName] = useState<string>("");
  const [ClientDescription, setClientDescription] = useState<string>("");
  const [Name, setName] = useState<string>();
  const [Email, setEmail] = useState<any>();
  const [Mobile, setMobile] = useState<string>();
  const [iterableArray, setiterableArray] = useState<any>([]);
  const [clientDataState, setClientDataState] = useState<any>([]);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchInput, SetSearchInput] = useState<string>("");
  const [editdataState, setEditDataState] = useState<any>([]);
  const [editedContactState, setEditedContactState] = useState<any>([]);
  const [errorName, SetErrorName] = useState(false);
  const [errorClientName, SetErrorClientName] = useState(false);
  const [errorEmail, SetErrorEmail] = useState(false);
  const [errorMobile, SetErrorMobile] = useState(false);
  const [errorDesc, SetErrorDesc] = useState(false);
  const [ClientGuIDState, setClientGuIDState] = useState("");
  const [postDataState, setPostDataState] = useState<any>([]);
  const [updatedDataState, setUpdatedDataState] = useState<any>([]);
  const [contactDataState, setContactDataState] = useState<any>([]);
  const [fromUser, setFromUser] = useState<any>(false);
  const [contactERow, setContactERow] = useState<any>([]);
  useEffect(() => {
    if (state === true) {
      // const successAction = successActionCreator(state)
      // dispatchFnRef(successAction)
      setFromUser(true);
    }
  }, []);
  function handleName(name: string) {
    name == "" ? SetErrorName(true) : SetErrorName(false);
    setName(name);
  }
  function handleClientName(clientname: string) {
    clientname == "" ? SetErrorClientName(true) : SetErrorClientName(false);
    setClientName(clientname);
  }
  function handleEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email || email == "") {
      SetErrorEmail(true);
    } else if (!regex.test(email)) {
      SetErrorEmail(true);
    } else {
      SetErrorEmail(false);
    }
    setEmail(email);
  }
  function handleMobile(mobile: string) {
    const mobileRegex = /^[0]?[789]\d{9}$/;
    if (!mobile) {
      SetErrorMobile(true);
    } else if (!mobileRegex.test(mobile)) {
      SetErrorMobile(true);
    } else {
      SetErrorMobile(false);
    }
    setMobile(mobile);
  }
  function handelDescription(description: string) {
    description == "" ? SetErrorDesc(true) : SetErrorDesc(false);
    setClientDescription(description);
  }
  const snackbar = useSnackAlert();
  useEffect(() => {
    axiosInstance
      .get(`${environment.baseApiURL}clients`)
      .then((result) => {
        if (result.status === 200) {
          const data1 = result.data.data;
          setDataState([...data1]);
          console.log(data1);
          console.log(data1[0].ClientGuID);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postDataState, updatedDataState]);
  React.useEffect(() => {}, [dataState, editdataState]);
  const handleEditClient = (idVal: any) => {
    const ClientGuID = idVal;
    setClientGuIDState(idVal);
    showEditClientHandler();
    axiosInstance
      .get(`${environment.baseApiURL}clients/${ClientGuID}`)
      .then((result) => {
        if (result.status === 200) {
          const editdata = result.data.data;
          console.log(editdata);
          setClientName(editdata[0].ClientName);
          setClientDescription(editdata[0].ClientDescription);
        }
      });
    axiosInstance
      .get(`${environment.baseApiURL}clients/contacts/client/${ClientGuID}`)
      .then((result) => {
        if (result.status === 200) {
          const editContactData = result.data.data;
          console.log(editContactData);
          setEditedContactState([...editContactData]);
          // snackbar('success',result.data.message)
        }
      });
  };
  const handleViewClient = (idVal: any) => {
    const ClientGuID = idVal;
    console.log(ClientGuID);
    console.log("view is clicked");
    showViewClientHandler();
    axiosInstance
      .get(`${environment.baseApiURL}clients/${ClientGuID}`)
      .then((result) => {
        if (result.status === 200) {
          const editdata = result.data.data;
          console.log(editdata);
          setClientName(editdata[0].ClientName);
          setClientDescription(editdata[0].ClientDescription);
        }
      });
    axiosInstance
      .get(`${environment.baseApiURL}clients/contacts/client/${ClientGuID}`)
      .then((result) => {
        if (result.status === 200) {
          const editContactData = result.data.data;
          console.log(editContactData);
          setEditedContactState([...editContactData]);
        }
      });
  };
  const searchClientHandler = () => {
    console.log("search handle is called");
    axiosInstance
      .get(`${environment.baseApiURL}clients?ClientName=${searchInput}`)
      .then((result) => {
        if (result.status === 200) {
          const searchedClient = result.data.data;
          setDataState([...searchedClient]);
        }
      });
  };
  const rows: GridRowsProp = [
    ...dataState.map((data) => {
      return {
        id: data.ClientGuID,
        ClientName: data.ClientName,
        ClientDescription: data.ClientDescription,
      };
    }),
  ];
  const contactRows: GridRowsProp = [
    ...iterableArray.map((data: any) => {
      console.log(data);
      return {
        id: `${Math.random()}`,
        FullName: `${data.FullName}`,
        UserPrincipleName: `${data.UserPrincipleName}`,
        Mobile: `${data.Mobile}`,
      };
    }),
  ];
  const editedContactRows: GridRowsProp = [
    ...editedContactState.map((data: any) => {
      if (data.ContactGuID) {
        return {
          id: `${data.ContactGuID}`,
          ContactGuID: `${data.ContactGuID}`,
          FullName: `${data.FullName}`,
          UserPrincipleName: `${data.UserPrincipleName}`,
          Mobile: `${data.Mobile}`,
        };
      } else {
        return {
          id: `${Math.random()}`,
          FullName: `${data.FullName}`,
          UserPrincipleName: `${data.UserPrincipleName}`,
          Mobile: `${data.Mobile}`,
        };
      }
    }),
  ];
  const columns: GridColumns = [
    {
      field: "ClientName",
      headerName: "ClientName",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ClientDescription",
      headerName: "ClientDescription",
      width: 700,
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
      getActions: ({ id }) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={()=>handleEditClick(id)}
            onClick={() => handleEditClient(id)}
            color="secondary"
          />,
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View"
            className="textPrimary"
            onClick={() => handleViewClient(id)}
            color="secondary"
          />,
        ];
      },
    },
  ];
  const contactcolumns: GridColumns = [
    {
      field: "FullName",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "UserPrincipleName",
      headerName: "Email",
      width: 300,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "Mobile",
      headerName: "Mobile",
      width: 200,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 140,
      cellClassName: "actions",
      getActions: (params) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={()=>handleEditClick(id)}
            onClick={() => handleEditContact(params.row)}
            color="secondary"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            size="large"
            label="Delete"
            className="textPrimary"
            // onClick={()=>handleEditClick(id)}
            onClick={() => handledelete(params.row)}
            color="secondary"
          />,
        ];
      },
    },
  ];
  const viewcolumns: GridColumns = [
    {
      field: "FullName",
      headerName: "Name",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "UserPrincipleName",
      headerName: "Email",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Mobile",
      headerName: "Mobile",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
  ];
  const handelFilter = () => {
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };
  const addClientHandler = () => {
    // showAddClient ? setShowAddClient(false) : setShowAddClient(true);
    setShowAddClient(true);
    setShowEditClient(false);
    setShowViewClient(false);
  };
  const showEditClientHandler = (): any => {
    // showEditClient? setShowEditClient(false):setShowEditClient(true);
    setShowAddClient(false);
    setShowEditClient(true);
    setShowViewClient(false);
  };
  const showViewClientHandler = (): any => {
    setShowAddClient(false);
    setShowEditClient(false);
    setShowViewClient(true);
  };
  const saveHandler = () => {
    if (!Name || Name == "") {
      SetErrorName(true);
      handleOpen();
    } else if (Email == "" || !Email) {
      SetErrorEmail(true);
      handleOpen();
    } else if (Mobile == "" || !Mobile) {
      SetErrorMobile(true);
      handleOpen();
    } else {
      ContactData = {
        ContactGuID: null,
        FullName: Name,
        UserPrincipleName: Email,
        Mobile: Mobile,
      };
      console.log(ContactData);
      eDataContact = {
        ContactGuID: null,
        UserPrincipleName: Email,
        FullName: Name,
        Mobile: Mobile,
      };
      // setFormErrors(
      //   validate({ ClientName, ClientDescription, Name, Email, Mobile })
      // );
      setiterableArray([ContactData, ...iterableArray]);
      setEditedContactState([eDataContact, ...editedContactState]);
      setContactDataState([...editedContactState, eDataContact]);
      console.log(iterableArray);
      console.log(editedContactState);
      SetErrorName(false);
      SetErrorEmail(false);
      SetErrorMobile(false);
      setName("");
      setEmail("");
      setMobile("");
    }
  };
  const saveHandlerForEdit = async () => {
    if (!Name || Name == "") {
      SetErrorName(true);
      handleEopen();
    } else if (Email == "" || !Email) {
      SetErrorEmail(true);
      handleEopen();
    } else if (Mobile == "" || !Mobile) {
      SetErrorMobile(true);
      handleEopen();
    } else {
      const ContactEdited = {
        ContactGuID: contactERow.ContactGuID,
        UserPrincipleName: Email,
        FullName: Name,
        Mobile: Mobile,
      };
      setContactERow(ContactEdited);
      console.log(contactERow);
      let arr = editedContactState.filter((e: any) => {
        return e.ContactGuID != contactERow.ContactGuID;
      });
      debugger;
      // setContactERow(ContactEdited)
      setEditedContactState([...arr, ContactEdited]);
      setContactDataState([...arr, ContactEdited]);
      SetErrorName(false);
      SetErrorEmail(false);
      SetErrorMobile(false);
      setName("");
      setEmail("");
      setMobile("");
    }
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(Name, Email, Mobile);
  //   }
  // }, [formErrors]);
  // useEffect(() => {}, [clientDataState]);
  // const validate = (values: {
  //   Mobile: any;
  //   Name: any;
  //   ClientDescription: any;
  //   ClientName: string;
  //   Email: any | any[];
  // }) => {
  //   const errors: any = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const Mobile_REGEX = new RegExp(/"^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gim);
  //   if (!values.ClientName) {
  //     errors.ClientName = 'ClientName is required*';
  //   }
  //   if (!values.ClientDescription) {
  //     errors.ClientDescription = 'ClientDescription is required*';
  //   }
  //   if (!values.Name) {
  //     errors.Name = 'Name is required*';
  //   }
  //   if (!values.Email) {
  //     errors.Email = 'Email is required*';
  //   } else if (!regex.test(values.Email)) {
  //     errors.Email = 'This is not a valid Email format';
  //   }
  //   if (!values.Mobile) {
  //     errors.Mobile = 'Mobile is required*';
  //     // } else if(!Mobile_REGEX.test(values.Mobile)){
  //     //   errors.Mobile = 'Invalid Mobile Number. Please try again.';
  //     // } else{
  //     //   errors.Mobile = 'valid Mobile Number.';
  //   }
  //   return errors;
  // };
  const submitHandler = () => {
    if (!ClientName || ClientName == "") {
      SetErrorClientName(true);
    } else if (!ClientDescription || ClientDescription == "") {
      SetErrorDesc(true);
    } else {
      const ClientData = {
        ClientName: ClientName,
        ClientDescription: ClientDescription,
      };
      const ClientDataDetails = [
        {
          ClientDetails: {
            ClientName: ClientName,
            ClientDescription: ClientDescription,
          },
          ContactDetails: [
            ...iterableArray.map((d: any) => {
              return {
                UserPrincipleName: `${d.UserPrincipleName}`,
                FullName: `${d.FullName}`,
                Mobile: `${d.Mobile}`,
              };
            }),
          ],
        },
      ];
      console.log(ClientData);
      setClientDataState([ClientData]);
      axiosInstance
        .post(`${environment.baseApiURL}clients`, ClientDataDetails)
        .then((result) => {
          if (result.status === 200) {
            console.log(result);
            setPostDataState([ClientDataDetails]);
            setShowAddClient(false);
            snackbar("success", result.data.message);
            if (fromUser) {
              navigate("/management/user");
              setFromUser(false);
            }
          } else {
            snackbar("warning", result.data.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const closeHandler = () => {
    setShowAddClient(false);
    if (fromUser) {
      navigate("/management/user");
      setFromUser(false);
    }
  };
  const editSubmitHandler = () => {
    const ClientData = {
      ClientName: ClientName,
      ClientDescription: ClientDescription,
    };
    console.log(contactDataState);
    console.log(editedContactState);
    setEditedContactState([...editedContactState]);
    console.log(editedContactState);
    // console.log(editedContactState[1].ClientGuID);
    // const Cid = editedContactState.map((d: any) => {
    //   return d.ClientGuID;
    // });
    // console.log(Cid);
    // const ClientGuID = Cid[Cid.length - 1];
    // console.log(ClientGuID);
    const ClientGuID = ClientGuIDState;
    const ClientDataDetails = [
      {
        ClientDetails: {
          ClientName: ClientName,
          ClientDescription: ClientDescription,
        },
        ContactDetails: [...contactDataState],
      },
    ];
    console.log(ClientDataDetails);
    setEditDataState([ClientData]);
    console.log(ClientGuID);
    console.log(contactDataState);
    axiosInstance
      .patch(
        `${environment.baseApiURL}clients/${ClientGuID}/contacts`,
        ClientDataDetails
      )
      .then((result) => {
        if (result.status === 200) {
          console.log(result);
          setUpdatedDataState([ClientDataDetails]);
          setShowEditClient(false);
          snackbar("success", result.data.message);
        } else {
          snackbar("warning", result.data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid blue",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [eopen, seteOpen] = React.useState(false);
  const handleEopen = () => seteOpen(true);
  const handleEClose = () => seteOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditContact = (contactrow: any) => {
    console.log(contactrow);
    setContactERow(contactrow);
    handleEopen();
  };
  const handledelete = (row: any) => {
    if (editedContactState) {
      debugger;
      const contacts = editedContactRows.filter((contact: any) => {
        return contact !== row;
      });
      // console.log(contacts);
      console.log(row);
      row["Deleted"] = "";
      setContactDataState([...contacts, row]);
      console.log(contactDataState);
      setEditedContactState([...contacts]);
    }
    const contacts = contactRows.filter((contact: any) => {
      return contact !== row;
    });
    setiterableArray([...contacts]);
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport style={{ marginLeft: "20px" }} />
      </GridToolbarContainer>
    );
  }
  return (
    <div className="common-top">
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
        color="primary"
      >
        Client Management
      </Typography>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "4%",
          }}
        >
          <Button
            variant="outlined"
            onClick={handelFilter}
            startIcon={<TuneIcon />}
            color="primary"
            sx={{ marginRight: "1%" }}
          >
            Filter Client
          </Button>
          <Button
            variant="contained"
            onClick={addClientHandler}
            startIcon={<LibraryAddIcon />}
          >
            New Client
          </Button>
        </div>
        {showSearchBar && (
          <div style={{ margin: "1% 0% 0 7%", width: "90%" }}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                label="Search Client Name"
                id="fullWidth"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  SetSearchInput(e.target.value);
                  searchClientHandler();
                }}
                autoFocus
              />
            </Paper>
            <Button
              startIcon={<DisabledByDefaultIcon fontSize="large" />}
              sx={{ margin: "-8% 0 0 100%" }}
              onClick={() => {
                setShowSearchBar(false);
              }}
            ></Button>
          </div>
        )}
        <div style={{ height: 350, width: "95%", margin: "1% 2% 2% 4%" }}>
          <Paper elevation={5}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={rows}
                components={{ Toolbar: CustomToolbar }}
              />
            </div>
          </Paper>
        </div>
        {showAddClient && (
          <Box sx={{ margin: "auto", p: "50px" }}>
            <Paper
              elevation={8}
              sx={{
                width: "100%",
                height: "100%",
                alignContent: "center",
                margin: "auto auto",
                border: "2px solid skyblue",
                p: "50px",
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  width: "100%",
                  height: "70%",
                  alignContent: "center",
                  margin: "auto auto",
                  border: "2px solid skyblue",
                }}
              >
                <Box
                  sx={{
                    height: 500,
                    width: "100%",
                    alignContent: "center",
                    "&.actions": { color: "text.secondary" },
                    "&.textPrimary": { color: "text.primary" },
                  }}
                >
                  <Typography
                    variant="h4"
                    color="secondary"
                    textAlign="center"
                    marginTop="1%"
                  >
                    Add Client
                  </Typography>
                  <div style={{}}>
                    <div style={{}}>
                      <Typography variant="h6" sx={{ margin: "6% 2% 2% 10%" }}>
                        <span style={{ color: "red" }}> *</span> Client Name:
                      </Typography>
                      <br />
                      <br /> <br />
                      <div
                        style={{
                          margin: "-8% 2% 2% 10%",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Client Name"
                          variant="outlined"
                          autoFocus
                          error={errorClientName}
                          helperText={errorClientName ? "Empty Field!" : ""}
                          onChange={(e) => {
                            handleClientName(e.target.value);
                            // setClientName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ margin: "4% 2% 2% 10%" }}>
                      <Typography variant="h6" component="span">
                        <span style={{ color: "red" }}> *</span>Client
                        Description:
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": {
                            m: 5,
                            width: "100%",
                            margin: "4% 4% 0 -5%",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div
                          style={{
                            margin: "-8% 2% 2% 4%",
                          }}
                        >
                          <TextField
                            id="outlined-multiline-static"
                            label="Client Description"
                            multiline
                            rows={4}
                            required
                            error={errorDesc}
                            helperText={errorDesc ? "Empty Field!" : ""}
                            onChange={(e) => {
                              handelDescription(e.target.value);
                              // setClientDescription(e.target.value);
                            }}
                          />
                        </div>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Paper>
            </Paper>
            <br />
            <br />
            <div
              style={{
                height: 350,
                width: "75%",
                marginLeft: "15%",
              }}
            >
              <Fab
                color="primary"
                aria-label="add"
                sx={{ margin: "0 0 0 100%" }}
                onClick={handleOpen}
              >
                <AddIcon />
              </Fab>
              <Paper
                elevation={8}
                sx={{
                  width: "100%",
                  height: "104%",
                  alignContent: "center",
                  margin: "auto auto",
                  border: "2px solid skyblue",
                }}
              >
                <Typography
                  variant="h4"
                  color="secondary"
                  textAlign="center"
                  marginTop="2%"
                >
                  Add Contacts
                </Typography>
                <div
                  style={{
                    height: 300,
                    width: "100%",
                  }}
                >
                  <DataGrid columns={contactcolumns} rows={contactRows} />
                </div>
              </Paper>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1%",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={submitHandler}
                // sx={{ margin: '2%' }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                // sx={{ margin: '2%' }}
                onClick={() => {
                  closeHandler();
                }}
              >
                Cancel
              </Button>
            </div>
          </Box>
        )}
        {showEditClient && (
          <Box sx={{ margin: "auto", p: "50px" }}>
            <Paper
              elevation={8}
              sx={{
                width: "100%",
                height: "100%",
                alignContent: "center",
                margin: "auto auto",
                border: "2px solid skyblue",
                p: "50px",
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  width: "100%",
                  height: "70%",
                  alignContent: "center",
                  margin: "auto auto",
                  border: "2px solid skyblue",
                }}
              >
                <Box
                  sx={{
                    height: 500,
                    width: "100%",
                    alignContent: "center",
                    "&.actions": { color: "text.secondary" },
                    "&.textPrimary": { color: "text.primary" },
                  }}
                >
                  <Typography
                    variant="h4"
                    color="secondary"
                    textAlign="center"
                    marginTop="1%"
                  >
                    Edit Client
                  </Typography>
                  <div style={{}}>
                    <div style={{}}>
                      <Typography variant="h6" sx={{ margin: "6% 2% 2% 10%" }}>
                        <span style={{ color: "red" }}> *</span>Client Name:
                      </Typography>
                      <br />
                      <br /> <br />
                      <div
                        style={{
                          margin: "-8% 2% 2% 10%",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Client Name"
                          variant="outlined"
                          autoFocus
                          onChange={(e) => {
                            setClientName(e.target.value);
                          }}
                          value={ClientName}
                        />
                      </div>
                    </div>
                    <div style={{ margin: "4% 2% 2% 10%" }}>
                      <Typography variant="h6" component="span">
                        <span style={{ color: "red" }}> *</span> Client
                        Description:
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": {
                            m: 5,
                            width: "100%",
                            margin: "4% 4% 0 -5%",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div
                          style={{
                            margin: "-8% 2% 2% 4%",
                          }}
                        >
                          <TextField
                            id="outlined-multiline-static"
                            label="Client Description"
                            multiline
                            rows={4}
                            onChange={(e) => {
                              setClientDescription(e.target.value);
                            }}
                            value={ClientDescription}
                          />
                        </div>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Paper>
            </Paper>
            <br />
            <br />
            <div
              style={{
                height: 350,
                width: "75%",
                marginLeft: "15%",
              }}
            >
              <Fab
                color="primary"
                aria-label="add"
                sx={{ margin: "0 0 0 100%" }}
                onClick={handleOpen}
              >
                <AddIcon />
              </Fab>
              <Paper
                elevation={8}
                sx={{
                  width: "100%",
                  height: "104%",
                  alignContent: "center",
                  margin: "auto auto",
                  border: "2px solid skyblue",
                }}
              >
                <Typography
                  variant="h4"
                  color="secondary"
                  textAlign="center"
                  marginTop="2%"
                >
                  Edit Contacts
                </Typography>
                <div
                  style={{
                    height: 300,
                    width: "100%",
                  }}
                >
                  <DataGrid
                    columns={contactcolumns}
                    rows={editedContactRows}
                    editMode="row"
                    experimentalFeatures={{ newEditingApi: true }}
                  />
                </div>
              </Paper>
            </div>
            <div
              style={{
                display: "flex",
                margin: "7% 0 0 45%",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={editSubmitHandler}
                sx={{ margin: "2%" }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ margin: "2%" }}
                onClick={() => {
                  setShowEditClient(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Box>
        )}
        {showViewClient && (
          <Box sx={{ margin: "auto", p: "50px" }}>
            <Paper
              elevation={8}
              sx={{
                width: "100%",
                height: "100%",
                alignContent: "center",
                margin: "auto auto",
                border: "2px solid skyblue",
                p: "50px",
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  width: "100%",
                  height: "70%",
                  alignContent: "center",
                  margin: "auto auto",
                  border: "2px solid skyblue",
                }}
              >
                <Box
                  sx={{
                    height: 450,
                    width: "100%",
                    alignContent: "center",
                    "&.actions": { color: "text.secondary" },
                    "&.textPrimary": { color: "text.primary" },
                  }}
                >
                  <Typography variant="h4" color="secondary" textAlign="center">
                    Client Details
                  </Typography>
                  <div style={{ marginTop: "7%" }}>
                    <div
                      style={{
                        width: "50%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          paddingRight: "2%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="span"
                          color="primary"
                        >
                          Client Name:
                        </Typography>
                        <Typography variant="h6" component="span">
                          {ClientName}
                        </Typography>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          component="span"
                          color="primary"
                        >
                          Client Description:
                        </Typography>
                        <Typography variant="h6">
                          &ensp;{ClientDescription}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Box>
              </Paper>
            </Paper>
            <br />
            <br />
            <div>
              <div
                style={{
                  height: 350,
                  width: "80%",
                  marginLeft: "10%",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    width: "100%",
                    height: "100%",
                    alignContent: "center",
                    margin: "auto auto",
                    border: "2px solid skyblue",
                  }}
                >
                  <Typography
                    variant="h4"
                    color="secondary"
                    textAlign="center"
                    marginTop="2%"
                  >
                    Contact Details
                  </Typography>
                  <div
                    style={{
                      height: 300,
                      width: "100%",
                    }}
                  >
                    <DataGrid columns={viewcolumns} rows={editedContactRows} />
                  </div>
                </Paper>
              </div>
            </div>
          </Box>
        )}
      </div>
      <div>
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
                <span style={{ color: "red" }}> *</span>Name:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                autoFocus
                required
                error={errorName}
                helperText={errorName ? "Empty Field!" : ""}
                onChange={(e) => {
                  // setName(e.target.value);
                  handleName(e.target.value);
                }}
              />
              <br />
              <br />
              <Typography variant="h6" component="span">
                <span style={{ color: "red" }}> *</span>Email:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                error={errorEmail}
                helperText={
                  errorEmail ? "Empty Field! or Not Valid Email Format" : ""
                }
                onChange={(e) => {
                  // setEmail(e.target.value);
                  handleEmail(e.target.value);
                  // ContactData['Email'] = (e.target.value)
                }}
              />
              <br />
              <br />
              <Typography variant="h6" component="span">
                <span style={{ color: "red" }}> *</span> Mobile:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                required
                error={errorMobile}
                helperText={errorMobile ? "Empty Field! or Not Valid" : ""}
                onChange={(e) => {
                  // setMobile(e.target.value);
                  handleMobile(e.target.value);
                  // ContactData['Mobile'] = (e.target.value)
                }}
              />
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  saveHandler();
                  if (!Name || !Email || !Mobile) {
                    handleOpen();
                  } else {
                    handleClose();
                  }
                }}
                // disabled={!errorName||!errorMobile||!errorEmail}
                sx={{ margin: "6px" }}
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
      </div>
      <div>
        <Modal
          open={eopen}
          onClose={handleEClose}
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
                Edit Contact
              </Typography>
              <Typography variant="h6" component="span">
                <span style={{ color: "red" }}> *</span>Name:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                autoFocus
                required
                error={errorName}
                helperText={errorName ? "Empty Field!" : ""}
                onChange={(e) => {
                  // setName(e.target.value);
                  handleName(e.target.value);
                }}
                defaultValue={contactERow.FullName}
              />
              <br />
              <br />
              <Typography variant="h6" component="span">
                <span style={{ color: "red" }}> *</span>Email:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                error={errorEmail}
                helperText={
                  errorEmail ? "Empty Field! or Not Valid Email Format" : ""
                }
                onChange={(e) => {
                  // setEmail(e.target.value);
                  handleEmail(e.target.value);
                  // ContactData['Email'] = (e.target.value)
                }}
                defaultValue={contactERow.UserPrincipleName}
              />
              <br />
              <br />
              <Typography variant="h6" component="span">
                <span style={{ color: "red" }}> *</span> Mobile:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                required
                error={errorMobile}
                helperText={errorMobile ? "Empty Field! or Not Valid" : ""}
                onChange={(e) => {
                  // setMobile(e.target.value);
                  handleMobile(e.target.value);
                  // ContactData['Mobile'] = (e.target.value)
                }}
                defaultValue={contactERow.Mobile}
              />
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  saveHandlerForEdit();
                  if (!Name || !Email || !Mobile) {
                    handleEopen();
                  } else {
                    handleEClose();
                  }
                }}
                // disabled={!errorName||!errorMobile||!errorEmail}
                sx={{ margin: "6px" }}
              >
                Save
              </Button>
              <span>
                <Button variant="contained" onClick={handleEClose}>
                  Cancel
                </Button>
              </span>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default ClientManagement;
