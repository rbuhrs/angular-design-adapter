import { AbstractTableComponent } from './abstract-table.component';
import {AbstractTableModel} from './abstract-table-model';
import {AbstractTableColumn} from './abstract-table-column';
import {AbstractTableRow} from './abstract-table-row';

const mockTableModel: AbstractTableModel = {
  columns: [{
    name: 'column1',
    header: 'Column 1'
  }, {
    name: 'column2',
    header: 'Column 2'
  }],
  data: [{
    column1: 'row1val1',
    column2: 'row1val2'
  }, {
    column1: 'row1val1',
    column2: 'row1val2'
  }]
};

class MockTableImplementationComponent extends AbstractTableComponent {
  columns: AbstractTableColumn[];
  rows: AbstractTableRow[];

  columnMapper(columns: AbstractTableColumn[]): any {
    return columns;
  }

  rowMapper(targetColumns: any, data: AbstractTableRow[]): any {
    return data;
  }

  setTargetColumns(targetColumns: any): void {
    this.columns = targetColumns;
  }

  fillTargetRows(targetRows: any): void {
    this.rows = targetRows;
  }
}

describe('TableComponent', () => {
  const component: MockTableImplementationComponent = new MockTableImplementationComponent();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill the target model using the implementations mappers', () => {
    component.model = mockTableModel;
    expect(component.columns).toEqual(mockTableModel.columns);
    expect(component.rows).toEqual(mockTableModel.data);
  });
});
