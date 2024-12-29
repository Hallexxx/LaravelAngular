import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CourseListComponent], // Ajout de CourseListComponent et CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction de "styleUrl" en "styleUrls"
})
export class AppComponent {
  title = 'cours-en-ligne-frontend';
}
