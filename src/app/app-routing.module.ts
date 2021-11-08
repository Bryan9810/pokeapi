import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { PokeviewComponent } from './components/pokeview/pokeview.component';

const routes: Routes = [
  { path: '', component: PokelistComponent },
  { path: 'pokeview/:name', component: PokeviewComponent },
  { path: '**', component: PokelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
