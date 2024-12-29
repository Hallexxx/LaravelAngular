import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('default', style({
        transform: 'scale(1)',
        backgroundColor: 'transparent',
      })),
      state('hover', style({
        transform: 'scale(1.05)',
        backgroundColor: '#f0f0f0',
      })),
      transition('default <=> hover', animate('200ms ease-in-out'))
    ])
  ]
})
export class CourseListComponent {
  courses: any[] = [];
  categories: any[] = [];
  hoverState: { [key: number]: string } = {};

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.courses.forEach(course => this.hoverState[course.id] = 'default');
    });
  }


  toggleHover(id: number, state: string) {
    this.hoverState[id] = state;
  }

  viewDetails(courseId: number) {
    console.log('View details for course:', courseId);
  }

  applyCourse(courseId: number) {
    console.log('Apply for course:', courseId);
  }
}
