import { useHistory } from 'react-router'
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
  const history = useHistory()
  const handleGoBack = e => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <a 
    href="#"
    onClick={handleGoBack}
    className={styles.link}
    >
      <img className={styles.link__img} src={iconBack} alt="Arrow left" />
      <span>
        Go Back
      </span>
    </a>
  )
}



export default PersonLinkBack