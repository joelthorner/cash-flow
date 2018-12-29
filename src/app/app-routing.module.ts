import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'about',
  //   loadChildren: './views/about/about.module#AboutModule'
  // },
  // {
  //   path: 'operations',
  //   loadChildren: './views/operations/operations.module#OperationsModule'
  // },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
