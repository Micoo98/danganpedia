import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    d1: false,
    d2: false,
    d3: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [subject, setSubject] = useState(initialState);
    const [studentName, setStudentName] = useState(undefined)

    const subjectClick = (clicked) => {
        setSubject({...initialState, [clicked]: true})
    };

    return(
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            screenSize,
            setScreenSize,
            subject,
            setSubject,
            subjectClick,
            studentName,
            setStudentName
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);