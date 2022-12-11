import {useNavigate} from "react-router-dom"

const useNavigateToDetails = () => {
  const navigate = useNavigate()

  return ({title, genre, runtime, img, date, cinemas, price, about, trailer, production, link}) => navigate(link, {
    state: {
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
      })
}

export default useNavigateToDetails