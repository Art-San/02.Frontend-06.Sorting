import React from 'react'
import User from './User'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
    // Извлечение TableHeader
    const columns = {
        name: { iter: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        profession: { iter: 'profession.name', name: 'Провфессия' },
        completedMeetings: { iter: 'completedMeetings', name: 'Встретился, раз' },
        rate: { iter: 'rate', name: 'Оценка' },
        bookmark: { iter: 'bookmark', name: 'Избранное' },
        delete: {}
    }
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }}/>
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
    selectedSort: PropTypes.object.isRequired
}

export default UsersTable
