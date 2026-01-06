import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Title} from '../../../share/title/title';
import {CommonModule, JsonPipe} from '@angular/common';

@Component({
  standalone: true,
  imports: [
    Title,
    JsonPipe,
    CommonModule
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: ` <app-title title="Change Dections" />
     <pre> {{frameWorkSignal() | json}} </pre>
     <pre> {{frameWorkProperty | json}} </pre>


    `
})
export default class ChangeDetection {
  public frameWorkSignal = signal(
    {
      name: 'Angular',
      relaseDate:2016
    }
  );
  public frameWorkProperty={
    name:'Angular de property',
    relaseDate:2016
  }

  constructor() {

    setTimeout(() => {
      //this.frameWorkProperty.name='React';
      this.frameWorkSignal.update(value => ({
        ...value,
        name: 'React'
      }))
      console.log('hecho');
    },2000);
  }
}
