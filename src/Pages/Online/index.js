import { useEffect, useRef, lazy } from "react"
import {useDispatch, useSelector} from "react-redux"

import {
  uploadedItemsSelector, 
  loadOnlineItems, 
  isFiltersActiveSelector,
  allOnlineItemsSelector,
  errorMessageSelector,
} from "../../redux/slices/onlineSlice"
import {getOnlineData} from "../../redux/thunks/onlineThunk"

import OnlineCard from "../../components/OnlineCard"

const Sidebar = lazy(() => import("../../components/Sidebar"))

const Online = () => {
    const lastItemRef = useRef()
    const observer = useRef()
    const dispatch = useDispatch()
    
    const errorMessage = useSelector(errorMessageSelector)
    const isFiltersActive = useSelector(isFiltersActiveSelector)
    const onlineCards = useSelector(uploadedItemsSelector)

    useEffect(() => {
      if(allOnlineItemsSelector.length === 0) dispatch(getOnlineData())
    }, [dispatch])

    useEffect(() => {
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !isFiltersActive) {
          dispatch(loadOnlineItems()) 
        }
      }, {
        root: null,
        rootMargin: "20px",
        threshold: 1
      })

      if (lastItemRef.current) {
        observer.current.observe(lastItemRef.current)
      }
      return () => {
        observer.current.disconnect()
      }
    })


    return (
        <div className='online-container'>
              <Sidebar />
              {errorMessage ? 
              <div className="online-error-message"
              >{errorMessage}</div> :
                              onlineCards.map((card, index) => {
                                    if(index === onlineCards.length - 1) {
                                        return (
                                            <OnlineCard 
                                                lastItemRef={lastItemRef}
                                                key={card.id}
                                                {...card}
                                            />
                                        )
                                    }
                                    return (
                                      <OnlineCard 
                                        key={card.id}
                                        {...card}
                                     />
                                    )
                                })
            }
        </div>
    )
}

export default Online
