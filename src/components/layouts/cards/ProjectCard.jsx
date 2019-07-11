import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 5
  },
  media: {
    height: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function ProjectCard({ title, description, siteUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography className={classes.media} variant="h4" component="h2">
            {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={!siteUrl}
          size="small"
          color="primary"
          onClick={() => {
            window.open(siteUrl, "_blank");
          }}
        >
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}
