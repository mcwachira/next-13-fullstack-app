"use client"

import { createContext, useState } from "react"
import React from 'react';

type themeContextType = {
    toggle:() => void
  mode:string
    // ...
  }

export const ThemeContext = createContext<themeContextType>()

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [mode,setMode] = useState('dark')

    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? "light" : "dark") );
    }


    return (


     
    <ThemeContext.Provider  value={{mode, toggle}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>

    </ThemeContext.Provider>

)
}