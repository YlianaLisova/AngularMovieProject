import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMovieProject';
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
