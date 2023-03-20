import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses=COURSES;

  startDate= new Date(2000,0,1); 
  price:number=9.99
  title=COURSES[2].description;
course=COURSES[2];
onCourseClick(){
  console.log("App Component ..Click Event");
}
onCourseSelected(course:Course){
  console.log("App Component ..onCourseSelected Custom Event",course);
}
}
