import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from './core/header/header';
import { Navigation } from './core/navigation/navigation';
import { Table } from './core/features/table/table';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation, RouterOutlet, ButtonModule, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('niek.codes-dashboard-frontend');
}
