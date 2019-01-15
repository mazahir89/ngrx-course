import { Course } from './../models/course.model';
import { Action } from '@ngrx/store';
import * as CourseActions from './../actions/course.actions';

const initialState: Course = {
  name: 'Angular',
  url: 'https://angular.io/'
};

export function addCourseReducer(state: Course[] = [initialState], action: CourseActions.Actions) {

  switch (action.type) {
    case CourseActions.ADD_COURSE:
      return [...state, action.payload];

    case CourseActions.REMOVE_COURSE:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
