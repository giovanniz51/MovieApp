import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movie
  key="4aeac4cb"
  movieDetail
  constructor() { }

  ngOnInit() {
    
  }
  
  ngOnChanges(){
    fetch(`https://www.omdbapi.com/?apikey=${this.key}&i=${this.movie.imdbID}`).then(res => res.json()).then(data => this.movieDetail = data)
  }

}
