import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()

  // For this simple single-movie app, we just show static details when id === "1"
  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-12">
          <h2 className="brand">Saiyaara (2025)</h2>
        </div>
        <div className="col-md-8">
          <div className="glass p-3 p-md-4">
            <h5>Storyline</h5>
            <p>
              The film explores themes of love, loss, and memory, particularly focusing on the impact of early-onset Alzheimer's disease on their relationship. 
            </p>
            <h6 className="mt-4">Director</h6>
            <p> Mohit Suri. </p>
            <h6 className="mt-3">Produce by</h6>
            <p>Akshaye Widhani</p>
            <h6 className="mt-3">Stars</h6>
            <p>Ahaan Panday , Aneet Padda.</p>
            <Link className="btn btn-outline-light mt-3" to="/">← Back</Link>
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="poster"
            src="https://upload.wikimedia.org/wikipedia/en/d/db/Saiyaara_film_poster.jpg"
            alt="Interstellar Backdrop"
          />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
