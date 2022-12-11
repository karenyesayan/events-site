import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import instance from "../api/axios"

import { userSelector, addOnlineContent } from "../redux/slices/userSlice"

const useOnlineContentBuy = () => {
  const {id, selectedOnlineContent} = useSelector(userSelector)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  return ({title, genre, runtime, img, date, cinemas, price, about, trailer, production}) => {
    const activeItem = {
        title,
        genre,
        runtime,
        img,
        date,
        cinemas,
        price,
        about,
        trailer, 
        production,
      }

    if (id) {
      const findDuplicateItems = selectedOnlineContent.find(currentItem => currentItem.title === activeItem.title)
      const body ={selectedOnlineContent: findDuplicateItems ? selectedOnlineContent : [activeItem,...selectedOnlineContent]}

      instance.patch(`users/${id}/`, body)

    if(!findDuplicateItems) dispatch(addOnlineContent(activeItem))
      navigate('/profile')
    } else { navigate('/myaccount') }
    }
}

export default useOnlineContentBuy