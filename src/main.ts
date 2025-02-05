import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});
