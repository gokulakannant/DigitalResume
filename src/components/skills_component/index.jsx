import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import Paper from "@material-ui/core/Paper";
import ProgresserComponent from "../layouts/common/ProgresserComponent";
import { skills, softSkills, otherSkills } from "../../data/skills";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function SkillsComponent(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <ItemGrid item xs={12} sm={12} md={6}>
        <RegularCard
          cardTitle={"Technical Skills"}
          content={
            <Grid container>
              {skills.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <ItemGrid item xs={12} sm={4}>
                      <Paper className={classes.paper}>{value.skill}</Paper>
                    </ItemGrid>
                    <ProgresserComponent maxValue={value.rating} />
                  </React.Fragment>
                );
              })}
            </Grid>
          }
        />
      </ItemGrid>
      <ItemGrid item xs={12} sm={12} md={6}>
        <ItemGrid item xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle={"Other Skills"}
            content={
              <Grid container>
                {otherSkills.map((value, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ItemGrid item xs={12} sm={4}>
                        <Paper className={classes.paper}>{value.skill}</Paper>
                      </ItemGrid>
                      <ProgresserComponent maxValue={value.rating} />
                    </React.Fragment>
                  );
                })}
              </Grid>
            }
          />
        </ItemGrid>
        <ItemGrid item xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle={"Soft Skills"}
            content={
              <Grid container>
                {softSkills.map((value, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ItemGrid item xs={12} sm={4}>
                        <Paper className={classes.paper}>{value.skill}</Paper>
                      </ItemGrid>
                      <ProgresserComponent maxValue={value.rating} />
                    </React.Fragment>
                  );
                })}
              </Grid>
            }
          />
        </ItemGrid>
      </ItemGrid>
    </Grid>
  );
}

SkillsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsComponent);
