import { Component, inject } from '@angular/core';
import Users from '../users/users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
})
export default class User {
  public userServivce= inject(Users);
}
