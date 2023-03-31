import React from 'react'
import User from './User'
import PropTypes from 'prop-types'

const UsersTable = ({ users, onSort, currenSort, ...rest }) => {
    // Универсальный TableHeader
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
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => handleSort('name')} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качества</th>
                    <th
                        onClick={() => handleSort('profession.name')}
                        scope="col"
                    >
                        Провфессия
                    </th>
                    <th
                        onClick={() => handleSort('completedMeetings')}
                        scope="col"
                    >
                        Встретился, раз
                    </th>
                    <th onClick={() => handleSort('rate')} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => handleSort('bookmark')} scope="col">
                        Избранное
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {users.map((user) => (
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody>
        </table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currenSort: PropTypes.object.isRequired
}

export default UsersTable
