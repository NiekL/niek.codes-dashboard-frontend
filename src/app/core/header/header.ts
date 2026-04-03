import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeColorService } from '../../services/theme-color-service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleSwitchModule, FormsModule, MenubarModule, BreadcrumbModule, CardModule, AvatarModule, DividerModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  //Breadcrumbs
  items: MenuItem[] | undefined;
  home: MenuItem[] | undefined;

  //Theme color switch
  checked: boolean = false;

  constructor(private themeColorService: ThemeColorService) {}

  ngOnInit() {
    this.checked = this.themeColorService.isDark();

    this.items = [
      { label: 'Components' },
      { label: 'Form' },
      { label: 'InputText', routerLink: '/inputtext' },
    ];
    this.home = [{ icon: 'pi pi-home', routerLink: '/' }];
  }

  onToggle() {
    this.themeColorService.toggle(this.checked);
  }
}
