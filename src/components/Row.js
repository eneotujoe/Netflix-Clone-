import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const imageUrl = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl)
            setMovies(req.data.results)
            return req
        }
        fetchData()

    }, [fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters,
            autoplay: 1,
        },
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t=2565s
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                    console.log(url)
                })
            .catch((error) => console.log(error))
        }
    }

    return (
        <div className='row'>
            <h1 className='row__title'>{ title }</h1>
            <div className='row__posters'>
              { movies.map( movie => ( 
                  <img
                      className={`row__poster ${isLargeRow && 'row__poster__large'}`}
                      src={`${imageUrl}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                      alt={movie.title}
                      key={movie.id}
                      onClick= { () => handleClick(movie) }
                  />
              )) }
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row;
