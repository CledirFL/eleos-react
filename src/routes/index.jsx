import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Task from '../pages/Task'
import User from '../pages/User'
import Home from '../pages/Home'

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/task" element={<Task />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default Router