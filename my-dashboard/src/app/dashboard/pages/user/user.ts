import { Component, inject } from '@angular/core';
import {Title} from '../../../share/title/title';
import {CommonModule} from '@angular/common';
import {UsersService} from '../../../services/users';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [CommonModule,
    Title, RouterLink
  ],
  templateUrl: '/user.html',
})
export default class User {
  public userServiceList= inject(UsersService);

}
