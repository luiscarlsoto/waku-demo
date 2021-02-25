import React from 'react'
import List from '../components/list/List'
import NavBar from '../components/navbar/Navbar'
import Alert from '../components/Alert/Alert'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <Alert/>
            <List/>
        </div>
    )
}

export default Dashboard
