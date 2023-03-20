import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {

  @Input()
  course:Course;
  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {
    
  }
  onCourseViewed(){
    console.log("Course Component... Click event..")
    this.courseSelected.emit(this.course);
  }
}
