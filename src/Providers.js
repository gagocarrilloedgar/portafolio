import React from 'react'
import {
    UserContextProvider,
    ProjectContextProvider,
    OpenContextProvider,
    CompanyContextProvider,
} from "hooks";

export const Providers = ({ children }) => {
    return (
        <OpenContextProvider>
            <CompanyContextProvider>
                <UserContextProvider>
                    <ProjectContextProvider>
                        {children}
                    </ProjectContextProvider>
                </UserContextProvider>
            </CompanyContextProvider>
        </OpenContextProvider>
    );
}
