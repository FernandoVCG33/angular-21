import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <section [ngClass]="['w-full', cssClass]" >
      <ng-content/>
    </section>`,
})
export class HeavyLoadersFast {
  @Input({ required : true }) cssClass!: string ;
}
