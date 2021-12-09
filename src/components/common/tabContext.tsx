import React, { useState, createContext, Dispatch, SetStateAction, useContext } from 'react';

interface Props {
    children: any
}

interface Context {
    tabName: (string | Dispatch<SetStateAction<string>>)[],
    setName: (tabName: string) => void
}

const TabContextValues = createContext<Context | null>(null)

export const useTabContextValues = (): Context | null => {
    return useContext(TabContextValues)
}

export const TabContext: React.FC<Props> = ({ children }) => {
    const [activeTabName, setActiveTabName] = useState('Assets');
    const updatedActiveTabName = (tabName: string) => {
        setActiveTabName(tabName);
    };

    return (
        <TabContextValues.Provider value={{
            'tabName': [activeTabName, setActiveTabName],
            'setName': updatedActiveTabName
        }}>
            {children}
        </TabContextValues.Provider>
    );
}
