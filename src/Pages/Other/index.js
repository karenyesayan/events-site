import { useEffect, useRef, lazy } from "react"
import {useDispatch, useSelector} from "react-redux"

import {
  loadingItemsSelector, 
  loadItems, 
  isFiltersActiveSelector,
} from "../../redux/slices/otherSlice"
import {getOtherPageData} from "../../redux/thunks/otherThunk"

import OtherPageCard from "../../components/OtherPageCard"

const Sidebar = lazy(() => import("../../components/Sidebar"))


const Other = () => {
    const lastItemRef = useRef()
    const observer = useRef()
    const dispatch = useDispatch()
    
    const isFiltersActive = useSelector(isFiltersActiveSelector)
    const pageCards = useSelector(loadingItemsSelector)

    useEffect(() => {
        dispatch(getOtherPageData())
    }, [])

    useEffect(() => {
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !isFiltersActive) {
          dispatch(loadItems()) 
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
        <div className='other-page-container'>
              <Sidebar />
            {
                              pageCards.map((card, index) => {
                                    if(index === pageCards.length - 1) {
                                        return (
                                            <OtherPageCard 
                                                lastItemRef={lastItemRef}
                                                key={card.id}
                                                {...card}
                                            />
                                        )
                                    }
                                    return (
                                      <OtherPageCard 
                                        key={card.id}
                                        {...card}
                                     />
                                    )
                                })
            }
        </div>
    )
}

export default Other
