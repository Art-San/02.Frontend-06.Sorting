import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Transportation from './transportation/Transportation'
// import AppTable from './app table/AppTable'

// import CountersList from './0 counter/CountersList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
        {/* <Transportation /> */}
        {/* <AppTable /> */}
        {/* <CountersList /> */}
    </React.StrictMode>
)
