import {useEffect, useState} from "react";

const App = () => {
    const[loadingText, setLoadingText] = useState('Loading')
    useEffect(() => {
        const loadingInterval = setInterval(() => {
            setLoadingText(prev => prev == "Loading..." ? "Loading" : prev + ".")
        }, 750)
        return () => {
            clearInterval(loadingInterval)
        }
    }, [])
    return (
        <>
            <div className={`flex flex-col justify-center min-h-screen items-center bg-gray-400`}>
                <img src={`pic.png`} className={`w-32 animate-logo`}/>
                <h1 className={`text-lg font-semibold animate-text`}>{loadingText}</h1>
            </div>
        </>
    )
}
export default App