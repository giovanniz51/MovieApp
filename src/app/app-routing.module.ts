import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
	{
		path: '',
		component: HomePage
	},
	{
		path: 'movies/:movieId',
		component: MovieDetailComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
