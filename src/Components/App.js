import React from "react";
import NavBar from '../Components/Navbar';
import MovieCard from './MovieCard';
import data from '../data';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    console.log(store);

    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    })


    //make api calls
    //dispatch actions 

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data.moviedata
    })

    console.log('state updated', this.props.store.getState())
  }





  render() {
    const movies = this.props.store.getState();
    console.log("movies", movies);
    return (
      <div >
        <NavBar />
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

            {

              movies.map((movie, index) => {
                return <MovieCard
                  key={`movies-${index}-${movie.id}`}
                  movie={movie} />

              })

            }

          </div>
        </div>

      </div>
    );
  }
}

export default App;
