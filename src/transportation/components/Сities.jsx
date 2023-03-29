import React, { useState } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import CitiTable from './CitiTable'
import _ from 'lodash' // Реализация сортировки

const Сities = ({ cities: allcities, cars, ...rest }) => {
    const count = allcities.length
    const pageSize = 12
    const [currentPege, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        // setSortBy({ iter: item, order: 'asc' }) // Реализация сортировки предпоследний
        if (sortBy.iter === item) {
            // Реализация сортировки последний
            setSortBy((prevState) => ({
                ...prevState,
                order: prevState.order === 'asc' ? 'desc' : 'asc'
            }))
        } else {
            setSortBy({ iter: item, order: 'asc' })
        }
    }

    const sortedUsers = _.orderBy(allcities, [sortBy.iter], [sortBy.order]) // Реализация сортировки последний
    const cityGrop = paginate(sortedUsers, currentPege, pageSize)

    return (
        <>
            {count > 0 && (
                <CitiTable city={cityGrop} onSort={handleSort} {...rest} />
            )}
            <div className="d-flex justify-content-center">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPege={currentPege}
                />
            </div>
        </>
    )
}
Сities.propTypes = {
    cities: PropTypes.array,
    cars: PropTypes.object
}
export default Сities
