import React, { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import { getJWT, localSDB, setJWT, routerMain } from "utils";
import axios from "axios";
import { OpenContext } from "hooks";

export const CompanyContext = createContext();

export function CompanyContextProvider(props) {

    const [company, setCompany] = useState({});
    const [companyToFind, setCompanyToFind] = useState({});
    const { setOpen } = useContext(OpenContext);
    const [openRegister, setOpenRegister] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (getJWT(localSDB.company) === null) {
            console.log("user not set yet");
        } else {
            setCompany(getJWT(localSDB.company));
        }
    }, []);

    const handleChange = (prop) => (event) => {
        setCompany({
            ...company,
            [prop]: event.target.value,
        });
    };

    const updateCompanyById = () => {
        setJWT(localSDB.company, company);
        setCompany(company);
        axios
            .post(routerMain.companyRouter.updateCompanyById + company._id, company)
            .then((res) => {
                console.log("updated complete");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateCompanylURL = () => {
        setJWT(localSDB.company, company);
        setCompany(company);
        const toSend = {
            url: company.url,
        };
        axios
            .post(routerMain.companyRouter.updateCompanyURL + company._id, toSend)
            .then((res) => {
                if (res.data.body === "Error") {
                    setError("Error");
                    console.log(res.data.body);
                } else {
                    setError("");
                    console.log("updated complete");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    async function register(companyProps) {
        axios
            .post(routerMain.companyRouter.signup, companyProps)
            .then((res) => {
                setJWT(localSDB.company, res.data.body);
                setJWT(localSDB.token, res.data.header);
                setCompany(res.body);
                window.location = "/business";
            })
            .catch((e) => {
                console.log(e);
                setOpen();
            });
    }

    //login
    async function login(company) {
        axios
            .post(routerMain.companyRouter.login, company)
            .then((res) => {
                setJWT(localSDB.company, res.data.body);
                setJWT(localSDB.token, res.data.header);
                setCompany(res.body);
                window.location = "/business";
            })
            .catch((err) => {
                console.log(err);
                setOpen();
            });
    }

    const getCompanyById = async (id) => {
        await axios
            .get(routerMain.companyRouter.findById + id)
            .then((company) => setCompanyToFind(company.data))
            .catch((err) => console.log(err));
    };

    const getCompanyByURL = async (url) => {
        await fetch(routerMain.companyRouter.findByURL + url)
            .then((res) => res.json())
            .then((company) => setCompanyToFind(company.data))
            .catch((err) => console.log(err));
    };

    const logout = () => {
        localStorage.removeItem(localSDB.google);
        localStorage.removeItem(localSDB.company);
        localStorage.removeItem(localSDB.token);

        window.location = "/";
    };

    const googleLogin = (response, id) => {
        setJWT("google", response);
        const googleProfile = response.profileObj;

        const company = {
            username: googleProfile.name,
            email: googleProfile.email,
            password: googleProfile.googleId,
        };

        axios
            .post(routerMain.companyRouter.googleLogin, company)
            .then((resp) => {
                setJWT(localSDB.user, resp.data.body);
                setJWT(localSDB.token, resp.data.body);
                window.location = "/business";
            })
            .catch((err) => {
                console.log(err);
                if (id === 1) {
                    setOpen();
                } else {
                    setOpenRegister((openRegister) => !openRegister);
                }
            });
    };


    return (
        <CompanyContext.Provider
            value={{
                company,
                googleLogin,
                getCompanyByURL,
                companyToFind,
                login,
                register,
                getCompanyById,
                handleChange,
                updateCompanyById,
                logout,
                setOpen,
                setOpenRegister,
                openRegister,
                error,
                setError,
                updateCompanylURL,
            }}
        >
            {props.children}
        </CompanyContext.Provider>
    );
}

export default CompanyContextProvider;
