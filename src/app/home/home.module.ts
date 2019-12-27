import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieComponent } from '../movie/movie.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, AppRoutingModule],
	exports: [],
	declarations: [
		HomePage,
		MovieListComponent,
		MovieComponent,
		MovieDetailComponent
	]
})
export class HomePageModule {}
