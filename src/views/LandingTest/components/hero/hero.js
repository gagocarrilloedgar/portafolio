import React from "react";
import { Button, CssBaseline, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./hero.css";
import { motion } from "framer-motion";

const HeroComponent = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="background">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            ease: "easeInOut",
          }}
          transition={{
            duration: 3,
            delay: 0.5,
          }}
        >
          <Typography
            style={{ marginRight: "10px", marginLeft: "10px" }}
            variant="h1"
          >
            {t("landing.hero.title")}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            ease: "easeInOut",
          }}
          transition={{
            duration: 3,
            delay: 1,
          }}
        >
          <Typography
            style={{ marginRight: "10px", marginLeft: "10px" }}
            variant="h4"
          >
            {t("landing.hero.subtitle")}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            ease: "easeInOut",
          }}
          transition={{
            duration: 3,
            delay: 1.5,
          }}
        >
          <Button
            variant="contained"
            onClick={() => (window.location = "/index/login")}
            style={{
              height: "40px",
              width: "280px",
              borderRadius: "10px",
              marginTop: "20px",
              backgroundColor: "#2196f3",
              color: "white",
              fontSize: "16px",
            }}
          >
            {t("landing.hero.startBtn")}
          </Button>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default HeroComponent;
