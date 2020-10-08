import React from "react";
import { useTranslation } from "react-i18next";

import { MainBar, LogoButton, ButtonContained } from "common";
import { buttonEventGA, window } from "utils";
import { Button } from "@material-ui/core";

export const BusinessBar = () => {
    const { toMain, toContact } = window();
    const { t } = useTranslation();

    const contactAction = () => {
        buttonEventGA({ category: "business", action: "access", label: "appbar" });
        toContact();
    }

    return (
        <MainBar>
            <LogoButton action={toMain} />
            {/*<Button>{t("business.appbar.tools")}</Button>
            <Button>{t("business.appbar.prices")}</Button>
            <Button>{t("business.appbar.team")}</Button>
    <Button>{t("business.appbar.business")}</Button>
    <ButtonContained action={contactAction} title={t("business.appbar.register")} />*/}
            <ButtonContained action={toMain} title={t("business.appbar.user")} />

        </MainBar>
    );
};

