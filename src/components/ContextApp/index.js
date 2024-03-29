import { createContext, useState, useContext } from "react";


const ThemeContext = createContext('light');
console.log(ThemeContext);

function ContextApp (){
    const [theme, setTheme] = useState('light')
    return <ThemeContext.Provider value={theme}>
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>Theme</button>
        <Page/>
    </ThemeContext.Provider>
}

function Page (){
    return <Content/>
}

function Content (){
    const theme = useContext(ThemeContext);
    return <>
        <h2 className={theme}>React</h2>
    </>
}

export default ContextApp;