import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Title} from '../../../share/title/title';

@Component({
  selector: 'app-view-transitions',
  imports: [CommonModule,Title],
  template: `
    <app-title title="Transition" />
    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="imagen1"
        width="200"
        height="300"
      >
      <div
        class="bg-blue-500 w-56 h-56">

      </div>
    </section>


  `,
})
export default class ViewTransitions {

}
