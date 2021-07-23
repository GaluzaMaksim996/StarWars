import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ name, id, img }) => 
          <li key={id} className={styles.list__item}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={name} />
              <p className={styles.list__name}>{name}</p>
            </Link>
          </li>
        
        )} 
      </ul>
    </>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList

