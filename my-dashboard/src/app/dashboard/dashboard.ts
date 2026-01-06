import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenu} from '../share/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet, SideMenu
  ],
  templateUrl: './dashboard.html',
})
export default class Dashboard {

}
