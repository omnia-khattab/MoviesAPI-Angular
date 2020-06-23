import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  trendingTv=[];
  popularTv=[];
  latestTv:any;
  topRatedTv=[];
  airingTodatTv=[];
  imagePrefix='https://image.tmdb.org/t/p/w500/';

  constructor(_MoviesService:MoviesService) {

    _MoviesService.getTrendingTv().subscribe((data)=>{
      this.trendingTv=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getLatestTv().subscribe((data)=>{
      this.latestTv=data;
      console.log(this.latestTv);
    },
    (err)=>{console.log(err)});

    _MoviesService.getPopularTv().subscribe((data)=>{
      this.popularTv=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getTopRatedTv().subscribe((data)=>{
      this.topRatedTv=data.results;
    },
    (err)=>{console.log(err)});

    _MoviesService.getAiringTodayTv().subscribe((data)=>{
      this.airingTodatTv=data.results;
    },
    (err)=>{console.log(err)});

  }
  showDiv = {
    showtrendingContent:false,
    showpopularContent:false,
    showlatestContent:false,
    showAiringTodatContent:false,
    showtopRatedContent:false
  }
  

  ngOnInit(): void {
  }

}
