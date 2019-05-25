import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private baseUrl = 'api/items/todolists.json';

  constructor(private http : HttpClient) { }


  getTodolists(): Observable<Todolist[]>{
    return this.http.get<Todolist[]>(this.baseUrl).pipe(
      catchError(TodolistService.handleError)
    );
  }

  getTodolist(id: number): Observable<Todolist | undefined> {
    return this.getTodolists().pipe(
      map((todolists: Todolist[]) => todolists.find(p => p.id === id)),
      tap(data => console.log("Single todolist retrieved : "+JSON.stringify(data)))
    );
  }

  private static handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage =`an error occurred: ${err.error.message}`;
    }else{
      errorMessage = `server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
