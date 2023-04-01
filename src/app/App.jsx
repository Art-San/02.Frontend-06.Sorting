import React from 'react'
import Users from './components/Users'
// import api from './api'

function App() {
    // перереходим в следущий модуль поэтому переносим все данные о пользователях

    // const [users, setUsers] = useState()
    // useEffect(() => {
    //     api.users.fetchAll().then((data) => setUsers(data))
    // }, [])
    // const handleDelete = (userId) => {
    //     setUsers(users.filter((user) => user._id !== userId))
    // }
    // const handleToggleBookMark = (id) => {
    //     setUsers(
    //         users.map((user) => {
    //             if (user._id === id) {
    //                 return { ...user, bookmark: !user.bookmark }
    //             }
    //             return user
    //         })
    //     )
    //     console.log(id)
    // }
    return (
        // <div>
        //     {users && (
        //         <Users
        //             users={users}
        //             onDelete={handleDelete}
        //             onToggleBookMark={handleToggleBookMark}
        //         />
        //     )}
        // </div>

        <Users/>
    )
}

export default App
