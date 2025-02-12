import { Component, inject } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countService = inject(CountService)
}
