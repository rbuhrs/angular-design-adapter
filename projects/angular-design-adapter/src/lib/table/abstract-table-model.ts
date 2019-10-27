import {AbstractTableColumn} from './abstract-table-column';
import {AbstractTableRow} from './abstract-table-row';

export interface AbstractTableModel {
    columns: AbstractTableColumn[];
    data: AbstractTableRow[];
}
