import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useState } from "react";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  let currentDate = new Date();
  const [day] = useState(currentDate.getDate());
  const [month] = useState(
    currentDate.toLocaleString("default", { month: "long" })
  );
  const [year] = useState(currentDate.getFullYear());
  return (
    <React.Fragment>
      {/* <Title>Recent Deposits</Title> */}
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        {props.stuNo}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} marginTop={5}>
        as of {day} {month} {year}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Report
        </Link>
      </div>
    </React.Fragment>
  );
}
