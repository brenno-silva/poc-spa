import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { InputInfoComponent } from './components/input-info/input-info.component';

const routes: Routes = [
  { path: 'aapp/input', component: InputInfoComponent },
  {
    path: 'aapp/lazyload', 
    loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
