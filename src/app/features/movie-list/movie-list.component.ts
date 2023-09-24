import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movieResults!: Movie[]
  activeYear!: number
  searchButtonLabel = 'Search'
  yearInputPlaceholder = 'Enter Year ex. 2015'
  errorMessage!: string

  constructor(private moviesService: MoviesService) {}

  handleChangeActiveYear = (year: number) => {
    this.activeYear = year
  }

  handleSearch = () => {
    this.moviesService.getMoviesSearchResult(this.activeYear).subscribe({
      next: (result) => {
        const { data } = result

        this.movieResults = [...data]
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
