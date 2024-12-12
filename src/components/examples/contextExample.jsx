import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function ContextExample() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
        <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
    );
}

export default ContextExample;
