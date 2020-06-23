import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }

  getTrendingMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getPopularMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getLatestMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/latest?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getTopRatedMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getUpcomingMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getMovieDetails(id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getTrendingTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getPopularTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getLatestTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/latest?api_key=401c7abf81bb283286a36c43cec495fe`)
  }

  getTopRatedTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=401c7abf81bb283286a36c43cec495fe`)
  }
  getAiringTodayTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=401c7abf81bb283286a36c43cec495fe`)
  }
}
