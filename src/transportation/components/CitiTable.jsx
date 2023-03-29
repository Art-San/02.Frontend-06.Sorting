import React from 'react'
import Сiti from './Сiti'
import PropTypes from 'prop-types'

const CitiTable = ({ city, onSort, ...rest }) => {
    return (
        <div className="table-responsive-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => onSort('name')}>Город</th>
                        <th onClick={() => onSort('km')}>км</th>
                        <th onClick={() => onSort('standard')}>Стандарт</th>
                        <th onClick={() => onSort('elongated')}>Удлинненая</th>
                        <th onClick={() => onSort('big')}>Большая</th>
                        <th onClick={() => onSort('threetons')}>3х тоннмк</th>
                        <th onClick={() => onSort('fivetons')}>5и тонник</th>
                        <th onClick={() => onSort('bookmark')}>Отметка</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {city.map((city) => (
                        <Сiti key={city._id} {...rest} {...city} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
CitiTable.propTypes = {
    city: PropTypes.any,
    onSort: PropTypes.func.isRequired
}

export default CitiTable
