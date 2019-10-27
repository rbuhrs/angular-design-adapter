import { Component } from '@angular/core';
import {AbstractTableComponent} from '../../../../angular-design-adapter/src/lib/table/abstract-table.component';
import {AbstractTableColumn, AbstractTableRow} from '../../../../angular-design-adapter/src/lib/table';

@Component({
  selector: 'ada-mat-table, ada-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractTableComponent {

  dataSource: any[];

  columns: AbstractTableColumn[];
  displayedColumns: string[];

  columnMapper(columns: AbstractTableColumn[]): any {
    return columns;
  }

  rowMapper(targetColumns: any, data: AbstractTableRow[]): any {
    return data;
  }

  setTargetColumns(targetColumns: any): void {
    this.columns = targetColumns;
    this.displayedColumns = targetColumns.map((column) => column.name);
  }

  fillTargetRows(targetRows: any): void {
    this.dataSource = targetRows;
  }

  constructor() {
    super();
  }
}
