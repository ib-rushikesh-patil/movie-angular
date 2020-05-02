import { Movie } from '../shared/Movie.model';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieService  {

   public movieList:Movie[] = [
        {name:"Iron Man", description:"class 1",releaseDate:'2010-02-01'},
        {name:"Iron Man2", description:"class 2", releaseDate:'2010-05-01'},
        {name:"Iron Man3", description:"class 3", releaseDate:'2012-01-01'},
        {name:"CA", description:"class 4",releaseDate:'2015-01-01'}
    ];
  
  
  
  constructor() {

  }

  saveDefect(movie: Movie) {
     
    this.movieList.push(movie);



  }

  
}