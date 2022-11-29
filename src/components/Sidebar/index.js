import { useState } from "react"
import {useDispatch} from "react-redux"

import {filterData, loadItems, setIsFiltersActive} from "../../redux/slices/otherSlice"

import {GENRES, CINEMAS} from "../../constants"

const Sidebar = () => {
    const dispatch = useDispatch()

    const [sideBarSwitcher, setSideBarSwitcher] = useState(false)
    const [ticketPrice, setTicketPrice] = useState(100)

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
            Moscow: false,
            KinoPark: false,
            Hoktember: false,
            "Cinema Star": false,
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
                        onClick={() => {
                            dispatch(loadItems())
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
                <div className="sidebar-cinemas">
                    <div className="cinemas-header">
                        <p>Cinemas</p>
                    </div>
                    <div className="cinemas-radio-container">
                        {CINEMAS.map(({title}) => (
                                          <label className="cinemas-radio-buttons">
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
                <span>{ticketPrice}</span>
                <label>
                <input
                    type='range'
                    onChange={(e) => setTicketPrice(e.target.value)}
                    min={1}
                    max={10000}
                    step={100}
                    className='sidebar-slider'
                    >
                </input>
                </label>
            </div>
            <div className="apply-button-container">
                <button 
                    className="apply-button"
                    onClick={() => {
                        const data = {
                            isActiveButtons,
                            isActiveRadioButtons,
                            ticketPrice,
                        }
                        dispatch(filterData(data))
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

