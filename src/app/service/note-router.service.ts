import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteRouterService {

  constructor(private routerService: Router) { }

  toHome() {
    this.routerService.navigate([""]);
  }
}
