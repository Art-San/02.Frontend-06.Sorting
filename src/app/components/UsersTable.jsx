import React from 'react'
import User from './User'
import PropTypes from 'prop-types'

const UsersTable = ({ users, onSort, ...rest }) => {
    return (
        <table className="table">
            <thead>
                {/* Реализация события сортировки onSort('name') */}
                <tr>
                    <th onClick={() => onSort('name')} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качества</th>
                    <th onClick={() => onSort('profession.name')} scope="col">
                        Провфессия
                    </th>
                    <th onClick={() => onSort('completedMeetings')} scope="col">
                        Встретился, раз
                    </th>
                    <th onClick={() => onSort('rate')} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => onSort('bookmark')} scope="col">
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
    onSort: PropTypes.func.isRequired
}

export default UsersTable
