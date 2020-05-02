import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MovieService } from '../shared/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    movieForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private movieService:MovieService,private router:Router) { }

    ngOnInit() {
        this.movieForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.max(100)]],
            description: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(200)]],
            releaseDate: ['', [Validators.required]]
        });
    }

  get f() { return this.movieForm.controls; }
 
  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.movieForm.invalid) {
            return;
        }

    this.movieService.movieList.push(this.movieForm.value);
    console.warn(this.movieForm.value);
    this.router.navigate(['movie-list']);
  }

  
}
