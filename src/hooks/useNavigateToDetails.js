import {useNavigate} from "react-router-dom"

const useNavigateToDetails = () => {
  const navigate = useNavigate()

  return ({title, genre, runtime, date, cinemas, price, about, trailer, production, link}) => navigate(link, {
    state: {
        title,
        genre,
        runtime,
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