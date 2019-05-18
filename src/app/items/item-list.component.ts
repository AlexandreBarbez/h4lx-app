import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {Item} from "./item";

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  todos: Item[] = [];

  constructor(private itemService : ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      items =>{
        this.todos = items;
      }
    );
  }
}
