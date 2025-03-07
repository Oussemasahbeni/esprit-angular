import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <router-outlet/>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alternance';
}
