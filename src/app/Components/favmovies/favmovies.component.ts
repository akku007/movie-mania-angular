import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service'
@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css'],
  providers:[MovieService],
})
export class FavmoviesComponent implements OnInit {
  favMoviesList=[];
  hideVar:boolean=true;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.showFav().subscribe((res) =>{
      this.favMoviesList = res.movies;
     if(this.favMoviesList!=[]){
      //this.hideVar=true;
      console.log("na dikh");
     }
  })
}
}