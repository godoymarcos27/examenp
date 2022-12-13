import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';

const routes: Routes = [
  { path: 'p1', component: P1Component },
  { path: 'p2', component: P2Component },
  { path: 'p3', component: P3Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
