import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { makeConcurrentRequest } from '@utils/network'
import styles from './PersonFilms.module.css'

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmmName] = useState([])
  useEffect( () => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms)

      setFilmmName(response)
    })()
  },[])
  
  return (
    <div className = {styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => 
            <li key = {episode_id} className={styles.list__item}>
              <span className={styles.item__episode} >{episode_id}</span>  
              <span className={styles.item__colon}>:</span>  
              <span className={styles.item__title}>{title}</span>  
            </li>
            )
        }
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}

export default PersonFilms