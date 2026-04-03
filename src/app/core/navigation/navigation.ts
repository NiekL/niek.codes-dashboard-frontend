import { Component, OnInit, inject } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { Logo } from '../../shared/logo/logo';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-navigation',
  imports: [MenuModule, Logo, DividerModule],
  providers: [MessageService],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  standalone: true,
})
export class Navigation implements OnInit {
  private messageService = inject(MessageService);
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
