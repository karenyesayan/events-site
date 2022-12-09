import { useState } from "react"
import {useDispatch} from "react-redux"

import {filterOnlineData, loadOnlineItems, setIsFiltersActive} from "../../redux/slices/onlineSlice"

import {GENRES, PRODUCTION} from "../../constants"

const Sidebar = () => {
    const dispatch = useDispatch()

    const [sideBarSwitcher, setSideBarSwitcher] = useState(false)
    const [price, setPrice] = useState(100)

    const [isActiveButtons, setIsActiveButtons] = useState(
        {
            horror: false,
            drama: false,
            thriller: false,
            action: false,
            comedy: false,
            romance: false,
            adventure: false,
        }
    )

    const [isActiveRadioButtons, setIsActiveRadioButtons] = useState(
        {
            'Universal Pictures': false,
            'Warner Bros.': false,
             Netflix: false,
            'Sony Pictures': false,
        }
    )


    const handleActiveButtons = (title) => {
        if(isActiveButtons[title]) isActiveButtons[title] = false
        else isActiveButtons[title] = title
        setIsActiveButtons({...isActiveButtons})
    }

    const handleActiveRadioButtons = (title) => {
        if(isActiveRadioButtons[title]) isActiveRadioButtons[title] = false
        else isActiveRadioButtons[title] = title
        setIsActiveRadioButtons({...isActiveRadioButtons})
    }


    return (
        <>
            <div className={sideBarSwitcher ? "open-sidebar" : "close-sidebar"}>
                <div className="sidebar-header-container">
                    <span 
                        className="reset-btn"
                        onClick={() => {
                            dispatch(loadOnlineItems())
                            dispatch(setIsFiltersActive(false))
                        }}
                        >Reset</span>
                    <span>Filters</span>
                    <div className="close-button">
                        <button onClick={() => {setSideBarSwitcher(false)}}>×</button>
                    </div>
                </div>
                <div className="sidebar-genres">
                    <div className="genres-header">
                        <span>Genres</span>
                    </div>
                    <div className="genres-buttons-container">
                        {GENRES.map(({title}) => (
                            <button 
                                className={isActiveButtons[title] ? "active-genres-buttons": "genres-buttons"}
                                value={title}
                                onClick={e => handleActiveButtons(e.target.value)}
                                >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="sidebar-productions">
                    <div className="productions-header">
                        <p>Production</p>
                    </div>
                    <div className="radio-buttons-container">
                        {PRODUCTION.map(({title}) => (
                                          <label className="radio-buttons">
                                                      <input 
                                                        type="radio"
                                                        checked={isActiveRadioButtons[title]}
                                                        value={title} 
                                                        onClick={e => {
                                                            if(e.target.checked) e.target.checked = false
                                                            else e.target.checked = true
                                                            }
                                                            }
                                                        onChange={e => handleActiveRadioButtons(e.target.value)}
                                                        /> 
                                          <span
                                            className={isActiveRadioButtons[title] ? "active-radio-buttons" : "inactive-radio-buttons"}
                                          >{title}</span>
                                        </label>
                        ))}
                    </div>
                </div>
            <div className="slider-container">
                <p>Price</p>
                <span>{price} AMD</span>
                <label>
                <input
                    type='range'
                    onChange={(e) => setPrice(e.target.value)}
                    min={1}
                    max={10000}
                    value={price}
                    style={{backgroundSize: (price - 1) * 100 / (10000 - 1)  + "%"}}
                    />
                </label>
            </div>
            <div className="apply-button-container">
                <button 
                    className="apply-button"
                    onClick={() => {
                        const data = {
                            isActiveButtons,
                            isActiveRadioButtons,
                            price,
                        }
                        dispatch(filterOnlineData(data))
                        dispatch(setIsFiltersActive(true))
                    }}
                    >Apply</button>
            </div>
            </div>
            <div className="open-button">
                <button onClick={() => setSideBarSwitcher(true)}>☰</button>
            </div>
        </>
    )
}

export default Sidebar

