import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Course } from '../models/course.model';
import * as CourseActions from './../actions/course.actions';
import { addCourseReducer } from '../reducers/course.reducer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addCourse(name, url) {
    this.store.dispatch(new CourseActions.AddCourse({
      name: name, url: url
    }));
  }

  ngOnInit() {
  }

}
