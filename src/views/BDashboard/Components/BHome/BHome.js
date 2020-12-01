import React from "react";
import { HelmetMain, ProjectGrid } from "common";
import { useTranslation } from "react-i18next";
import { initializeGA } from "utils";
import { BCardLayout } from "../Cards/layout";
import { Grid } from "@material-ui/core";
import empresa from "./Assets/Empresa.png"
import retos from "./Assets/retos.png"
import LeaderBoard from "./Assets/LeaderBoard.png"
import { window } from "utils";

export const BHome = () => {
  initializeGA();
  /*pageViewGA({ path: window.location.pathname + window.location.search });*/
  const { t } = useTranslation();
  const { toBusinessApp } = window();

  const data = [{
    icon: empresa,
    title: "Mi empresa",
    description: "Define tu empresa, tu filosofía y que buscáis para que los candidatos y candidatas puedan conocernos y podamos conectarnos con más fiabilidad.",
    action: toBusinessApp,
  },
  {
    icon: retos,
    title: "Retos",
    description: "Define que tipo de retos quieres que utilizemos para encontrar a tus perfiles. Podrás elegir entre una gran cantidad de retos y habilidades.",
    action: toBusinessApp,
  },
  {
    icon: LeaderBoard,
    title: "Ranking global",
    description: "Accede al listado de todos l los usuarios dónde podrás ver una lista en función de sus habilidades, nivels, y mucho más.",
    action: toBusinessApp,
  }];


  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
      <ProjectGrid>
        {data.map(company => {
          return (
            <Grid item lg={4} sm={6} xs={12}>
              <BCardLayout
                icon={company.icon}
                title={company.title}
                description={company.description}
                action={company.action}
                color="#2255ff"
              />
            </Grid>
          )
        })}
      </ProjectGrid>
    </React.Fragment>
  );
};
