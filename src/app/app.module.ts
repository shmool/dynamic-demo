import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularStarterComponent } from './angular-starter/angular-starter.component';
import { FlyDirective } from './directives/fly.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicInModuleComponent } from './demo-views/dynamic-in-module/dynamic-in-module.component';
import { Demo1InModuleComponent } from './dynamic-components/demo1-in-module/demo1-in-module.component';
import { DynamicStandaloneComponent } from './demo-views/dynamic-standalone/dynamic-standalone.component';
import { DynamicLazyComponent } from './demo-views/dynamic-lazy/dynamic-lazy.component';
import { DynamicExternalComponent } from './demo-views/dynamic-external/dynamic-external.component';
import { DynamicPositionComponent } from './demo-views/dynamic-position/dynamic-position.component';
import { VillaggioDelPescatoreComponent } from './villaggio-del-pescatore/villaggio-del-pescatore.component';
import { DynamicManagedComponent } from './demo-views/dynamic-managed/dynamic-managed.component';
import { DynamicConfigComponent } from './demo-views/dynamic-config/dynamic-config.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularStarterComponent,
    DynamicInModuleComponent,
    Demo1InModuleComponent,
    DynamicStandaloneComponent,
    DynamicLazyComponent,
    DynamicExternalComponent,
    DynamicPositionComponent,
    VillaggioDelPescatoreComponent,
    DynamicManagedComponent,
    DynamicConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlyDirective,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
