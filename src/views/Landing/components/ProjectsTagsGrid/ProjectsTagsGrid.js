import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { ProjectGrid, InfoCard, TypographyH6, HelmetMain } from "common";
import { getJWT, localSDB } from "utils";

const ProjectsTagsGrid = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(getJWT(localSDB.pTags));
  }, []);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HelmetMain
        title={t("landing.helmet.tags", { ptag: getJWT(localSDB.tag) })}
      />
      <ProjectGrid>
        {projects.length < 1 ? (
          <TypographyH6 text={t("home.projectsgrid.emptytags")} />
        ) : (
          projects.map((card) => (
            <Grid item key={card._id} sm={12} md={6} lg={4} xl={4}>
              <InfoCard card={card} key={card._id} />
            </Grid>
          ))
        )}
      </ProjectGrid>
    </React.Fragment>
  );
};

export default ProjectsTagsGrid;
