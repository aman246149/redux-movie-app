
import React from "react";
import '../index.css';


class MovieCard extends React.Component {



 render(){

    const { movie }=this.props;

     return (
       <div className="movie-card">
           <div className="left">
                <img  id="movie-image" src={movie.poster} alt="movie name"/>
           </div>
           <div className="right">
                <div className="title">
                    {movie.title}
                </div>
                <div className="plot">
                    {movie.genres.map(genere=>{
                       return <b><p id="movie-genere">{genere},</p></b>
                    })}
                </div>
                <div className="footer">
                    <div className="overview">
                        {movie.overview}
                    </div>
                <div className="for-button">
                    <button className="favourite-btn">Favourites</button>
               </div>
                </div>
           </div>
       </div>
      );
 }
}

export default MovieCard;
