import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  template: `
            <h1>Data Driven Form</h1>
            <app-data-driven></app-data-driven>
            `,

  styles: [],

  providers: [UserService]
})
export class AppComponent {
  title = 'app';
}
