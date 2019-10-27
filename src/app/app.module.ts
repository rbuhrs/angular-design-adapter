import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableDemoComponent} from './modules/demo/table-demo/table-demo.component';
/*
import {
  AngularDesignAdapterCarbonModule as AngularDesignAdapterModule
} from '../../projects/angular-design-adapter-carbon/src/lib/angular-design-adapter-carbon.module';
*/
/**/
import {
  AngularDesignAdapterMaterialModule as AngularDesignAdapterModule
} from '../../projects/angular-design-adapter-material/src/lib/angular-design-adapter-material.module';
/**/

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDesignAdapterModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
