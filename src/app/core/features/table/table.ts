import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { TableItem } from '../../../models/table-item';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, SkeletonModule, PanelModule, TableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnInit {
  tableItems: TableItem[] = [];
  loading = true;

  ngOnInit() {
    this.loadTableItems();
  }

  async loadTableItems(): Promise<void> {
    this.loading = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    this.tableItems = [
      { id: 1, name: "Item 1", description: "Short description" },
      { id: 2, name: "Item 2", description: "Short description" }
    ];

    this.loading = false;
  }
}
