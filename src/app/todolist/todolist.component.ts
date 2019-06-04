import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodolistService} from "./todolist.service";

@Component({
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  id:number;
  todolist: Todolist;
  private errorMessage: string;
  doneList: Array<string>;

  constructor(private route: ActivatedRoute,
              private todolistService: TodolistService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    console.log("Todolist selected id : " + this.id);

    this.todolistService.getTodolist(this.id).subscribe(
      list => {
        this.todolist = list;
        if(this.todolist === undefined){
          this.router.navigate(['/welcome']);
        }
      },
      error => this.errorMessage = error
    );
    this.doneList = [];
  }

  achieveItem(item: string) {
    if(!(-1 < this.doneList.indexOf(item))){
      this.doneList.push(item);
    }else{
      this.doneList.splice(this.doneList.indexOf(item),1);
    }
  }

  isClicked(item: string) {
    return -1 < this.doneList.indexOf(item);
  }
}
