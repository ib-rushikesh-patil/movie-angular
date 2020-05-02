import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Movie} from '../shared/Movie.model';
import { MovieService } from '../shared/movie-service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }


}
