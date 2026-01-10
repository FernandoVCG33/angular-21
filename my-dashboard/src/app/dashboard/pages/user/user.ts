import { Component, inject } from '@angular/core';
import {Title} from '../../../share/title/title';
import {CommonModule} from '@angular/common';
import {UsersService} from '../../../services/users';


@Component({
  selector: 'app-user',
  imports: [ CommonModule,
    Title
  ],
  templateUrl: './user.html',
})
export default class User {
  public userServiceList= inject(UsersService);

}
