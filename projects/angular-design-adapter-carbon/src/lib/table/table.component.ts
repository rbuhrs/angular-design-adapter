import { Component } from '@angular/core';
import {AbstractTableComponent} from '../../../../angular-design-adapter/src/lib/table/abstract-table.component';
import {TableModel, TableItem, TableHeaderItem} from 'carbon-components-angular';
import {AbstractTableColumn, AbstractTableModel, AbstractTableRow} from '../../../../angular-design-adapter/src/lib/table';

@Component({
  selector: 'ada-cbn-table, ada-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractTableComponent {

  ibmModel: TableModel = new TableModel();

  columnMapper(columns: AbstractTableColumn[]): any {
    const tableHeader = [];
    columns.forEach((column: AbstractTableColumn) => {
      tableHeader.push(new TableHeaderItem({ data: column.header }));
    });
    return tableHeader;
  }

  rowMapper(targetColumns: any, data: AbstractTableRow[]): any {
    const tableRows = [];
    data.forEach((item: AbstractTableRow) => {
      const row = [];
      targetColumns.forEach((column: AbstractTableColumn) => {
        row.push(new TableItem({ data: item[column.name] }));
      });
      tableRows.push(row);
    });
    return tableRows;
  }

  setTargetColumns(targetColumns: any): void {
    this.ibmModel.header = targetColumns;
  }

  fillTargetRows(targetRows: any): void {
    this.ibmModel.data = targetRows;
  }

  constructor() {
    super();
  }

}
