import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {TableModule as CarbonTableModule} from 'carbon-components-angular';

@NgModule({
  declarations: [
      TableComponent
  ],
  imports: [
    CommonModule,
    CarbonTableModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
