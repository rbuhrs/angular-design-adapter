import {Input} from '@angular/core';
import {AbstractTableModel} from './abstract-table-model';
import {AbstractTableColumn} from './abstract-table-column';
import {AbstractTableRow} from './abstract-table-row';

export abstract class AbstractTableComponent {

  @Input()
  set model(modelValue: AbstractTableModel) {
    this.setTargetColumns(this.columnMapper(modelValue.columns));
    this.fillTargetRows(this.rowMapper(modelValue.columns, modelValue.data));
  }

  columnMapper(columns: AbstractTableColumn[]): any { }

  rowMapper(targetColumns: any, data: AbstractTableRow[]): any { }

  setTargetColumns(targetColumns: any): void { }

  fillTargetRows(targetRows: any): void { }

  constructor() {
  }
}
