import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegularCard from "../layouts/cards/RegularCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import Paper from "@material-ui/core/Paper";
import ProgresserComponent from "../layouts/common/ProgresserComponent";

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

const skills = [
  {
    skill: "Java Script",
    rating: 100
  },
  {
    skill: "React Js",
    rating: 100
  },
  {
    skill: "Angular Js",
    rating: 65
  },
  {
    skill: "Redux",
    rating: 80
  },
  {
    skill: "Laravel",
    rating: 100
  },
  {
    skill: "Electron Js",
    rating: 85
  },
  {
    skill: "Node Js",
    rating: 97
  },
  {
    skill: "Express Js",
    rating: 95
  },
  {
    skill: "MySQL",
    rating: 75
  },
  {
    skill: "MongoDB",
    rating: 75
  },
  {
    skill: "Type Script",
    rating: 100
  },
  {
    skill: "Material UI",
    rating: 100
  }
];

const otherSkills = [
  {
    skill: "Git",
    rating: 100
  },
  {
    skill: "Docker",
    rating: 60
  },
  {
    skill: "Jira",
    rating: 80
  }
];

const softSkills = [
  {
    skill: "Communication",
    rating: 85
  },
  {
    skill: "Teamwork and Collaboration",
    rating: 100
  },
  {
    skill: "Ability to Work Under Pressure",
    rating: 100
  },
  {
    skill: "Self-motivation",
    rating: 100
  }
]
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
