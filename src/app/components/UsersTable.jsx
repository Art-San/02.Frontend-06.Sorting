import React from 'react'
import PropTypes from 'prop-types'
import BookMark from './Bookmark'
import QualitiesList from './QualitiesList'
import Table from './Table'
// // import TableHeader from './TableHeader'
// // import TableBody from './TableBody'

// const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
//     const columns = {
//         name: { path: 'name', name: 'Имя' },
//         qualities: {
//             name: 'Качества',
//             component: (user) => (<QualitiesList qualities={user.qualities}/>)
//         },
//         profession: { path: 'profession.name', name: 'Провфессия' },
//         completedMeetings: {
//             path: 'completedMeetings',
//             name: 'Встретился, раз'
//         },
//         rate: { path: 'rate', name: 'Оценка' },
//         bookmark: {
//             path: 'bookmark',
//             name: 'Избранное',
//             component: (user) => (
//                 <BookMark
//                     status={user.bookmark}
//                     onClick={() => onToggleBookMark(user._id)}
//                 />
//             )
//         },
//         delete: {
//             component: (user) => (
//                 <button
//                     onClick={() => onDelete(user._id)}
//                     className="btn btn-danger"
//                 >
//                     delete
//                 </button>)
// }
//     }
//     return (
//         // Второй вариант
//         // <Table
//         //     onSort={onSort}
//         //     selectedSort={selectedSort}
//         //     columns={columns}
//         //     data={users}
//         // >
//         //     <TableHeader {...{ onSort, selectedSort, columns }}/>
//         //     <TableBody {...{ columns, data: users }}/>
//         // </Table>

//             // Первый вариант
//             <Table
//                 onSort={onSort}
//                 selectedSort={selectedSort}
//                 columns={columns}
//                 data={users}
//             />
//     )
// }

// UsersTable.propTypes = {
//     users: PropTypes.array.isRequired,
//     onSort: PropTypes.func.isRequired,
//     selectedSort: PropTypes.object.isRequired,
//     onToggleBookMark: PropTypes.func.isRequired,
//     onDelete: PropTypes.func
// }

// export default UsersTable

// import React from 'react'
// import PropTypes from 'prop-types'

// import BookMark from './bookmark'
// import QualitiesList from './qualitiesList'
// import Table from './table'

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: {
            name: 'Качества',
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Встретился, раз'
        },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default UserTable
