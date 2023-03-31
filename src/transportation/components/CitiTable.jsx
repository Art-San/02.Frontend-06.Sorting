import React from 'react'
import Сiti from './Сiti'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'

const CitiTable = ({ city, onSort, selectedSort, ...rest }) => {
    // const handleSort = (item) => {
    //     if (currenSort.iter === item) {
    //         onSort({
    //             ...currenSort,
    //             order: currenSort.order === 'asc' ? 'desc' : 'asc'
    //         })
    //     } else {
    //         onSort({ iter: item, order: 'asc' })
    //     }
    // }
    const columns = {
        name: { iter: 'name', name: 'Город' },
        priceKm: { iter: 'km', name: 'км' },
        standard: { iter: 'standard', name: 'Стандарт' },
        elongated: { iter: 'elongated', name: 'Удлинненая' },
        big: { iter: 'big', name: 'Большая' },
        threetons: { iter: 'threetons', name: '3х тоннмк' },
        fivetons: { iter: 'fivetons', name: '5и тоннмк' },
        bookmark: { iter: 'bookmark', name: 'Избранное' },
        delete: {}
    }
    return (
        <div className="table-responsive-sm">
            <table className="table">
                <TableHeader {...{ onSort, selectedSort, columns }}/>
                {/* <thead>
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
                </thead> */}
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
    selectedSort: PropTypes.any
}

export default CitiTable
