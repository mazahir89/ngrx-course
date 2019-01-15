import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import * as CourseActions from './../actions/course.actions';

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

  delCourse(index) {
    this.store.dispatch(new CourseActions.RemoveCourse(index));
  }

  ngOnInit() {
  }

}
