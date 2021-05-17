import { Link } from 'gatsby'
import React from 'react'

export default function Nav() {
    return (
        <nav className="p-4 ">
        <ul className="m-auto flex flex-row justify-between max-w-md">
            <li className="hover:bg-purple-700 hover:text-white p-1 px-2 rounded">
                <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-purple-700 hover:text-white p-1 px-2 rounded"> 
                <Link to="/about">About</Link>
            </li>

        </ul>
        </nav>
    )

}
