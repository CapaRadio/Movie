import React, { useEffect, useState } from 'react'

function Movie() {


    const [movieList,setMovieList] = useState([])



    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=e3673de63ab4a1102e8bf649ce793e8d")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
    },[])

    console.log(movieList);

  return (
 
    <div>{movieList.map((movie)=>(
        <img style={{width:'300px',height:'250px',margin:'20px',padding:'10px'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=''/>
    ))}
    </div>

)
}




export default Movie;