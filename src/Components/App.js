import React from "react";
import NavBar from '../Components/Navbar';
import MovieCard from './MovieCard';
import data from '../data';

function App() {
  return (
    <div >
      <NavBar/>
      <div className="main">
          <div className="tabs">
              <div className="tab">
                  Movies
              </div>

              <div className="tab">
                    Favourites
              </div>
          </div>
          <div className="list">
                  
                    { data.moviedata.map(movie=>{
                     return <MovieCard  movie={movie} />
                    })
                    }
                  
              </div>
      </div>

    </div>
  );
}

export default App;
