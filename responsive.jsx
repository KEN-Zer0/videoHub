import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



const FilmHub = () => {

  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const [showDropdown, setShowDropdown] = useState(false);

  const [touchStart, setTouchStart] = useState(null);

  const [touchEnd, setTouchEnd] = useState(null);



  const featuredMovies = [

    {

      title: "Supernatural",

      seasons: "1-15 seasons (2005-2020)",

      cast: "Jensen Ackles (Dean Winchester), Jared Padalecki (Sam Winchester)",

      genre: "Horror, Action, Sci-Fi",

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      image: "https://via.placeholder.com/800x450/e74c3c/ffffff?text=Supernatural",

      color: "#e74c3c"

    },

    {

      title: "Doctor Strange (2016)",

      seasons: "",

      cast: "Benedict Cumberbatch (Doctor Strange)",

      genre: "Action, Adventure, Fantasy",

      description: "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts.",

      image: "https://via.placeholder.com/800x450/2ecc71/ffffff?text=Doctor+Strange",

      color: "#2ecc71"

    },

    {

      title: "The Matrix (1999)",

      seasons: "",

      cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",

      genre: "Action, Sci-Fi",

      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",

      image: "https://via.placeholder.com/800x450/3498db/ffffff?text=The+Matrix",

      color: "#3498db"

    }

  ];



  const movieSections = [

    {

      title: "Continue watching",

      movies: [

        { title: "Fast & Furious (2001)", duration: "127 min", color: "#e74c3c" },

        { title: "Avengers (2012)", duration: "143 min", color: "#2ecc71" },

        { title: "Barbie (2023)", duration: "114 min", color: "#3498db" },

        { title: "Shrek (2001)", duration: "90 min", color: "#f1c40f" },

        { title: "Inception (2010)", duration: "148 min", color: "#c0392b" }

      ]

    },

    {

      title: "Comedy",

      movies: [

        { title: "Spy (2015)", duration: "120 min", color: "#3498db" },

        { title: "Pixels (2015)", duration: "105 min", color: "#9b59b6" },

        { title: "Central Intelligence (2016)", duration: "107 min", color: "#16a085" },

        { title: "The Hangover (2009)", duration: "100 min", color: "#e67e22" },

        { title: "Superbad (2007)", duration: "113 min", color: "#1abc9c" }

      ]

    },

    {

      title: "Horror",

      movies: [

        { title: "Horror Movie 1", duration: "90 min", color: "#ff5733" },

        { title: "Horror Movie 2", duration: "100 min", color: "#c70039" },

        { title: "Horror Movie 3", duration: "95 min", color: "#900C3F" },

        { title: "Horror Movie 4", duration: "85 min", color: "#581845" },

        { title: "Horror Movie 5", duration: "105 min", color: "#FF2E63" }

      ]

    },

    {

      title: "Sci-Fi",

      movies: [

        { title: "Sci-Fi Movie 1", duration: "120 min", color: "#3498db" },

        { title: "Sci-Fi Movie 2", duration: "110 min", color: "#2980b9" },

        { title: "Sci-Fi Movie 3", duration: "115 min", color: "#1f618d" },

        { title: "Sci-Fi Movie 4", duration: "125 min", color: "#154360" },

        { title: "Sci-Fi Movie 5", duration: "130 min", color: "#7fb3d5" }

      ]

    },

    {

      title: "Action",

      movies: [

        { title: "Action Movie 1", duration: "130 min", color: "#e74c3c" },

        { title: "Action Movie 2", duration: "115 min", color: "#c0392b" },

        { title: "Action Movie 3", duration: "120 min", color: "#922b21" },

        { title: "Action Movie 4", duration: "110 min", color: "#641e16" },

        { title: "Action Movie 5", duration: "125 min", color: "#ff6f61" }

      ]

    },

    {

      title: "Adventure",

      movies: [

        { title: "Adventure Movie 1", duration: "125 min", color: "#2ecc71" },

        { title: "Adventure Movie 2", duration: "135 min", color: "#27ae60" },

        { title: "Adventure Movie 3", duration: "130 min", color: "#219653" },

        { title: "Adventure Movie 4", duration: "120 min", color: "#145a32" },

        { title: "Adventure Movie 5", duration: "140 min", color: "#52be80" }

      ]

    },

    {

      title: "Fantasy",

      movies: [

        { title: "Fantasy Movie 1", duration: "140 min", color: "#9b59b6" },

        { title: "Fantasy Movie 2", duration: "150 min", color: "#8e44ad" },

        { title: "Fantasy Movie 3", duration: "145 min", color: "#7d3c98" },

        { title: "Fantasy Movie 4", duration: "135 min", color: "#6c3483" },

        { title: "Fantasy Movie 5", duration: "155 min", color: "#a569bd" }

      ]

    }

  ];



  const nextFeatured = () => {

    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredMovies.length);

  };



  const selectFeatured = (index) => {

    setCurrentFeaturedIndex(index);

  };



  // Touch handlers for mobile swipe

  const onTouchStart = (e) => {

    setTouchEnd(null);

    setTouchStart(e.targetTouches[0].clientX);

  };



  const onTouchMove = (e) => {

    setTouchEnd(e.targetTouches[0].clientX);

  };



  const onTouchEnd = () => {

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > 50;

    const isRightSwipe = distance < -50;



    if (isLeftSwipe) {

      nextFeatured();

    } else if (isRightSwipe) {

      setCurrentFeaturedIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

    }

  };



  const currentMovie = featuredMovies[currentFeaturedIndex];



  const MovieCard = ({ movie, index }) => (

    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={index}>

      <div className="movie-card h-100">

        <div 

          className="movie-poster"

          style={{ backgroundColor: movie.color }}

        >

          <div className="movie-info">

            <h6 className="mb-1">{movie.title}</h6>

            <small className="text-muted">{movie.duration}</small>

          </div>

          <button className="play-button">

            <i className="fas fa-play"></i>

          </button>

        </div>

      </div>

    </div>

  );



  const MovieSection = ({ section, index }) => (

    <section className="movie-section mb-5" key={index}>

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3 className="section-title">{section.title}</h3>

      </div>

      <div className="row g-3">

        {section.movies.map((movie, idx) => (

          <MovieCard movie={movie} index={idx} key={idx} />

        ))}

      </div>

    </section>

  );



  return (

    <div className="filmhub-app">

      <style jsx>{`

        .filmhub-app {

          background-color: #272727;

          color: #fff;

          min-height: 100vh;

        }



        .navbar-custom {

          background-color: #272727;

          border-bottom: 1px solid #978A74;

          padding: 1rem 0;

        }



        .logo-title {

          color: white;

          text-decoration: none;

          font-size: 1.5rem;

          font-weight: bold;

        }



        .logo-title:hover {

          color: #ffffffb0;

          text-decoration: underline;

        }



        .search-container {

          background-color: #3f3f3f;

          border-radius: 20px;

          overflow: hidden;

          display: flex;

          max-width: 300px;

          width: 100%;

        }



        .search-input {

          background-color: transparent;

          border: none;

          padding: 10px 15px;

          color: #fff;

          flex-grow: 1;

          outline: none;

        }



        .search-input::placeholder {

          color: #888;

        }



        .search-button {

          background-color: transparent;

          border: none;

          color: #888;

          padding: 0 15px;

          cursor: pointer;

        }



        .user-button {

          background-color: #978A74;

          color: white;

          width: 40px;

          height: 40px;

          border-radius: 50%;

          border: none;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

        }



        .dropdown-menu-custom {

          background-color: #222;

          border: none;

          box-shadow: 0 8px 16px rgba(0,0,0,0.3);

          border-radius: 5px;

          min-width: 160px;

        }



        .dropdown-item-custom {

          color: #fff;

          padding: 12px 16px;

          border-bottom: 1px solid #333;

        }



        .dropdown-item-custom:hover {

          background-color: #333;

          color: #fff;

        }



        .dropdown-item-custom.logout {

          color: #e74c3c;

          border-bottom: none;

        }



        .featured-movie {

          position: relative;

          margin: 2rem 0;

          background-color: #1a1a1a;

          border-radius: 10px;

          overflow: hidden;

          min-height: 450px;

          background-image: url('${currentMovie.image}');

          background-size: cover;

          background-position: center;

        }



        .featured-overlay {

          position: absolute;

          top: 0;

          left: 0;

          right: 0;

          bottom: 0;

          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%);

        }



        .featured-content {

          position: relative;

          z-index: 2;

          height: 100%;

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding: 2rem;

        }



        .featured-title {

          font-size: 2.5rem;

          margin-bottom: 0.5rem;

          font-weight: bold;

        }



        .featured-seasons {

          color: #888;

          margin-bottom: 1rem;

        }



        .featured-meta {

          margin-bottom: 0.5rem;

          font-size: 0.9rem;

        }



        .featured-description {

          font-size: 0.85rem;

          line-height: 1.5;

          color: #bebebe;

          max-width: 600px;

        }



        .featured-controls {

          position: absolute;

          bottom: 12px;

          left: 0;

          right: 0;

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 0 2rem;

          z-index: 3;

        }



        .nav-dots {

          display: flex;

          gap: 10px;

        }



        .dot {

          width: 32px;

          height: 6px;

          background-color: #777;

          border-radius: 12px;

          border: none;

          cursor: pointer;

          transition: all 0.3s;

        }



        .dot:hover {

          background-color: #8f8f8f;

        }



        .dot.active {

          width: 64px;

          background-color: #f3f3f3;

        }



        .next-button {

          background-color: rgba(255, 255, 255, 0.2);

          border: none;

          color: white;

          font-weight: 700;

          padding: 8px 16px;

          border-radius: 16px;

          cursor: pointer;

          transition: all 0.3s;

        }



        .next-button:hover {

          background-color: rgba(255, 255, 255, 0.35);

          border: 1px solid rgba(255, 255, 255, 0.3);

        }



        .section-title {

          font-size: 1.5rem;

          margin-bottom: 1rem;

          color: #fff;

        }



        .movie-card {

          position: relative;

        }



        .movie-poster {

          width: 100%;

          aspect-ratio: 3/4;

          position: relative;

          border-radius: 10px;

          overflow: hidden;

        }



        .movie-info {

          position: absolute;

          bottom: 0;

          left: 0;

          right: 0;

          background: linear-gradient(transparent, rgba(0,0,0,0.8));

          padding: 15px 12px 12px;

          color: white;

          transition: all 0.3s ease;

        }



        .movie-info h6 {

          margin: 0;

          font-size: 0.9rem;

          font-weight: 600;

        }



        .play-button {

          position: absolute;

          bottom: 12px;

          right: 12px;

          width: 24px;

          height: 24px;

          background-color: #978A74;

          border: none;

          border-radius: 50%;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 0.7rem;

          transition: all 0.3s;

        }



        .play-button:hover {

          background-color: #665d4f;

          transform: scale(1.1);

        }



        .footer-custom {

          border-top: 1px solid #978A74;

          padding: 2rem 0;

          text-align: center;

          margin-top: 3rem;

        }



        .ask-button {

          background-color: #978A74;

          color: white;

          border: none;

          padding: 10px 20px;

          border-radius: 20px;

          cursor: pointer;

          transition: all 0.3s;

        }



        .ask-button:hover {

          background-color: #665d4f;

          transform: translateY(-2px);

        }



        @media (max-width: 768px) {

          .featured-title {

            font-size: 1.8rem;

          }



          .featured-content {

            padding: 1.5rem;

          }



          .featured-controls {

            padding: 0 1.5rem;

          }



          .navbar-custom .container-fluid {

            flex-wrap: wrap;

          }



          .search-container {

            order: 3;

            flex-basis: 100%;

            margin-top: 1rem;

            max-width: 100%;

          }

        }



        @media (max-width: 576px) {

          .featured-title {

            font-size: 1.5rem;

          }



          .featured-content {

            padding: 1rem;

          }



          .featured-controls {

            padding: 0 1rem;

          }

        }

      `}</style>



      {/* Navigation */}

      <nav className="navbar navbar-expand-lg navbar-custom">

        <div className="container-fluid">

          <a className="navbar-brand logo-title" href="#">

            FilmHub

          </a>



          <div className="d-flex align-items-center gap-3">

            <div className="search-container d-none d-md-flex">

              <input

                type="text"

                className="search-input"

                placeholder="Search..."

              />

              <button className="search-button">

                <i className="fas fa-search"></i>

              </button>

            </div>



            <div className="dropdown">

              <button

                className="user-button"

                onClick={() => setShowDropdown(!showDropdown)}

                data-bs-toggle="dropdown"

              >

                <i className="fas fa-user"></i>

              </button>

              <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-custom ${showDropdown ? 'show' : ''}`}>

                <li>

                  <a className="dropdown-item dropdown-item-custom" href="#">

                    Moje konto

                  </a>

                </li>

                <li><hr className="dropdown-divider" style={{ borderColor: '#333' }} /></li>

                <li>

                  <a className="dropdown-item dropdown-item-custom logout" href="#">

                    Wyloguj

                  </a>

                </li>

              </ul>

            </div>

          </div>



          {/* Mobile search */}

          <div className="search-container d-md-none mt-3 w-100">

            <input

              type="text"

              className="search-input"

              placeholder="Search..."

            />

            <button className="search-button">

              <i className="fas fa-search"></i>

            </button>

          </div>

        </div>

      </nav>



      <div className="container-fluid px-3 px-md-4">

        {/* Featured Movie */}

        <section 

          className="featured-movie"

          onTouchStart={onTouchStart}

          onTouchMove={onTouchMove}

          onTouchEnd={onTouchEnd}

        >

          <div className="featured-overlay"></div>

          <div className="featured-content">

            <h2 className="featured-title">{currentMovie.title}</h2>

            {currentMovie.seasons && (

              <p className="featured-seasons">{currentMovie.seasons}</p>

            )}

            <p className="featured-meta">

              <strong>Genre:</strong> {currentMovie.genre}

            </p>

            <p className="featured-meta">

              <strong>Cast:</strong> {currentMovie.cast}

            </p>

            <div className="featured-meta">

              <strong>Description:</strong>

            </div>

            <p className="featured-description">{currentMovie.description}</p>

          </div>

          

          <div className="featured-controls">

            <div className="nav-dots">

              {featuredMovies.map((_, index) => (

                <button

                  key={index}

                  className={`dot ${index === currentFeaturedIndex ? 'active' : ''}`}

                  onClick={() => selectFeatured(index)}

                />

              ))}

            </div>

            <button className="next-button" onClick={nextFeatured}>

              Next

            </button>

          </div>

        </section>



        {/* Movie Sections */}

        {movieSections.map((section, index) => (

          <MovieSection section={section} index={index} key={index} />

        ))}



        {/* Footer */}

        <footer className="footer-custom">

          <p className="mb-3">We are always ready to help you.</p>

          <button className="ask-button">Ask a question</button>

        </footer>

      </div>

    </div>

  );

};



export default FilmHub;