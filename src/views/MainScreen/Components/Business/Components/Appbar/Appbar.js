import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton, ButtonContained, ButtonText } from "common";
import { buttonEventGA, window } from "utils";
import { Grid } from "@material-ui/core";

export const BusinessBar = () => {
    const { toMain, toContact, toLogIn } = window();
    const { t } = useTranslation();

    const contactAction = () => {
        buttonEventGA({ category: "business", action: "access", label: "appbar" });
        toContact();
    }

    return (
        <MainBar>
            <LogoButton action={toMain} />
            <Grid item lg={8} sm={4} xs={1}>

            </Grid>
            <ButtonText title={t("landing.buttons.login")} action={toLogIn} />
            {/*<Button>{t("business.appbar.tools")}</Button>
            <Button>{t("business.appbar.prices")}</Button>
            <Button>{t("business.appbar.team")}</Button>
    <Button>{t("business.appbar.business")}</Button>
    <ButtonContained action={contactAction} title={t("business.appbar.register")} />*/}
            <ButtonContained action={toMain} title={t("business.appbar.user")} />

        </MainBar>
    );
};

