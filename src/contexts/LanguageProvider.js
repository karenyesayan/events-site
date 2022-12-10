import { createContext, useCallback, useContext, useState } from "react"

const LanguageContext = createContext(null)

const dictionary = {
  en: {
    Home: "Home",
    Cinema: "Cinema",
    Concert: "Concert",
    Theater: "Theater",
    ["Opera & Ballet"]: "Opera & Ballet",
    ["Clubs & Pubs"]: "Clubs & Pubs",
    ["Personal account"]: "Personal account",
    ["Vay Grig Grig"]: "Vay Grig Grig",
    ["Retro jazz"]: "Retro jazz",
    ["Sevak Khanagyan"]: "Sevak Khanagyan",
    ["Love Odd"]: "Love Odd",
    ["Аram MP3"]: "Аram MP3",
    Details: "Details",
    CINEMA: "CINEMA",
    CONCERT: "CONCERT",
    THEATER: "THEATER",
    ["OPERA&BALLET"]: "OPERA&BALLET",
    ["View more"]: "View more",
    ["About"]: "About",
    ["Information"]: "Information",
    ["Help"]: "Help",
  },
  hy: {
    Home: "Գլխավոր էջ",
    Cinema: "Կինո",
    Concert: "Համերգ",
    Theater: "Թատրոն",
    ["Opera & Ballet"]: "Օպերա և Բալետ",
    ["Clubs & Pubs"]: "Ակումբ և Փաբ",
    ["Personal account"]: "Անձնական Գրասենյակ",
    ["Vay Grig Grig"]: "Վայ Գրիգ Գրիգ",
    ["Retro jazz"]: "Ռետրո ջազ",
    ["Sevak Khanagyan"]: "Սևակ Խանաղյան",
    ["Love Odd"]: "Սիրո գործակից",
    ["Аram MP3"]: "Արամ MP3",
    Details: "Մանրամասն",
    CINEMA: "ԿԻՆՈ",
    CONCERT: "ՀԱՄԵՐԳ",
    THEATER: "ԹԱՏՐՈՆ",
    ["OPERA&BALLET"]: "ՕՊԵՐԱևԲԱԼԵՏ",
    ["View more"]: "Տեսնել ավելին",
    ["About"]: "Մեր մասին",
    ["Information"]: "Տեղեկատվություն",
    ["Help"]: "Օգնություն",
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const t = useCallback(
    (word) => {
      return dictionary[language][word] || word
    },
    [language]
  );

  const providerObj = {
    t,
    language,
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={providerObj}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider
