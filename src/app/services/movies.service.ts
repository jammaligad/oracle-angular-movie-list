import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../types';

const API_URL = 'https://jsonmock.hackerrank.com/api/moviesdata?Year='

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesSearchResult(year: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(API_URL + year)
  }
}
