import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {appRoutes} from './routes/app.routes';

const routes: Routes = appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
