import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <ShoppingCartIcon /> */}
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <PeopleIcon /> */}
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Company" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Student Report" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Company Report" />
    </ListItemButton>
  </React.Fragment>
);

export const tertiaryListItem = (
  // <React.Fragment>
  //   <ListItemButton>
  //     <ListItemIcon>
  //       <ExitToAppIcon>
  //         <Link to={"/Homepage"}></Link>
  //       </ExitToAppIcon>
  //     </ListItemIcon>
  //     <ListItemText primary="Sign Out" />
  //   </ListItemButton>
  // </React.Fragment>
  <button type="submit">
        <Link to={"/HomePage"} className='btn'>Sign Out</Link>
        </button>
);
