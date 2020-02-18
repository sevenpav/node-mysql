import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-wrapper light-blue accent-3">
          <Link to="/" className="brand-logo right">
            ToDo App
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">Добавить задачу</Link>
            </li>
            <li>
              <Link to="/about">О приложении</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
