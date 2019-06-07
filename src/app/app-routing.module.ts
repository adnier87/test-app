import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Part1Component } from './components/part1/part1.component';
import { Part2Component } from './components/part2/part2.component';

const routes: Routes = [
  { path: 'part-1', component: Part1Component },
  { path: 'part-2', component: Part2Component },
  { path: '', redirectTo: 'part-1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
