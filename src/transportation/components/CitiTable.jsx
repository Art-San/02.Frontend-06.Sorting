import React from 'react'
import Сiti from './Сiti'
import PropTypes from 'prop-types'

const CitiTable = ({ city, onSort, currenSort, ...rest }) => {
    const handleSort = (item) => {
        if (currenSort.iter === item) {
            onSort({
                ...currenSort,
                order: currenSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else {
            onSort({ iter: item, order: 'asc' })
        }
    }
    return (
        <div className="table-responsive-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => handleSort('name')}>
                            Город
                        </th>
                        <th scope="col" onClick={() => handleSort('km')}>
                            км
                        </th>
                        <th scope="col">Стандарт</th>
                        <th scope="col">Удлинненая</th>
                        <th scope="col">Большая</th>
                        <th scope="col">3х тоннмк</th>
                        <th scope="col">5и тонник</th>
                        <th scope="col" onClick={() => handleSort('bookmark')}>
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
    onSort: PropTypes.func.isRequired,
    currenSort: PropTypes.any
}

export default CitiTable
