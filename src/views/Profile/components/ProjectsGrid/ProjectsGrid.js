import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { ProjectGrid, TextCard, TypographyH6 } from "common";
import { ProjectContext } from "hooks";

const ProjectsGrid = ({ userId }) => {
  const { projects, fethProjectsData } = useContext(ProjectContext);
  useEffect(() => {
    fethProjectsData(userId);
  }, [userId]);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <ProjectGrid>
          {projects.length < 1 ? (
            <TypographyH6 text={t("profile.projectsgrid.empty")} />
          ) : (
            projects.map((card) => (
              <Grid item key={card._id} sm={12} md={6} lg={4} xl={4}>
                <TextCard card={card} key={card._id} />
              </Grid>
            ))
          )}
        </ProjectGrid>
      </Grid>
    </React.Fragment>
  );
};

export default ProjectsGrid;
