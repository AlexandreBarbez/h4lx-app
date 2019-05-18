import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Item} from "./item";

@Injectable()
export class ItemService{

  private baseUrl = 'api/items';

  constructor(private http : HttpClient){
  }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.baseUrl}/homeItems.json`).pipe(
      tap(data => console.log("All items: "+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
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
