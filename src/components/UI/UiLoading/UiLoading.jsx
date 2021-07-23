import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import cn from 'classnames'
import styles from './UiLoading.module.css'


const UiLoading = ({ theme='white', isShadow=true, classes }) => {
  const [loader, setLoader]= useState(null)

  useEffect(() =>{
    switch (theme) {
      case 'white': setLoader(loaderWhite); break;
      case 'black': setLoader(loaderBlack); break;
      case 'blue': setLoader(loaderBlue); break;
      default: setLoader(loaderWhite); break;
    }
  }, [])

  return (
    <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loader} alt="Loader" />
  )
}

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
}

export default UiLoading