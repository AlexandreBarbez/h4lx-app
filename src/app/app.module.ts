import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { ItemService } from "./items/item.service";
import { HttpClientModule } from "@angular/common/http";
import { TodolistModule } from "./todolist/todolist.module";
import { SportComponent } from './sport/sport.component';

@NgModule({
  providers: [ItemService],
  declarations: [
    AppComponent,
    ItemListComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    TodolistModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
