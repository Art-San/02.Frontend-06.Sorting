import React from 'react'
// import User from './User'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import BookMark from './Bookmark'

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        profession: { path: 'profession.name', name: 'Провфессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)} // Ячейка вложенного компонента
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)} // Ячейка вложенного компонента
                    className="btn btn-danger"
                >
                    delete
                </button>)
}
    }
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }}/>
            <TableBody {...{ columns, data: users }}/>
            {/* <tbody className="table-group-divider">
                {users.map((user) => (
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody> */}
        </table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func
}

export default UsersTable
