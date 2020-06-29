import React from "react";
import { Grid, Button } from "@material-ui/core";
import "../Styles/HeroStyle.css";

export const HeroComponent = () => {
  return (
    <Grid className="background">
      <h1>Dale vida a tus proyectos y demuestra lo que sabes</h1>
      <h2>
        Comparte todos tus proyectos de forma fácil con solo un link y en una
        página simple y elegante. El complemento perfecto para LinkedIn, tu CV e
        incluso tu tajeta de presentación
      </h2>
      <Button
        color="primary"
        variant="contained"
        onClick={() => (window.location = "/login")}
        style={{
          height: "40px",
          width: "280px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        Empieza ya gratis
      </Button>
    </Grid>
  );
};
