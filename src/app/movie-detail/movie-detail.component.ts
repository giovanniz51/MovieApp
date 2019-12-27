import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-movie-detail',
	templateUrl: './movie-detail.component.html',
	styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
	key = '4aeac4cb';
	movieDetail;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('movieId');
		fetch(`https://www.omdbapi.com/?apikey=${this.key}&i=${id}`)
			.then(res => res.json())
			.then(data => (this.movieDetail = data));
	}
}
