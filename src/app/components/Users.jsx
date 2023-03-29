import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import GroupList from './GroupList'
import PropTypes from 'prop-types'
import api from '../api/index'
import SearchStatus from './SearchStatus'
import UsersTable from './UsersTable'
import _ from 'lodash' // Реализация сортировки

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPege, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const pageSize = 8

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessions = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy({ iter: item, order: 'asc' }) // Реализация сортировки предпоследний
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

    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers

    const count = filteredUsers.length
    // const sortedUsers = _.orderBy(filteredUsers, ['name'], ['asc']) // Реализация сортировки демонстрация вариант 1
    // const sortedUsers = _.orderBy(filteredUsers, ['name'], ['desc']) // Реализация сортировки демонстрация вариант 2
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]) // Реализация сортировки последний
    const userGrop = paginate(sortedUsers, currentPege, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessions}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Сброс
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <UsersTable
                        users={userGrop}
                        onSort={handleSort} // Реализация события сортировки
                        {...rest}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPege={currentPege}
                    />
                </div>
            </div>
        </div>
    )
}
Users.propTypes = {
    users: PropTypes.array
}
export default Users
