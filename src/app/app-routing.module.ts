import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from "./items/item-list.component";
import {SportComponent} from "./sport/sport.component";

const routes: Routes = [
  {path: 'sport/:id', component: SportComponent},
  {path: 'welcome', component: ItemListComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
