import { Course } from './../models/course.model';
import { Action } from '@ngrx/store';
import * as CourseActions from './../actions/course.actions';

const initialState: Course = {
  name: 'Initial Course',
  url: 'http://www.google.com'
};

export function addCourseReducer(state: Course[] = [initialState], action: CourseActions.Actions) {

  switch (action.type) {
    case CourseActions.ADD_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
}
