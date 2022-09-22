import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularStarterComponent } from './angular-starter/angular-starter.component';
import { DynamicInModuleComponent } from './demo-views/dynamic-in-module/dynamic-in-module.component';
import { DynamicStandaloneComponent } from './demo-views/dynamic-standalone/dynamic-standalone.component';
import { DynamicLazyComponent } from './demo-views/dynamic-lazy/dynamic-lazy.component';
import { DynamicExternalComponent } from './demo-views/dynamic-external/dynamic-external.component';
import { DynamicPositionComponent } from './demo-views/dynamic-position/dynamic-position.component';
import { VillaggioDelPescatoreComponent } from './villaggio-del-pescatore/villaggio-del-pescatore.component';
import { DynamicManagedComponent } from './demo-views/dynamic-managed/dynamic-managed.component';

const routes: Routes = [
  {path: '', component: AngularStarterComponent},
  {path: 'dynamic', component: HomeComponent},
  {path: 'demo/1', component: DynamicInModuleComponent},
  {path: 'demo/2', component: DynamicStandaloneComponent},
  {path: 'demo/3', component: DynamicLazyComponent},
  {path: 'demo/4', component: DynamicExternalComponent},
  {path: 'demo/5', component: DynamicPositionComponent},
  {path: 'demo/6', component: DynamicManagedComponent},
  {path: 'dinos', component: VillaggioDelPescatoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
