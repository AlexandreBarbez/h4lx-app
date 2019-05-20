import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import {RouterModule} from "@angular/router";
import {TodolistGuard} from "./todolist.guard";

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'todolist/:id',
        canActivate: [TodolistGuard],
        component: TodolistComponent
      }
    ]),
  ]
})
export class TodolistModule { }
