import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeavyLoadersFast} from '../../../share/heavy-loaders-slow/heavy-loaders-fast';
import {Title} from '../../../share/title/title';


@Component({
  selector: 'app-defer-options',
  imports: [CommonModule, HeavyLoadersFast, Title],
  standalone: true,
  templateUrl: './defer-options.html',

})
export default class DeferOptions {

}
