import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useState,useEffect} from 'react';
import MovieBox from './MovieBox';
import Navbar from './Navbar';

export default function App() {
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=5ef1bf21a758b6a54008253a54e3ee4d"
  
  const[movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json()).then(data=>{
      console.log(data)
      setMovies(data.results);
    })
  },[])
  return (
    <div className="conatiner">
      <Navbar />
      <div className="grid">
      {movies.map((movieReq)=><MovieBox key={movieReq.id} {...movieReq} />)}
      </div>
    
    </div>
  )
}
