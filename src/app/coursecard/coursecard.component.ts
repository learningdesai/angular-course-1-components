import { Component,Input,OnInit } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {

  @Input()
  course:Course

  ngOnInit(): void {
    
  }
  onCourseViewed(){
    console.log("Course Component... Click event..")
  }
}
