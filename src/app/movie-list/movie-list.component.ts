import {
	Component,
	OnInit,
	Output,
	EventEmitter,
	Input,
	OnChanges
} from '@angular/core';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
	key = '4aeac4cb';
	movies;
	@Input() searchInput = '';
	constructor() {}

	ngOnInit() {}

	ngOnChanges() {
		console.log(this.searchInput);
		if (this.searchInput) {
			if (this.searchInput.length >= 3)
				fetch(
					`https://www.omdbapi.com/?apikey=${this.key}&s=${this.searchInput}`
				)
					.then(res => res.json())
					.then(data => (this.movies = data.Search));
		}
	}
}
