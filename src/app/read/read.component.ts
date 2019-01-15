import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(private store: Store<AppState>) {
    this.courses = store.select('course');
  }

  ngOnInit() {
  }

}
