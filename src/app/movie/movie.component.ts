import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie
  @Output() selectedMovie = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {}
  
  onMovieClick(){
    this.selectedMovie.emit()
  }

}
