import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  checklists: any[] = [];
  goodPractices: any = [];
  apps: any = [];

  constructor(private itemService : ItemService) {
  }

  ngOnInit() {

  }

}
