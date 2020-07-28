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
import { Paper } from "@material-ui/core";
import { useStyles, styleShare } from "./style";

export default function ShareButtons() {
  const classes = useStyles();

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
