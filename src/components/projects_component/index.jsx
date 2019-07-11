import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import ProjectCard from "../layouts/cards/ProjectCard";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function ProjectsComponent(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle={"Projects"}
          headerColor={"orange"}
          content={
            <Grid container>
              <ItemGrid item xs={12} sm={12} md={4}>
                <ProjectCard
                  title={"Daimler"}
                  description={
                    "A truck management application to forecast the future requirements"
                  }
                  siteUrl={""}
                />
              </ItemGrid>
              <ItemGrid item xs={12} sm={12} md={4}>
                <ProjectCard
                  title={"Learning Space"}
                  description={
                    "A website to conduct LIVE sessions and produce videos for Government examinations and other competitive examinations. "
                  }
                  siteUrl={"https://www.learningspacedigital.com"}
                />
              </ItemGrid>
              <ItemGrid item xs={12} sm={12} md={4}>
                <ProjectCard
                  title={"Jaguar Land Rover"}
                  description={
                    "Built API’s for communication between Web apps and C++ layer. "
                  }
                  siteUrl={""}
                />
              </ItemGrid>
            </Grid>
          }
        />
      </ItemGrid>
    </Grid>
  );
}

ProjectsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsComponent);
