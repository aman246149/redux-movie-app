
import React from "react";
import '../index.css';
import { addFavorite, removeFavorite } from "../actions"

class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavorite(movie))
        console.log()
    }

    handleUnFavouriteClick = () => {
        // console.log(this.props.store.getState())
        const { movie } = this.props;
        this.props.dispatch(removeFavorite(movie))

    }
    render() {

        const { movie, isFavorite } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img id="movie-image" src={movie.poster} alt="movie name" />
                </div>
                <div className="right">
                    <div className="title">
                        {movie.title}
                    </div>
                    <div className="plot">
                        {movie.genres.map(genere => {
                            return <b><p id="movie-genere">{genere},</p></b>
                        })}
                    </div>
                    <div className="footer">
                        <div className="overview">
                            {movie.overview}
                        </div>
                        <div className="for-button">
                            {
                                isFavorite ?
                                    <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unvourites</button>
                                    : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favfourites</button>

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
