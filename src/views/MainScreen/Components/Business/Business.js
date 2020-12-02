import React from "react";
import { useTranslation } from "react-i18next";

import { CookiesPolicy, HelmetMain } from "common";
import { HeroMain } from "../HeroMain";

export const Business = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <HelmetMain title={t("business.helmet.title")} />
            <HeroMain />
            <CookiesPolicy />
        </React.Fragment>
    );
};


