import React from "react";
import ReactGA from "react-ga";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CloudDownload from "@material-ui/icons/CloudDownload";
import ResumePdf from "../../assets/doc/Gokulakannan.pdf";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function DownloadComponent() {
  const classes = useStyles();

  function doDownloadAction() {
    const link = document.createElement("a");
    link.href = ResumePdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    ReactGA.event({
      category: "Resume",
      action: `Downloaded the resume at ${new Date().toDateString()}`,
      label: "Download"
    });
  }

  return (
    <div>
      <Fab
        variant="extended"
        aria-label="Get Resume"
        className={classes.fab}
        onClick={doDownloadAction}
      >
        <CloudDownload className={classes.extendedIcon} />
        Get Resume
      </Fab>
    </div>
  );
}
