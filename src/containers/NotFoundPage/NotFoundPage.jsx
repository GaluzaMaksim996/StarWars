import { useLocation } from 'react-router'
import img from './img/not-found.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()
  return (
    <>
      <img className = {styles.img} src = {img} alt='Not found'/>
      <p className = {styles.text}>No match for {location.pathname}</p>
    </>
  )
}


export default NotFoundPage