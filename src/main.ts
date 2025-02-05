import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes'


// export class App {
//   name = 'Angular';
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
});
