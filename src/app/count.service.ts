import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  STORAGE_KEY = 'count_value';

  count = signal(this.getCount());

  // Method to get current count
  getCount(): number {
    return Number(localStorage.getItem(this.STORAGE_KEY)) || 0;
  }

  // Method to set a new count value after being incremented
  saveCount(value: number) {
    localStorage.setItem(this.STORAGE_KEY, value.toString());
  }

  // Method called by button to increment count
  increment(): void {
    this.count.set(this.count() + 1);
    this.saveCount(this.count());
  }
}
