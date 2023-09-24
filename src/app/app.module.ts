import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Feature Modules
import { MovieListComponent } from './features/movie-list/movie-list.component';

// Components
import { ButtonComponent } from './components/button/button.component';
import { YearInputComponent } from './components/year-input/year-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ButtonComponent,
    YearInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
