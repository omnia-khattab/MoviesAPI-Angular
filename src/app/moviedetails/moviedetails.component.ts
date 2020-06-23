import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id:any;
  movieDetails:any;
  TopFive:any=[];
  imagePrefix='https://image.tmdb.org/t/p/w500/';
  isLoading:boolean=false;
  constructor(public _ActivatedRoute:ActivatedRoute,public _MoviesService:MoviesService) {

    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieDetails=data;
      this.isLoading=true;
    },
    (err)=>{console.log(err)});

    //get Top Ten Movie
    _MoviesService.getTrendingMovies().subscribe((trendMovies)=>{
      for(let i=0;i<5;i++){
        this.TopFive.push(trendMovies.results[i])
      }
    },
    (err)=>{console.log(err)});

    
  }

  ngOnInit(): void {
  }

}
