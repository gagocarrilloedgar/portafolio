import React from "react";
import { HelmetMain, ProjectGrid } from "common";
import { useTranslation } from "react-i18next";
import { initializeGA, window } from "utils";

import { HomeCard } from "./HomeCard";

import "./style.css";
import { Grid } from "@material-ui/core";

//Images
import academy from "./assets/academy.png";
import competicion from "./assets/comunidad.png";
import empresas from "./assets/empresas.png";
import ofertas from "./assets/ofertas.png";
import pportfolio from "./assets/pportfolio.png";
import retos from "./assets/retos.png";


export const Home = () => {
  initializeGA();
  /*pageViewGA({ path: window.location.pathname + window.location.search });*/
  const { t } = useTranslation();
  const { toLeagues } = window()
  const cardsTtile = ["Empresas", "Competiciones", "Academy", "Ofertas", "Comunidad", "Retos"];
  const sourceImages = [empresas, competicion, academy, ofertas, pportfolio, retos];
  const desc1 = "Descubre empresas y su filosofia, conecta y conquista los retos que te proponen";
  const desc2 = "Compite en retos del mundo real todo tipo de displicinas y déstaca en ofertas";
  const desc3 = "Descubre que habilidades puedes mejroar en función de tus objetivos, insignias y logros actuales";
  const desc4 = "Revisa las ofertas y empresas que hemos encontrado para ti.";
  const desc5 = "Interacciona con la comunidad, consulta dudas, resuelve retos grupales y mucho más.";
  const desc6 = " Descubre los retos semanales que tenemos preparados y demuestra tus habilidades.";
  const desc = [desc1, desc2, desc3, desc4, desc5, desc6];

  const notAvail = () => {
    alert("Todavía no está listo del todo, te avisaremos cuando puedas disfrutar de esta función");
  }

  const functions =[notAvail, notAvail,notAvail,notAvail,notAvail,toLeagues];

  return (
    <React.Fragment>
      <HelmetMain title={t("dashboard.helmet.home")} />
      <ProjectGrid>
        {cardsTtile.map((card, index) => (
          <Grid item key={index} sm={10} md={6} lg={4} xl={4}>
            <HomeCard source={sourceImages[index]} text={desc[index]} action={functions[index]} title={card} />
          </Grid>
        ))}

      </ProjectGrid>
    </React.Fragment>
  );
};
