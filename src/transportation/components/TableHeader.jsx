import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else {
            onSort({ iter: item, order: 'asc' })
        }
    }
  return (
    <thead>
        <tr>
            {columns &&
                Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={ columns[column].iter
                            ? () => handleSort(columns[column].iter)
                            : undefined
                        }
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))
            }
            {/* <th scope="col" onClick={() => handleSort('name')}>
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
            <th scope="col" /> */}
        </tr>
    </thead>
  )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
