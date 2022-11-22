import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// add another initialState and the handleClick function from Dashboard to use for revealing spoiler info
const initialState = {
    d1: false,
    d2: false,
    d3: false,
}

const activeTrial = {
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    t5: false,
    t6: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [subject, setSubject] = useState(initialState);
    const [studentName, setStudentName] = useState(undefined);
    const [trial, setTrial] = useState(activeTrial);

    const subjectClick = (clicked) => {
        setSubject({...initialState, [clicked]: true})
    };

    const trialClick = (clicked) => {
        setTrial({...activeTrial, [clicked]: true})
    }

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
            setStudentName,
            trial,
            setTrial,
            trialClick,
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);