import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let id= +next.url[1].path;//l'url est composé de deux parties todolist/id , on veut juste ID et casté en number avec le +
    if(isNaN(id)||id < 1){
      this.router.navigate(['/welcome']);
      return false;
    }
    return true;
  }
}
