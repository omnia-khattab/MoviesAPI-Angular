import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovies=[];
  popularMovies=[];
  latestMovies:any;
  topRatedMovies=[];
  upcomingMovies=[];
  imagePrefix='https://image.tmdb.org/t/p/w500/';
 

  constructor(_MoviesService:MoviesService) { 

    _MoviesService.getTrendingMovies().subscribe((data)=>{
      this.trendingMovies=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getLatestMovies().subscribe((data)=>{
      this.latestMovies=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getPopularMovies().subscribe((data)=>{
      this.popularMovies=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getTopRatedMovies().subscribe((data)=>{
      this.topRatedMovies=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getUpcomingMovies().subscribe((data)=>{
      this.upcomingMovies=data.results;
    },
    (err)=>{console.log(err)});

  }
  showDiv = {
    showtrendingContent:false,
    showpopularContent:false,
    showlatestContent:false,
    showupcomingContent:false,
    showtopRatedContent:false
  }
  

  ngOnInit(): void {
  }

}
