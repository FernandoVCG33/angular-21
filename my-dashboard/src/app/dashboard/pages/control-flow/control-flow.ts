import {Component, signal} from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
})
export default class ControlFlow {
  public showContent=signal(false);
  public grade=signal<Grade>('A');
  public frameWorks=signal(['Angular', 'React', 'Vue', 'Svelte']);
  public frameWorks2=signal([]);

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
