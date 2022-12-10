import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'

import {findOnlineItems, findItemsResultSelector, resetFindItemsResult} from "../../redux/slices/onlineSlice"
import {getOnlineData} from "../../redux/thunks/onlineThunk"
import useNavigateToDetails from "../../hooks/useNavigateToDetails"

const Search = () => {
    const dispatch = useDispatch()
    const navigateToDetails = useNavigateToDetails()
    const onlineItems = useSelector(findItemsResultSelector)
    
    const [searchValue, setSearchValue] = useState(null)

    useEffect(() => {
        if(searchValue) {
            const timer = setTimeout(() => dispatch(findOnlineItems(searchValue)), 500)
        
            return () => clearTimeout(timer)
        } 
    }, [searchValue, dispatch])

    return (
        <div 
            className="search-bar"
            onMouseLeave={() => setSearchValue(null)}
        >
         <div 
            className="hidden-input">
            <input 
                onClick={dispatch(getOnlineData())}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                type="search"  
                placeholder="search" 
                className={searchValue ? "active-input": "inactive-input"}
            />
            {
                            onlineItems && (
                                    <div className={searchValue ? 'search-select-container' : 'inactive-select-container'}>
                                        <select
                                            size={
                                                onlineItems.length === 0 || 
                                                onlineItems.length === 1 
                                                ? onlineItems.length + 2 : onlineItems.length
                                            }
                                        >
            {               onlineItems.length === 0 ? 
                                                        <>
                                                            <option 
                                                                selected="true" 
                                                                style={{display: "none"}}
                                                                key={0}
                                                                ></option> 
                                                            <option 
                                                                value={"no result"}
                                                                key={1000}
                                                            >
                                                                No results found
                                                            </option>
                                                        </>
                      
                            : onlineItems.map((item, index) => {
                                if(index === 0) {
                                    return (
                                        <>
                                            <option selected="true" style={{display: "none"}}></option>
                                            <option
                                                value={item.title}
                                                key={item.id}
                                                onClick={() => {
                                                    navigateToDetails({...item})
                                                    dispatch(resetFindItemsResult())
                                                    setSearchValue(null)
                                                }}
                                            >
                                                {item.title} 
                                            </option>
                                        </>
                                        )
                                }
                                     return (
                                            <option
                                                value={item.title}
                                                key={item.id}
                                                onClick={() => {
                                                    navigateToDetails({...item})
                                                    dispatch(resetFindItemsResult())
                                                    setSearchValue(null)
                                                }}
                                            >
                                                {item.title}
                                            </option>
                                            )
                                        }) 
            }
                                        </select>
                                    </div>
                                            )
            }
         </div>
            <div className='search-icon'>
                <FaSearch />
            </div>
        </div>
            )
                    } 

export default Search




