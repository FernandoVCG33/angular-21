import {Injectable, signal} from '@angular/core';

interface State {
  users: Users[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Users {
  #state= signal<State>({
    loading:true,
    users:[],
  })
  constructor() {
  }
}
