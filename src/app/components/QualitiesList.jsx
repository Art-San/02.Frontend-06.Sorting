import React from 'react'
import PropTypes from 'prop-types'
import Qualitie from './Qualitie'
// Реализация качества пользователей
const QualitiesList = ({ qualities }) => {
  return (
    <>
        {qualities.map((qual) => (
            <Qualitie key={qual._id} {...qual} />
        ))}
    </>
  )
}

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default QualitiesList
