import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand">🎬 Disney Merrior</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.imdb.com/title/tt28037987/" target="_blank" rel="noreferrer">IMDb</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/watch?v=BSJa1UytM8w&list=RDBSJa1UytM8w&start_radio=1" target="_blank" rel="noreferrer">Trailer</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
