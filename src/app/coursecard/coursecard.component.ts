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
  @Input()
  cardIndex:number;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  ngOnInit(): void {
    
  }
  onCourseViewed(){
    console.log("Course Component... Click event..")
    this.courseEmitter.emit(this.course);
  }
  cardClass(){
    if(this.course.category=='BEGINNER'){
      return ['beginner'];
    }
    //for multiple style calss use below way of code
    // return {
    //   'beginner':this.course.category=='BEGINNER', 
    // };
  }
  
}
