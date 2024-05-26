import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Task from '../pages/Task'
import User from '../pages/User'
import Home from '../pages/Home'
import ShowUser from '../pages/User/Show'
import Page from '../page'

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
            <Route element={<Page title="Eleo " />}>
                <Route path="/" exact element={<Home />} />
            </Route>

            <Route element={<Page title="Eleo - Task" />}>
                <Route path="/task" element={<Task />} />
            </Route>
            <Route element={<Page title="Eleo - User" />}>
                <Route path="/user" exact element={<User />} />
            </Route>
            <Route element={<Page title="Eleo - User Details" />}>
                <Route
                    path="/user/:id"
                    element={<ShowUser />} />
            </Route>
            <Route element={<Page title="Eleo - Not found" />}>
                <Route path="*" element={<NoMatch />} />

            </Route>
        </Routes>
    )
}

export default Router