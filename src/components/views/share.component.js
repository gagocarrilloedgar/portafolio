import React from "react";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ShareProfile() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleShare = {
    margin: "2.5px",
  };

  return (
    <div>
      <Paper elevation={0} component="ul" className={classes.root}>
        <EmailShareButton url={window.location.href} style={styleShare}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <LinkedinShareButton url={window.location.href} style={styleShare}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={window.location.href} style={styleShare}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={window.location.href} style={styleShare}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </Paper>
    </div>
  );
}
