import React from 'react'
import {
    UserContextProvider,
    ProjectContextProvider,
    OpenContextProvider,
    CompanyContextProvider,
    ResourcesContextProvider
} from "hooks";

export const Providers = ({ children }) => {
    return (
        <OpenContextProvider>
            <CompanyContextProvider>
                <ResourcesContextProvider>
                    <UserContextProvider>
                        <ProjectContextProvider>
                            {children}
                        </ProjectContextProvider>
                    </UserContextProvider>
                </ResourcesContextProvider>
            </CompanyContextProvider>
        </OpenContextProvider>
    );
}
