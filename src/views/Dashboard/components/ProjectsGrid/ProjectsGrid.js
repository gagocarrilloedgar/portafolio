import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { ProjectGrid, EditCard, TypographyH6 } from "common";
import { ProjectContext } from "hooks";

const ProjectsTagsGrid = () => {

  const { projects } = useContext(ProjectContext);

  const { t } = useTranslation();
  console.log(projects);
  return (
    <React.Fragment>
      <ProjectGrid>
        {projects.length < 1 ? (
          <TypographyH6 text={t("home.projectsgrid.emptytags")} />
        ) : (
            projects.map((card) => (
              <Grid item key={card._id} sm={10} md={6} lg={4} xl={4}>
                <EditCard card={card} key={card._id} />
              </Grid>
            ))
          )}
      </ProjectGrid>
    </React.Fragment>
  );
};

export default ProjectsTagsGrid;
