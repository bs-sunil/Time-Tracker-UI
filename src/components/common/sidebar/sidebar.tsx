import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./sidebar.css";
import MainLayout from "../main-layout/MainLayout";

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop: any) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface SidebarBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<SidebarBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [userRoles, setRoles] = React.useState([]);
  const [userName] = React.useState([sessionStorage.getItem("emp_name")]);
  const [userRole] = React.useState([sessionStorage.getItem("roles")]);
  React.useEffect(() => {
    const userRole = sessionStorage.getItem("roles");

    let roles: any = [];
    if (userRole === "ClientAdmin") {
      roles.push(
        {
          menuId: 1,
          subMenu: [],
          menuName: "Approve Reject Activity",
          pageUrl: "/activity/approvereject",
          menuIcon: "fa fa-tasks",
        },
        {
          menuId: 2,
          subMenu: [],
          menuName: "Dashboard",
          pageUrl: "/dashboard",
          menuIcon: "fa fa-dashboard",
        }
      );
      setRoles(roles);
    } else if (userRole === "OEMMember") {
      roles.push(
        {
          menuId: 1,
          subMenu: [],
          menuName: "Activity Management",
          pageUrl: "/management/activity",
          menuIcon: "fa fa-tasks",
        },
        {
          menuId: 2,
          subMenu: [],
          menuName: "Dashboard",
          pageUrl: "/dashboard",
          menuIcon: "fa fa-dashboard",
        }
      );
      setRoles(roles);
    } else if (userRole === "OEMAdmin") {
      roles.push(
        {
          menuId: 1,
          subMenu: [],
          menuName: "Client Management",
          pageUrl: "/management/client",
          menuIcon: "fa fa-users",
        },
        {
          menuId: 2,
          subMenu: [],
          menuName: "User Managment",
          pageUrl: "/management/user",
          menuIcon: "fa fa-user",
        },
        {
          menuId: 3,
          subMenu: [],
          menuName: "Project Managment",
          pageUrl: "/management/project",
          menuIcon: "fa fa-file-text",
        },
        {
          menuId: 4,
          subMenu: [],
          menuName: "Activity Managment",
          pageUrl: "/management/activity",
          menuIcon: "fa fa-cog",
        },
        {
          menuId: 5,
          subMenu: [],
          menuName: "Approve Reject",
          pageUrl: "/activity/approvereject",
          menuIcon: "fa fa-list-ul",
        },
        {
          menuId: 6,
          subMenu: [],
          menuName: "Revise Activity",
          pageUrl: "/activity/revise",
          menuIcon: "fa fa-sitemap",
        },
        {
          menuId: 7,
          subMenu: [],
          menuName: "Dashboard",
          pageUrl: "/dashboard",
          menuIcon: "fa fa-dashboard",
        }
      );
      setRoles(roles);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="app-bar">
        <Toolbar>
          <div className="menu-logo-sign">
            <div className="menu-logo">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <img
                className="logo"
                src={require("../../../assets/images/g7.png")}
              />
            </div>
            <IconButton style={{ color: "inherit" }} onClick={routeChange}>
              {/* <Button variant="primary">Primary</Button> */}
              <LogoutIcon /> <span className="sign-out">Sign out</span>
            </IconButton>
          </div>

          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <h5 className="time-track">TIME TRACKER</h5>
          <IconButton className="arrow-drawer" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <div className="center-style" style={{ marginTop: 10 }}>
          <AccountCircleIcon style={{ fontSize: 100 }} />
        </div>
        <h5 className="user-name">{userName}</h5>
        <span className="center-style role-name">[{userRole}]</span>
        <Divider className="divider" />
        <List>
          {userRoles.map((item: any) => (
            <ListItem key={item.menuId} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(`${item.pageUrl}`);
                }}
              >
                <ListItemIcon className="icon-draw">
                  <i className={item.menuIcon}></i>
                </ListItemIcon>
                <ListItemText primary={item.menuName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
      </Drawer>
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
}
