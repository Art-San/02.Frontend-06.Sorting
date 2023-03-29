import React from 'react'
import Сiti from './Сiti'
import PropTypes from 'prop-types'

const CitiTable = ({ city, onSort, ...rest }) => {
    return (
        <div className="table-responsive-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => onSort('name')}>
                            Город
                        </th>
                        <th scope="col" onClick={() => onSort('km')}>
                            км
                        </th>
                        <th scope="col">Стандарт</th>
                        <th scope="col">Удлинненая</th>
                        <th scope="col">Большая</th>
                        <th scope="col">3х тоннмк</th>
                        <th scope="col">5и тонник</th>
                        <th scope="col" onClick={() => onSort('bookmark')}>
                            Отметка
                        </th>
                        <th scope="col" />
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
