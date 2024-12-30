import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: any[], categoryId: number): any[] {
    return courses.filter(course => course.categoryId === categoryId);
  }
}
