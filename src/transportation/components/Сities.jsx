import React, { useState } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import CitiTable from './CitiTable'

const Сities = ({ cities: allcities, cars, ...rest }) => {
    const count = allcities.length
    const pageSize = 4
    const [currentPege, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        console.log('item', item)
    }

    const cityGrop = paginate(allcities, currentPege, pageSize)

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
