import { React, useState, useEffect } from "react"

import './App.css'
import {APP_SLIDER_ITEMS} from "../src/constants/index"

import AppContentComponent from "./components/AppContentComponent"
import OnlineScroller from "./components/OnlineScroller"
import RegContent from "./components/RegContent"
import Footer from "./components/Footer"

import useNavigateToDetails from "./hooks/useNavigateToDetails"
import { useLanguage } from './contexts/LanguageProvider'

const App = () => {
  const navigateToDetails = useNavigateToDetails()
  const { t } = useLanguage()

  const [translate, setTranslate] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslate(translate === -500 ? 0 : previousValue => previousValue -= 100)
    }, [translate === -500 ? 600 : 4000]);

    return () => clearTimeout(timer)
  }, [translate])

  return (
    <div className="main-app">
      <main 
        className="app-container"
        style={{transform: `translate(${translate}vw`, transition: `transform .${translate === 0 ? 0 : 7}s ease`}}
        >
        {
          APP_SLIDER_ITEMS.map(item => (
          <div 
            style={{backgroundImage: `url(${item.poster})`} } 
            className="app-slider"
            key={`${item.id}`}
            >
            <div className="poster-details-container">
                <div className="poster-title">{t(item.title)}</div>
                <div 
                  className="poster-details-button"
                  onClick={() => navigateToDetails({...item})}
                  >{t("Details")}</div>
            </div>
          </div>
          ))
        }
      </main>
      <section className="nav-buttons">
        {
          APP_SLIDER_ITEMS.map(({id}, index) => {
            if(index !== 5) return (
              <button
                className={translate === -id ? "active-nav-button" : "inactive-nav-button"}
                onClick={() => setTranslate(-id)}
                key={`${id + 1}`}
              ></button>
            )
            return null
          })
        }        
      </section>
      <AppContentComponent />
      <section className="app-scroller-container">
        <div className="app-scroller">
          <OnlineScroller />
        </div>
      </section>
      <RegContent />
      <Footer />
    </div>
  )
}

export default App
