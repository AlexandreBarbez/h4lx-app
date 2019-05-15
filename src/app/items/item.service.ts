import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class ItemService{

  private baseUrl = 'api/datas';

  constructor(private http : HttpClient){
  }

  getCheckLists(): Observable<any[]>{

    return this.http.get<any[]>(`${this.baseUrl}/checklists.json`).pipe(
      tap(data => console.log("All : "+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getBestPractices(): Observable<any[]>{

    return this.http.get<any[]>(`${this.baseUrl}/bestPractices.json`).pipe(
      tap(data => console.log("All : "+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getApplications(): Observable<any[]>{

    return this.http.get<any[]>(`${this.baseUrl}/applications.json`).pipe(
      tap(data => console.log("All : "+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage =`an error occured: ${err.error.message}`;
    }else{
      errorMessage = `erver returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
