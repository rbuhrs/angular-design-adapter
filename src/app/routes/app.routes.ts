import {Routes} from '@angular/router';
import {TableDemoComponent} from '../modules/demo/table-demo/table-demo.component';

export const appRoutes: Routes = [
  {
    path: 'demo',
    children: [{
      path: 'table',
      component: TableDemoComponent
    }]
  },
  { path: '',
    redirectTo: '/demo/table',
    pathMatch: 'full'
  }
];
//  { path: '**', component: PageNotFoundComponent }
