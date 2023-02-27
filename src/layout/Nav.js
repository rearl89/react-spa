import React from "react"
import { NavLink } from "react-router-dom"

const navs = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
]

const Nav = () => (
    <nav  className="bg-purple-600 text-purple-300 shadow p-5">
        <ul className="flex space-x-4 justify-end">
            {navs.map(navItem => (
            <li><NavLink to={navItem.path} className={({ isActive }) => isActive ? "border-b-2 border-purple-100 text-purple-100" : undefined}>{navItem.name}</NavLink></li>
        ))}
        </ul>
    </nav>
)

export default Nav;