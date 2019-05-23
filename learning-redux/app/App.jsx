import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './styles.scss'

export default function App({ children }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/users/new">Sign Up</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired
}
