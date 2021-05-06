import React from "react";
import NavBar from '../Components/Navbar';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';

import data from '../data';
import { addMovies, showFavoriteMethod } from '../actions'
class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    console.log(store);

    store.subscribe(() => {
      console.log('state updated', this.props.store.getState())

      console.log("updated");
      this.forceUpdate();
    })


    //make api calls
    //dispatch actions 

    store.dispatch(addMovies(data.moviedata))
    console.log('state updated', this.props.store.getState())
  }


  isMovieFavourite = (movie) => {
    const { favorites } = this.props.store.getState();

    const index = favorites.indexOf(movie);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(
      showFavoriteMethod(val))
  }

  fetchMoreData = (store) => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {

      store.dispatch(addMovies(data.moviedata))


    }, 1500);
  };

  render() {
    const { list, showFavorite } = this.props.store.getState();
    const { favorites } = this.props.store.getState();

    const displayMovies = showFavorite ? favorites : list;

    return (
      <div >
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={() => this.onChangeTab(false)}>
              Movies
              </div>

            <div className="tab" onClick={() => this.onChangeTab(true)}>
              Favourites
              </div>
          </div>
          <div className="list">

            {

              displayMovies.map((movie, index) => {
                return <InfiniteScroll
                  dataLength={list.length}
                  next={this.fetchMoreData}
                  style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                  inverse={true} //
                  hasMore={true}
                // loader={<h4>Loading...</h4>}
                // scrollableTarget="scrollableDiv"
                >
                  <MovieCard
                    key={`movies-${index}-${movie.id}`}
                    movie={movie}
                    dispatch={this.props.store.dispatch}
                    isFavorite={this.isMovieFavourite(movie)}
                  />
                </InfiniteScroll>

              })

            }

          </div>
        </div>

        {
          displayMovies.length === 0 ? <div>no-movies</div> : null
        }

      </div>
    );
  }
}

export default App;
