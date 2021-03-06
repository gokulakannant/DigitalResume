import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../layouts/cards/ProfileCard";
import ItemGrid from "../layouts/grid/ItemGrid";
import avator from "../../assets/images/ProfileImage.jpg";
import DownloadComponent from "./DownloadComponent";

function ProfileComponent() {
  return (
    <Grid container>
      <ItemGrid item xs={12} sm={12} md={12}>
        <ProfileCard
          avatar={avator}
          subtitle={"Software Developer"}
          title={"Gokulakannan T"}
          description={
            "Around 3 years of experience in web and database application of various systems. A passionate programmer who likes web technologies(both front end and back end) and loves to write clean and beautiful code."
          }
          footer={<DownloadComponent />}
        />
      </ItemGrid>
    </Grid>
  );
}

export default ProfileComponent;
