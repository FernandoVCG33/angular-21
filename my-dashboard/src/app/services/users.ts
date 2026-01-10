import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface State {
  users: Users[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Users {
  private http=inject(HttpClient);
  #state= signal<State>({
    loading:true,
    users:[],
  })
  constructor() {
  }
}
