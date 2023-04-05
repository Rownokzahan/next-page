import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/books',
                element: <Books></Books>
            },

            {
                path: '/about',
                element: <About></About>
            },

        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
