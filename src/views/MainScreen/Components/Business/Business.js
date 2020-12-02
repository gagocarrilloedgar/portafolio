import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CookiesPolicy, HelmetMain } from "common";

export const Business = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <HelmetMain title={t("business.helmet.title")} />


            <CookiesPolicy />
        </React.Fragment>
    );
};


