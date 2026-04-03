import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeColorService {
  private dark = false;

  init() {
    const saved = localStorage.getItem('darkmode');
    this.dark = saved === 'true';
    this.apply();
  }

  toggle(value: boolean) {
    this.dark = value;
    this.apply();
    localStorage.setItem('darkmode', String(value));
  }

  private apply() {
    const element = document.documentElement;

    if (this.dark) {
      element.classList.add('my-app-dark');
    } else {
      element.classList.remove('my-app-dark');
    }
  }

  isDark() {
    return this.dark;
  }
}
