import PropTypes from 'prop-types'
import React, { useState, useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'

import { getApiResourse } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImg } from '@services/getPeopleData'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import UiLoading from '@components/UI/UiLoading'

import styles from './PersonPage.module.css'


const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPeopleInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personImg, setPersonImg] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(null)

  const storeDate = useSelector(state => state.favoriteReducer)


  useEffect(() => {
    (async () => {
      const id = match.params.id
      const res = await getApiResourse(`${API_PERSON}/${id}/`)

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false) 

      setPersonId(id)

      if (res) {
        setPeopleInfo([
          {title: 'height', data: res.height},
          {title: 'mass', data: res.mass},
          {title: 'Hair Color', data: res.hair_color},
          {title: 'Skin Color', data: res.skin_color},
          {title: 'Eye Color', data: res.eye_color},
          {title: 'Birth Year', data: res.birth_year},
          {title: 'Gender', data: res.gender},
        ])

        setPersonName(res.name)
        setPersonImg(getPeopleImg(id))

        res.films.length && setPersonFilms(res.films) 

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <>
      <PersonLinkBack />
      
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
            <PersonPhoto 
            personId={personId}
            personImg={personImg} 
            personName={personName}
            personFavorite={personFavorite} 
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo}/>}
          {personFilms && (
            <Suspense fallback={<UiLoading theme='white' isShadow/>}>
              <PersonFilms personFilms={personFilms}/>
            </Suspense>
          )}
        </div>
      </div>
    </>
  ) 
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(PersonPage)