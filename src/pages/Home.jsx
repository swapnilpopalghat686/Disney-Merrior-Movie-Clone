import React from 'react'
import { Link } from 'react-router-dom'

const MOVIE = {
  id: 1,
  title: 'Saiyaara',
  year: 2025,
  rating: 'PG-13',
  runtime: '2h 49m',
  genres: ['Romantic', 'Drama', 'love'],
  poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAyMzcuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00447951-besqwckxum-portrait.jpg',
  backdrop: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSaiyaara&psig=AOvVaw2B67v44Z-VSze17aEraoDZ&ust=1755798426624000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCO1If5mY8DFQAAAAAdAAAAABAE',
  tagline: 'The film was officially announced by Mumbai Based Yash Raj Films, with Mohit Suri signed as the director.',
  summary: `It tells the story of Krish Kapoor, a struggling musician, and Vaani Batra, a writer and poet, who find love and healing through their shared passion for music.`
}

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="hero p-3 p-md-5 mb-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-5">
            <img src={MOVIE.poster} alt={MOVIE.title} className="poster" />
          </div>
          <div className="col-md-7">
            <h1 className="display-5 fw-bold brand">{MOVIE.title}</h1>
            <p className="lead mb-2">{MOVIE.tagline}</p>
            <div className="d-flex gap-2 flex-wrap mb-3">
              <span className="chip">{MOVIE.year}</span>
              <span className="chip">{MOVIE.rating}</span>
              <span className="chip">{MOVIE.runtime}</span>
              {MOVIE.genres.map(g => <span key={g} className="chip">{g}</span>)}
            </div>
            <p className="mb-4">{MOVIE.summary}</p>
            <div className="d-flex gap-2">
              <a className="btn btn-brand btn-lg" href="https://www.youtube.com/watch?v=9r-tT5IN0vg" target="_blank" rel="noreferrer">▶ Watch Trailer</a>
              <Link to="/movie/1" className="btn btn-outline-light btn-lg">More Details</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Extras: cast preview cards */}
      <div className="row g-3">
        {[
          {name:'Directed by', role:'	Mohit Suri'},
          {name:'Produced by', role:'Akshaye Widhani'},
          {name:'Production company', role:'	Yash Raj Films'},
          {name:'Release date', role:'	18 July 2025'}
        ].map((c, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="glass p-3 h-100">
              <div className="fw-semibold">{c.name}</div>
              <div className="text-secondary">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
