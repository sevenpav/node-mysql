import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-wrapper light-blue accent-3">
          <NavLink to="/" className="brand-logo right">
            ToDo App
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">Список задач</NavLink>
            </li>
            <li>
              <NavLink to="/about">Информация</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
