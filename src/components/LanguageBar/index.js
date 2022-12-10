import { useState } from "react"

import { useLanguage } from "../../contexts/LanguageProvider"

const LanguageBar = () => {
    const {setLanguage } = useLanguage()

    const [isActiveEng, setIsActiveEng] = useState("black")
    const [isActiveHy, setIsActiveHy] = useState("black")

    const handleLanguageChange = language => {
        if(language === "eng") {
            setLanguage("en")
            setIsActiveEng("magenta")
            setIsActiveHy("black")
        } else if (language === "hy") {
            setLanguage("hy")
            setIsActiveHy("magenta")
            setIsActiveEng("black")
        }

    }

    return (
        <div className="language-bar">
                <div
                    className="eng"
                    onClick={() => handleLanguageChange("eng")}
                    style={{ color: isActiveEng}}
                >Eng</div>
                <div 
                    className="hy"
                    onClick={() => handleLanguageChange("hy")}
                    style={{ color: isActiveHy}}
                >Հայ</div>
        </div>
    )
} 

export default LanguageBar